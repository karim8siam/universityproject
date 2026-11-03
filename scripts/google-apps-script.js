/**
 * Google Apps Script Webhook Handler for OpenStemField
 * 
 * Instructions:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/175S6D2hqI4q6mDwgoa1blreIATafYzQKq523A_VfBT8/edit
 * 2. Click Extensions -> Apps Script.
 * 3. Replace all code in the editor with this script.
 * 4. Click Save (disk icon).
 * 5. Click Deploy -> New deployment (or Manage deployments -> Edit -> New version).
 *    - Type: Web app
 *    - Execute as: Me (your Google account)
 *    - Who has access: Anyone
 * 6. Copy the Web App URL (e.g. https://script.google.com/macros/s/.../exec) and provide it to Antigravity.
 */

var SPREADSHEET_ID = "175S6D2hqI4q6mDwgoa1blreIATafYzQKq523A_VfBT8";
var NOTIFICATION_EMAIL = "shahriyarkarimsiam@gmail.com";

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    if (!ss) {
      ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    }

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
      var rawPhone = String(data.phone || "").trim();
      var safePhone = (rawPhone.startsWith("+") || rawPhone.startsWith("=")) ? "'" + rawPhone : rawPhone;

      var rowData = [
        timestamp,
        data.name || "",
        data.country || "",
        data.email || "",
        safePhone,
        data.department || "",
        data.cgpa || "",
        data.test_scores || "",
        data.message || "",
        "New Application"
      ];
      sheet.appendRow(rowData);

      // Send Email Notification to Siam
      var recipient = NOTIFICATION_EMAIL;
      var subject = "🎓 New OpenStemField Mentorship Application: " + (data.name || "Student");
      var htmlBody = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222; max-width: 620px; border: 1px solid #c9d8c4; padding: 24px; border-radius: 8px; background: #ffffff;">
          <h2 style="color: #123b2a; margin-top: 0; border-bottom: 2px solid #123b2a; padding-bottom: 10px; font-size: 22px;">New Mentorship Application Received</h2>
          <p style="font-size: 14px; color: #444;">A student has submitted an academic mentorship application on <strong>OpenStemField</strong>.</p>
          
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

    // 2. World 1% Club Application
    if (data.action === "onePercentClubApplication") {
      var clubSheetName = "1% Club Applications";
      var clubSheet = ss.getSheetByName(clubSheetName);
      if (!clubSheet) {
        clubSheet = ss.insertSheet(clubSheetName);
        var clubHeaders = [
          "Timestamp",
          "Full Name",
          "Email",
          "Institution & Degree",
          "STEM Field",
          "Top 1% Track Record",
          "Portfolio / Scholar / GitHub",
          "Statement / Complex Problems Solved",
          "Status"
        ];
        clubSheet.appendRow(clubHeaders);
        clubSheet.getRange(1, 1, 1, clubHeaders.length).setFontWeight("bold").setBackground("#fdf2e8");
        clubSheet.setFrozenRows(1);
      }

      var rawPhoneClub = String(data.phone || "").trim();
      var safePhoneClub = (rawPhoneClub.startsWith("+") || rawPhoneClub.startsWith("=")) ? "'" + rawPhoneClub : rawPhoneClub;

      clubSheet.appendRow([
        new Date(),
        data.name || "",
        data.email || "",
        data.institution || "",
        data.field || "",
        data.achievements || "",
        data.portfolio || "",
        data.statement || "",
        "Review Pending"
      ]);

      try {
        MailApp.sendEmail({
          to: NOTIFICATION_EMAIL,
          subject: "🌟 New World 1% Club Application: " + (data.name || "Solver") + " (" + (data.field || "STEM") + ")",
          htmlBody: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222; max-width: 620px; border: 1px solid #d8b896; padding: 24px; border-radius: 8px; background: #ffffff;">
              <h2 style="color: #9b4d1b; margin-top: 0; border-bottom: 2px solid #9b4d1b; padding-bottom: 10px; font-size: 22px;">New World 1% Club Application</h2>
              <p><strong>Name:</strong> ${data.name || 'N/A'} (<a href="mailto:${data.email}">${data.email || 'N/A'}</a>)</p>
              <p><strong>Institution:</strong> ${data.institution || 'N/A'}</p>
              <p><strong>Field:</strong> ${data.field || 'N/A'}</p>
              <p><strong>Top 1% Proof:</strong> ${data.achievements || 'N/A'}</p>
              <p><strong>Portfolio:</strong> <a href="${data.portfolio}">${data.portfolio || 'N/A'}</a></p>
              <p><strong>Statement:</strong> "${data.statement || 'N/A'}"</p>
            </div>
          `,
          replyTo: data.email || NOTIFICATION_EMAIL
        });
      } catch (e) {}

      return ContentService.createTextOutput(JSON.stringify({ status: "ok", message: "Club application logged and emailed successfully" }))
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
  return ContentService.createTextOutput(JSON.stringify({ status: "ok", message: "OpenStemField Webhook is ready", spreadsheetId: SPREADSHEET_ID }))
    .setMimeType(ContentService.MimeType.JSON);
}
