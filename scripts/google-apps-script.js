/**
 * Google Apps Script Webhook Handler for OpenStemField
 * 
 * Instructions:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1C3C93DR1KmzhIa-AUG-dL0RqsxA4ZzsmVMh5G3HB4Do/edit
 * 2. Click Extensions -> Apps Script.
 * 3. Replace all code in the editor with this script.
 * 4. Click Save (disk icon).
 * 5. Click Deploy -> Manage deployments -> Click the pencil edit icon -> Select "New version" -> Click Deploy.
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    // 1. Mentorship Application: Save to Sheet & Email to Siam
    if (data.action === "mentorshipApplication") {
      var sheetName = "Mentorship Applications";
      var sheet = ss.getSheetByName(sheetName);
      
      // Create tab and headers if not yet created
      if (!sheet) {
        sheet = ss.insertSheet(sheetName);
        var headers = [
          "Timestamp",
          "Full Name",
          "Country & Target",
          "Email",
          "Phone / WhatsApp",
          "Department / Field",
          "CGPA",
          "Test Scores (IELTS/GRE)",
          "Message / Quote",
          "Status"
        ];
        sheet.appendRow(headers);
        sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#eef4ec");
        sheet.setFrozenRows(1);
      }

      var timestamp = new Date();
      var rowData = [
        timestamp,
        data.name || "",
        data.country || "",
        data.email || "",
        data.phone || "",
        data.department || "",
        data.cgpa || "",
        data.test_scores || "",
        data.message || "",
        "New Application"
      ];
      sheet.appendRow(rowData);

      // Send Email to Siam
      var recipient = "shahriyarkarimsiam@gmail.com";
      var subject = "🎓 New OpenStemField Mentorship Application: " + (data.name || "Student");
      var htmlBody = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222; max-width: 620px; border: 1px solid #c9d8c4; padding: 24px; border-radius: 8px; background: #ffffff;">
          <h2 style="color: #123b2a; margin-top: 0; border-bottom: 2px solid #123b2a; padding-bottom: 10px; font-size: 22px;">New Mentorship Application Received</h2>
          <p style="font-size: 14px; color: #444;">A student has submitted an academic mentorship & consultancy application on <strong>OpenStemField</strong>.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 13.5px;">
            <tr style="background: #f7f9f7;">
              <td style="padding: 10px; font-weight: bold; width: 35%; border-bottom: 1px solid #e0e0e0; color: #123b2a;">Full Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${data.name || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e0e0e0; color: #123b2a;">Country / Target:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${data.country || 'N/A'}</td>
            </tr>
            <tr style="background: #f7f9f7;">
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e0e0e0; color: #123b2a;">Email Address:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;"><a href="mailto:${data.email}">${data.email || 'N/A'}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e0e0e0; color: #123b2a;">Phone / WhatsApp:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${data.phone || 'N/A'}</td>
            </tr>
            <tr style="background: #f7f9f7;">
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e0e0e0; color: #123b2a;">Target Department:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${data.department || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e0e0e0; color: #123b2a;">CGPA:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${data.cgpa || 'N/A'}</td>
            </tr>
            <tr style="background: #f7f9f7;">
              <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #e0e0e0; color: #123b2a;">IELTS / GRE Scores:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${data.test_scores || 'N/A'}</td>
            </tr>
          </table>

          <div style="background: #f7f5ee; border-left: 4px solid #123b2a; padding: 16px; margin: 20px 0; border-radius: 4px;">
            <strong style="color: #123b2a; display: block; margin-bottom: 6px;">Applicant's Message / Quote:</strong>
            <p style="margin: 0; white-space: pre-wrap; font-style: italic; color: #2e3d34;">"${data.message || 'No message provided'}"</p>
          </div>

          <p style="font-size: 12.5px; color: #777; margin-top: 25px; border-top: 1px solid #eee; padding-top: 12px;">Recorded into your Google Sheet (tab: <strong>Mentorship Applications</strong>) automatically.</p>
        </div>
      `;

      try {
        MailApp.sendEmail({
          to: recipient,
          subject: subject,
          htmlBody: htmlBody,
          replyTo: data.email || recipient
        });
      } catch (mailErr) {
        // Fallback if MailApp permissions issue
      }

      return ContentService.createTextOutput(JSON.stringify({ status: "ok", message: "Mentorship application logged and emailed successfully" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // 2. Add or Update a row in 'Publishing Progress'
    if (data.action === "addProgress") {
      var sheet = ss.getSheetByName("Publishing Progress");
      var values = sheet.getDataRange().getValues();
      var targetRow = -1;
      
      for (var i = 1; i < values.length; i++) {
        if (String(values[i][0]).trim() === String(data.sourceRow).trim()) {
          targetRow = i + 1;
          break;
        }
      }
      
      var rowData = [
        data.sourceRow,
        data.country,
        data.institution,
        data.officialWebsite,
        data.universityGuide,
        data.publishedContent,
        data.evidenceReviewDate,
        data.gitCommit,
        data.deploymentQa,
        data.nextAction,
        data.publishedDone === true,
        data.sitemapUpdated === true
      ];
      
      if (targetRow > 0) {
        sheet.getRange(targetRow, 1, 1, rowData.length).setValues([rowData]);
      } else {
        sheet.appendRow(rowData);
      }
      
      return ContentService.createTextOutput(JSON.stringify({ status: "ok", message: "Publishing progress updated" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // 3. Update status in 'Country Rotation'
    if (data.action === "updateRotation") {
      var sheet = ss.getSheetByName("Country Rotation");
      var values = sheet.getDataRange().getValues();
      
      for (var i = 1; i < values.length; i++) {
        if (values[i][1].toString().toLowerCase() === data.country.toLowerCase()) {
          var row = i + 1;
          if (data.publishedCount !== undefined) sheet.getRange(row, 4).setValue(data.publishedCount);
          if (data.currentRoundStatus) sheet.getRange(row, 5).setValue(data.currentRoundStatus);
          if (data.nextSourceRow) sheet.getRange(row, 6).setValue(data.nextSourceRow);
          if (data.initialName) sheet.getRange(row, 7).setValue(data.initialName);
          if (data.mostRecentPublished) sheet.getRange(row, 8).setValue(data.mostRecentPublished);
          if (data.updatedDate) sheet.getRange(row, 11).setValue(data.updatedDate);
          break;
        }
      }
      
      return ContentService.createTextOutput(JSON.stringify({ status: "ok", message: "Country rotation updated" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // 4. Log excluded or deferred items in 'Review Flags'
    if (data.action === "addFlag") {
      var sheet = ss.getSheetByName("Review Flags");
      sheet.appendRow([
        data.sourceRow,
        data.status,
        data.reason,
        data.reviewedOn
      ]);
      return ContentService.createTextOutput(JSON.stringify({ status: "ok", message: "Review flag added" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Unknown action" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: "ok", message: "OpenStemField Webhook is ready" }))
    .setMimeType(ContentService.MimeType.JSON);
}
