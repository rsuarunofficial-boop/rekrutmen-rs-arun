module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/download-formulir/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
async function POST(request) {
    try {
        const body = await request.json();
        // Mapping data kiriman dari Frontend
        const { nik, namaLengkap, tempatLair, tempatLahir, tanggalLahir, jenisKelamin, agama, statusPernikahan, alamatKtp, whatsapp, email, pendidikanTerakhir, namaInstitusi, jurusan, tahunLulus, ipk, posisiDilamar, punyaPengalaman, perusahaanTerakhir, jabatanTerakhir, lamaBekerja, keahlianDimiliki, penguasaanKomputer } = body;
        const namaPelamar = namaLengkap || 'Pelamar';
        const kotaLahir = tempatLahir || tempatLair || '-';
        const posisiDipilih = posisiDilamar || 'Staf Keuangan';
        const tglCetak = new Date().toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        // HTML Template dengan CSS Paged Media Standar Cetak Profesional
        const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <title>Formulir Pendaftaran - ${namaPelamar}</title>
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
            <tr><td class="label">Nomor Induk Kependudukan</td><td class="colon">:</td><td class="value">${nik}</td></tr>
            <tr><td class="label">Nama Lengkap Sesuai KTP</td><td class="colon">:</td><td class="value">${namaPelamar}</td></tr>
            <tr><td class="label">Tempat, Tanggal Lahir</td><td class="colon">:</td><td class="value">${kotaLahir}, ${tanggalLahir}</td></tr>
            <tr><td class="label">Jenis Kelamin / Agama</td><td class="colon">:</td><td class="value">${jenisKelamin} / ${agama}</td></tr>
            <tr><td class="label">Status Pernikahan</td><td class="colon">:</td><td class="value">${statusPernikahan}</td></tr>
            <tr><td class="label">Nomor WhatsApp</td><td class="colon">:</td><td class="value">${whatsapp}</td></tr>
            <tr><td class="label">Alamat E-mail</td><td class="colon">:</td><td class="value">${email}</td></tr>
            <tr><td class="label">Alamat Tinggal KTP</td><td class="colon">:</td><td class="value">${alamatKtp}</td></tr>
        </table>

        <div class="section-header">B. Informasi Pendidikan Terakhir</div>
        <table class="data-table">
            <tr><td class="label">Jenjang Pendidikan</td><td class="colon">:</td><td class="value">${pendidikanTerakhir}</td></tr>
            <tr><td class="label">Nama Institusi / Kampus</td><td class="colon">:</td><td class="value">${namaInstitusi}</td></tr>
            <tr><td class="label">Jurusan / Program Studi</td><td class="colon">:</td><td class="value">${jurusan}</td></tr>
            <tr><td class="label">Tahun Lulus / Nilai IPK</td><td class="colon">:</td><td class="value">${tahunLulus} &nbsp;(IPK: ${ipk})</td></tr>
        </table>

        <div class="section-header">C. Posisi Yang Dilamar</div>
        <table class="data-table">
            <tr><td class="label">Posisi Formasi</td><td class="colon">:</td><td class="value text-emerald-700">${posisiDipilih}</td></tr>
        </table>

        <div class="section-header">D. Pengalaman Kerja & Kompetensi</div>
        <table class="data-table">
            <tr><td class="label">Status Pengalaman Kerja</td><td class="colon">:</td><td class="value">${punyaPengalaman === 'Ya' ? 'Berpengalaman' : 'Fresh Graduate'}</td></tr>
            ${punyaPengalaman === 'Ya' ? `
            <tr><td class="label">Perusahaan / Jabatan</td><td class="colon">:</td><td class="value">${perusahaanTerakhir} / ${jabatanTerakhir} (${lamaBekerja})</td></tr>
            ` : ''}
            <tr><td class="label">Keahlian Utama</td><td class="colon">:</td><td class="value" style="font-weight:normal;">${keahlianDimiliki || '-'}</td></tr>
            <tr><td class="label">Sistem Operasi / Komputer</td><td class="colon">:</td><td class="value" style="font-weight:normal;">${penguasaanKomputer || '-'}</td></tr>
        </table>

        <div class="badge-box">
            <div class="badge-text">STATUS FORMULIR: BERKAS DIGITAL BERHASIL DISIMPAN</div>
            <div style="font-size: 8pt; color: #64748b; margin-top: 3px;">Tanda bukti sah pendaftaran administrasi rekrutmen RS Arun Lhokseumawe.</div>
        </div>

        <table class="footer-sign">
            <tr>
                <td>&nbsp;</td>
                <td>
                    <div class="sign-title">Lhokseumawe, ${tglCetak}</div>
                    <div class="sign-name">${namaPelamar}</div>
                    <div style="font-size: 8.5pt; color: #64748b;">Pelamar Kerja</div>
                </td>
            </tr>
        </table>
    </body>
    </html>
    `;
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](htmlTemplate, {
            headers: {
                'Content-Type': 'text/html',
                'Content-Disposition': `attachment; filename=Formulir_${namaPelamar.replace(/\s+/g, '_')}.html`
            }
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Gagal membuat file formulir'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1_84175._.js.map