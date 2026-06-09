module.exports=[93695,(e,t,a)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},18622,(e,t,a)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,a)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,a)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,a)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,a)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},75171,e=>{"use strict";var t=e.i(47909),a=e.i(74017),r=e.i(96250),s=e.i(59756),l=e.i(61916),n=e.i(74677),o=e.i(69741),i=e.i(16795),d=e.i(87718),c=e.i(95169),u=e.i(47587),p=e.i(66012),m=e.i(70101),h=e.i(26937),b=e.i(10372),g=e.i(93695);e.i(52474);var f=e.i(5232),v=e.i(89171);async function x(e){try{let{nik:t,namaLengkap:a,tempatLair:r,tempatLahir:s,tanggalLahir:l,jenisKelamin:n,agama:o,statusPernikahan:i,alamatKtp:d,whatsapp:c,email:u,pendidikanTerakhir:p,namaInstitusi:m,jurusan:h,tahunLulus:b,ipk:g,posisiDilamar:f,punyaPengalaman:x,perusahaanTerakhir:w,jabatanTerakhir:R,lamaBekerja:y,keahlianDimiliki:k,penguasaanKomputer:A}=await e.json(),P=a||"Pelamar",E=new Date().toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"}),C=`
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <title>Formulir Pendaftaran - ${P}</title>
        <style>
            @page {
                size: A4;
                margin: 20mm 15mm;
                @bottom-right {
                    content: "Halaman 1 dari 1";
                    font-family: Arial, sans-serif;
                    font-size: 8pt;
                    color: #94a3b8;
                }
            }
            body {
                font-family: Arial, sans-serif;
                color: #1e293b;
                margin: 0;
                padding: 0;
                font-size: 10pt;
                line-height: 1.5;
            }
            .kop-surat {
                border-bottom: 2px solid #0f766e;
                padding-bottom: 12px;
                margin-bottom: 20px;
            }
            .klinik-title {
                font-size: 14pt;
                font-weight: bold;
                color: #0f766e;
                text-transform: uppercase;
                margin: 0;
            }
            .klinik-subtitle {
                font-size: 8.5pt;
                color: #64748b;
                margin: 4px 0 0 0;
            }
            .doc-title {
                text-align: center;
                font-size: 12pt;
                font-weight: bold;
                color: #0f172a;
                text-transform: uppercase;
                margin: 20px 0;
                letter-spacing: 0.5px;
            }
            .section-header {
                font-size: 9pt;
                font-weight: bold;
                color: #0f766e;
                text-transform: uppercase;
                background-color: #f0fdfa;
                padding: 6px 10px;
                margin-top: 15px;
                margin-bottom: 8px;
                border-left: 3px solid #0f766e;
            }
            .data-table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 10px;
            }
            .data-table td {
                padding: 5px 8px;
                vertical-align: top;
                border-bottom: 1px solid #f1f5f9;
            }
            .data-table td.label {
                width: 35%;
                color: #64748b;
            }
            .data-table td.colon {
                width: 3%;
                color: #94a3b8;
                text-align: center;
            }
            .data-table td.value {
                width: 62%;
                color: #0f172a;
                font-weight: bold;
            }
            .badge-box {
                border: 1px dashed #0f766e;
                padding: 10px;
                text-align: center;
                background-color: #f0fdfa;
                border-radius: 6px;
                margin-top: 25px;
            }
            .badge-text {
                font-size: 9.5pt;
                font-weight: bold;
                color: #0f766e;
            }
            .footer-sign {
                margin-top: 35px;
                width: 100%;
                border-collapse: collapse;
            }
            .footer-sign td {
                width: 50%;
                text-align: center;
            }
            .sign-title {
                color: #64748b;
                font-size: 9pt;
                margin-bottom: 55px;
            }
            .sign-name {
                font-weight: bold;
                color: #0f172a;
                text-decoration: underline;
            }
        </style>
    </head>
    <body>
        <div class="kop-surat">
            <div class="klinik-title">RS Arun Lhokseumawe</div>
            <div class="klinik-subtitle">Jl. Plaju, Batuphat Timur, Kec. Muara Satu, Kota Lhokseumawe, Aceh</div>
        </div>

        <div class="doc-title">Formulir Bukti Pendaftaran Rekrutmen</div>

        <div class="section-header">A. Data Pribadi Pelamar</div>
        <table class="data-table">
            <tr><td class="label">Nomor Induk Kependudukan</td><td class="colon">:</td><td class="value">${t}</td></tr>
            <tr><td class="label">Nama Lengkap Sesuai KTP</td><td class="colon">:</td><td class="value">${P}</td></tr>
            <tr><td class="label">Tempat, Tanggal Lahir</td><td class="colon">:</td><td class="value">${s||r||"-"}, ${l}</td></tr>
            <tr><td class="label">Jenis Kelamin / Agama</td><td class="colon">:</td><td class="value">${n} / ${o}</td></tr>
            <tr><td class="label">Status Pernikahan</td><td class="colon">:</td><td class="value">${i}</td></tr>
            <tr><td class="label">Nomor WhatsApp</td><td class="colon">:</td><td class="value">${c}</td></tr>
            <tr><td class="label">Alamat E-mail</td><td class="colon">:</td><td class="value">${u}</td></tr>
            <tr><td class="label">Alamat Tinggal KTP</td><td class="colon">:</td><td class="value">${d}</td></tr>
        </table>

        <div class="section-header">B. Informasi Pendidikan Terakhir</div>
        <table class="data-table">
            <tr><td class="label">Jenjang Pendidikan</td><td class="colon">:</td><td class="value">${p}</td></tr>
            <tr><td class="label">Nama Institusi / Kampus</td><td class="colon">:</td><td class="value">${m}</td></tr>
            <tr><td class="label">Jurusan / Program Studi</td><td class="colon">:</td><td class="value">${h}</td></tr>
            <tr><td class="label">Tahun Lulus / Nilai IPK</td><td class="colon">:</td><td class="value">${b} &nbsp;(IPK: ${g})</td></tr>
        </table>

        <div class="section-header">C. Posisi Yang Dilamar</div>
        <table class="data-table">
            <tr><td class="label">Posisi Formasi</td><td class="colon">:</td><td class="value text-emerald-700">${f||"Staf Keuangan"}</td></tr>
        </table>

        <div class="section-header">D. Pengalaman Kerja & Kompetensi</div>
        <table class="data-table">
            <tr><td class="label">Status Pengalaman Kerja</td><td class="colon">:</td><td class="value">${"Ya"===x?"Berpengalaman":"Fresh Graduate"}</td></tr>
            ${"Ya"===x?`
            <tr><td class="label">Perusahaan / Jabatan</td><td class="colon">:</td><td class="value">${w} / ${R} (${y})</td></tr>
            `:""}
            <tr><td class="label">Keahlian Utama</td><td class="colon">:</td><td class="value" style="font-weight:normal;">${k||"-"}</td></tr>
            <tr><td class="label">Sistem Operasi / Komputer</td><td class="colon">:</td><td class="value" style="font-weight:normal;">${A||"-"}</td></tr>
        </table>

        <div class="badge-box">
            <div class="badge-text">STATUS FORMULIR: BERKAS DIGITAL BERHASIL DISIMPAN</div>
            <div style="font-size: 8pt; color: #64748b; margin-top: 3px;">Tanda bukti sah pendaftaran administrasi rekrutmen RS Arun Lhokseumawe.</div>
        </div>

        <table class="footer-sign">
            <tr>
                <td>&nbsp;</td>
                <td>
                    <div class="sign-title">Lhokseumawe, ${E}</div>
                    <div class="sign-name">${P}</div>
                    <div style="font-size: 8.5pt; color: #64748b;">Pelamar Kerja</div>
                </td>
            </tr>
        </table>
    </body>
    </html>
    `;return new v.NextResponse(C,{headers:{"Content-Type":"text/html","Content-Disposition":`attachment; filename=Formulir_${P.replace(/\s+/g,"_")}.html`}})}catch(e){return v.NextResponse.json({error:"Gagal membuat file formulir"},{status:500})}}e.s(["POST",0,x],13661);var w=e.i(13661);let R=new t.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/api/download-formulir/route",pathname:"/api/download-formulir",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/app/api/download-formulir/route.ts",nextConfigOutput:"",userland:w,...{}}),{workAsyncStorage:y,workUnitAsyncStorage:k,serverHooks:A}=R;async function P(e,t,r){r.requestMeta&&(0,s.setRequestMeta)(e,r.requestMeta),R.isDev&&(0,s.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let v="/api/download-formulir/route";v=v.replace(/\/index$/,"")||"/";let x=await R.prepare(e,t,{srcPage:v,multiZoneDraftMode:!1});if(!x)return t.statusCode=400,t.end("Bad Request"),null==r.waitUntil||r.waitUntil.call(r,Promise.resolve()),null;let{buildId:w,deploymentId:y,params:k,nextConfig:A,parsedUrl:P,isDraftMode:E,prerenderManifest:C,routerServerContext:T,isOnDemandRevalidate:S,revalidateOnlyGenerated:$,resolvedPathname:N,clientReferenceManifest:I,serverActionsManifest:K}=x,O=(0,o.normalizeAppPath)(v),j=!!(C.dynamicRoutes[O]||C.routes[N]),q=async()=>((null==T?void 0:T.render404)?await T.render404(e,t,P,!1):t.end("This page could not be found"),null);if(j&&!E){let e=!!C.routes[N],t=C.dynamicRoutes[O];if(t&&!1===t.fallback&&!e){if(A.adapterPath)return await q();throw new g.NoFallbackError}}let _=null;!j||R.isDev||E||(_="/index"===(_=N)?"/":_);let D=!0===R.isDev||!j,U=j&&!D;K&&I&&(0,n.setManifestsSingleton)({page:v,clientReferenceManifest:I,serverActionsManifest:K});let H=e.method||"GET",M=(0,l.getTracer)(),L=M.getActiveScopeSpan(),F=!!(null==T?void 0:T.isWrappedByNextServer),z=!!(0,s.getRequestMeta)(e,"minimalMode"),B=(0,s.getRequestMeta)(e,"incrementalCache")||await R.getIncrementalCache(e,A,C,z);null==B||B.resetRequestCache(),globalThis.__incrementalCache=B;let G={params:k,previewProps:C.preview,renderOpts:{experimental:{authInterrupts:!!A.experimental.authInterrupts},cacheComponents:!!A.cacheComponents,supportsDynamicResponse:D,incrementalCache:B,cacheLifeProfiles:A.cacheLife,waitUntil:r.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,a,r,s)=>R.onRequestError(e,t,r,s,T)},sharedContext:{buildId:w,deploymentId:y}},J=new i.NodeNextRequest(e),W=new i.NodeNextResponse(t),Y=d.NextRequestAdapter.fromNodeNextRequest(J,(0,d.signalFromNodeResponse)(t));try{let s,n=async e=>R.handle(Y,G).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let a=M.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==c.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let r=a.get("next.route");if(r){let t=`${H} ${r}`;e.setAttributes({"next.route":r,"http.route":r,"next.span_name":t}),e.updateName(t),s&&s!==e&&(s.setAttribute("http.route",r),s.updateName(t))}else e.updateName(`${H} ${v}`)}),o=async s=>{var l,o;let i=async({previousCacheEntry:a})=>{try{if(!z&&S&&$&&!a)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let l=await n(s);e.fetchMetrics=G.renderOpts.fetchMetrics;let o=G.renderOpts.pendingWaitUntil;o&&r.waitUntil&&(r.waitUntil(o),o=void 0);let i=G.renderOpts.collectedTags;if(!j)return await (0,p.sendResponse)(J,W,l,G.renderOpts.pendingWaitUntil),null;{let e=await l.blob(),t=(0,m.toNodeOutgoingHttpHeaders)(l.headers);i&&(t[b.NEXT_CACHE_TAGS_HEADER]=i),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let a=void 0!==G.renderOpts.collectedRevalidate&&!(G.renderOpts.collectedRevalidate>=b.INFINITE_CACHE)&&G.renderOpts.collectedRevalidate,r=void 0===G.renderOpts.collectedExpire||G.renderOpts.collectedExpire>=b.INFINITE_CACHE?void 0:G.renderOpts.collectedExpire;return{value:{kind:f.CachedRouteKind.APP_ROUTE,status:l.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:a,expire:r}}}}catch(t){throw(null==a?void 0:a.isStale)&&await R.onRequestError(e,t,{routerKind:"App Router",routePath:v,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:S})},!1,T),t}},d=await R.handleResponse({req:e,nextConfig:A,cacheKey:_,routeKind:a.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:C,isRoutePPREnabled:!1,isOnDemandRevalidate:S,revalidateOnlyGenerated:$,responseGenerator:i,waitUntil:r.waitUntil,isMinimalMode:z});if(!j)return null;if((null==d||null==(l=d.value)?void 0:l.kind)!==f.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==d||null==(o=d.value)?void 0:o.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});z||t.setHeader("x-nextjs-cache",S?"REVALIDATED":d.isMiss?"MISS":d.isStale?"STALE":"HIT"),E&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let c=(0,m.fromNodeOutgoingHttpHeaders)(d.value.headers);return z&&j||c.delete(b.NEXT_CACHE_TAGS_HEADER),!d.cacheControl||t.getHeader("Cache-Control")||c.get("Cache-Control")||c.set("Cache-Control",(0,h.getCacheControlHeader)(d.cacheControl)),await (0,p.sendResponse)(J,W,new Response(d.value.body,{headers:c,status:d.value.status||200})),null};F&&L?await o(L):(s=M.getActiveScopeSpan(),await M.withPropagatedContext(e.headers,()=>M.trace(c.BaseServerSpan.handleRequest,{spanName:`${H} ${v}`,kind:l.SpanKind.SERVER,attributes:{"http.method":H,"http.target":e.url}},o),void 0,!F))}catch(t){if(t instanceof g.NoFallbackError||await R.onRequestError(e,t,{routerKind:"App Router",routePath:O,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:S})},!1,T),j)throw t;return await (0,p.sendResponse)(J,W,new Response(null,{status:500})),null}}e.s(["handler",0,P,"patchFetch",0,function(){return(0,r.patchFetch)({workAsyncStorage:y,workUnitAsyncStorage:k})},"routeModule",0,R,"serverHooks",0,A,"workAsyncStorage",0,y,"workUnitAsyncStorage",0,k],75171)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__17usp3j._.js.map