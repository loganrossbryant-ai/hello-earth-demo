/* Zig iPhone offline support — no analytics or external requests */
const VERSION='zig-ios-2026-11-08-v1';
const SHELL=['./','./index.html','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',event=>event.waitUntil(
  caches.open(VERSION).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting())
));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(key=>key.startsWith('zig-ios-')&&key!==VERSION).map(key=>caches.delete(key)));
  await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;
  event.respondWith((async()=>{
    let cache=await caches.open(VERSION);
    let hit=await cache.match(request);
    if(hit)return hit;
    try{let resp=await fetch(request);if(resp.ok&&new URL(request.url).pathname.includes('/zig-space-quest/'))await cache.put(request,resp.clone());return resp;}
    catch(e){if(request.mode==='navigate'){const fallback=await cache.match('./index.html');if(fallback)return fallback;}return Response.error();}
  })());
});