import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const port = Number(process.env.PORT || 4173);
const root = process.cwd();
const mimes = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.ico':'image/x-icon'};
createServer(async(req,res)=>{
 try {
  let path = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  if(path==='/' || !extname(path)) path='/index.html';
  const filepath=resolve(root,'.'+path);
  if(filepath!==root && !filepath.startsWith(root+sep)) {res.writeHead(403);res.end('Forbidden');return;}
  const info=await stat(filepath);if(!info.isFile())throw new Error('Not a file');
  res.writeHead(200,{'Content-Type':mimes[extname(filepath)]||'application/octet-stream','Cache-Control':'no-store'});
  res.end(await readFile(filepath));
 } catch(e) {res.writeHead(404);res.end('Not found');}
}).listen(port,'127.0.0.1',()=>console.log(`OpenField running at http://localhost:${port}`));