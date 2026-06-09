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
"[project]/lib/supabase.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://naelkyhqylktrvlycelh.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hZWxreWhxeWxrdHJ2bHljZWxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5NjI5MDEsImV4cCI6MjA5NjUzODkwMX0.BP9zAcUmani-AX4KGj3GNNaemr7KOWk1X_gjwFsun7s");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/app/api/upload/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
;
async function POST(request) {
    try {
        const formData = await request.formData();
        const uploadDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', 'uploads');
        // Buat folder public/uploads jika belum ada otomatis
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(uploadDir)) {
            __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].mkdirSync(uploadDir, {
                recursive: true
            });
        }
        // List kunci dokumen wajib & opsional
        const dokumenWajib = [
            'surat_lamaran',
            'cv',
            'ktp',
            'pas_foto',
            'ijazah',
            'transkrip',
            'kk'
        ];
        const dokumenOpsional = [
            'sertifikat_opsional',
            'surat_pengalaman',
            'npwp'
        ];
        const fileUrls = {};
        // 1. Proses Dokumen Wajib
        for (const key of dokumenWajib){
            const file = formData.get(key);
            if (!file || file.size === 0) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: `Dokumen ${key.replace('_', ' ')} wajib diunggah.`
                }, {
                    status: 400
                });
            }
            // Validasi Ekstensi & Ukuran
            const fileExt = file.name.split('.').pop()?.toLowerCase();
            if (!fileExt || ![
                'pdf',
                'jpg',
                'jpeg',
                'png'
            ].includes(fileExt)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: `Format file ${file.name} tidak valid (Harus PDF/JPG/PNG).`
                }, {
                    status: 400
                });
            }
            if (file.size > 2 * 1024 * 1024) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: `Ukuran file ${file.name} melebihi batas 2MB.`
                }, {
                    status: 400
                });
            }
            // Simpan File
            const uniqueName = `${Date.now()}-${key}-${Math.random().toString(36).substring(2, 7)}.${fileExt}`;
            const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(uploadDir, uniqueName);
            const bytes = await file.arrayBuffer();
            __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(filePath, Buffer.from(bytes));
            fileUrls[`file_${key}`] = `/uploads/${uniqueName}`;
        }
        // 2. Proses Dokumen Opsional
        for (const key of dokumenOpsional){
            const file = formData.get(key);
            if (file && file.size > 0) {
                const fileExt = file.name.split('.').pop()?.toLowerCase();
                if (!fileExt || ![
                    'pdf',
                    'jpg',
                    'jpeg',
                    'png'
                ].includes(fileExt)) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: `Format file opsional ${file.name} harus PDF/JPG/PNG.`
                    }, {
                        status: 400
                    });
                }
                if (file.size > 2 * 1024 * 1024) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: `Ukuran file opsional ${file.name} melebihi batas 2MB.`
                    }, {
                        status: 400
                    });
                }
                const uniqueName = `${Date.now()}-${key}-${Math.random().toString(36).substring(2, 7)}.${fileExt}`;
                const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(uploadDir, uniqueName);
                const bytes = await file.arrayBuffer();
                __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(filePath, Buffer.from(bytes));
                fileUrls[`file_${key}`] = `/uploads/${uniqueName}`;
            } else {
                fileUrls[`file_${key}`] = null;
            }
        }
        // 3. Ambil data teks pendaftaran dengan mapping nama key yang aman dari typo
        const dataInput = {
            nik: formData.get('nik'),
            nama_lengkap: formData.get('namaLengkap'),
            tempat_lahir: formData.get('tempatLahir') || formData.get('tempatLair'),
            tanggal_lahir: formData.get('tanggalLahir'),
            jenis_kelamin: formData.get('jenisKelamin'),
            agama: formData.get('agama'),
            status_pernikahan: formData.get('statusPernikahan'),
            alamat_ktp: formData.get('alamatKtp'),
            alamat_domisili: formData.get('alamatDomisili'),
            whatsapp: formData.get('whatsapp'),
            email: formData.get('email'),
            pendidikan_terakhir: formData.get('pendidikanTerakhir'),
            nama_institusi: formData.get('namaInstitusi'),
            jurusan: formData.get('jurusan'),
            tahun_lulus: formData.get('tahunLulus'),
            ipk: formData.get('ipk'),
            punya_pengalaman: formData.get('punyaPengalaman'),
            perusahaan_terakhir: formData.get('perusahaanTerakhir'),
            jabatan_terakhir: formData.get('jabatanTerakhir'),
            lama_bekerja: formData.get('lamaBekerja'),
            deskripsi_tugas: formData.get('deskripsiTugas'),
            keahlian_dimiliki: formData.get('keahlianDimiliki'),
            penguasaan_komputer: formData.get('penguasaanKomputer'),
            sertifikasi_pelatihan: formData.get('sertifikasiPelatihan'),
            posisi_dilamar: formData.get('posisiDilamar') || 'Staf Keuangan'
        };
        // 4. Masukkan ke database Supabase
        const { error: insertError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabase"].from('pelamar').insert([
            {
                ...dataInput,
                ...fileUrls
            }
        ]);
        if (insertError) throw insertError;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: 'Pendaftaran berhasil disimpan!'
        });
    } catch (error) {
        console.error('Error detail backend:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || 'Terjadi kesalahan sistem internal.'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1-vldp0._.js.map