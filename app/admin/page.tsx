'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { 
  FileDown, RefreshCw, Check, X, Clock, Search, Briefcase, 
  User, Eye, Mail, Phone, MapPin, Calendar, BookOpen, 
  Award, ShieldAlert, FileText, Download 
} from 'lucide-react';

// Interface lengkap menyesuaikan database rekrutmen baru
interface Pelamar {
  id: string;
  created_at: string;
  nik: string;
  nama_lengkap: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  jenis_kelamin: string;
  agama: string;
  status_pernikahan: string;
  alamat_ktp: string;
  alamat_domisili: string | null;
  whatsapp: string;
  email: string;
  pendidikan_terakhir: string;
  nama_institusi: string;
  jurusan: string;
  tahun_lulus: string;
  ipk: string;
  punya_pengalaman: string;
  perusahaan_terakhir: string | null;
  jabatan_terakhir: string | null;
  lama_bekerja: string | null;
  deskripsi_tugas: string | null;
  keahlian_dimiliki: string | null;
  penguasaan_komputer: string | null;
  sertifikasi_pelatihan: string | null;
  file_surat_lamaran: string;
  file_cv: string;
  file_ktp: string;
  file_pas_foto: string;
  file_ijazah: string;
  file_transkrip: string;
  file_kk: string;
  file_sertifikat_opsional: string | null;
  file_surat_pengalaman: string | null;
  file_npwp: string | null;
  status: string;
}

export default function AdminDashboard() {
  const [listPelamar, setListPelamar] = useState<Pelamar[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPosisi, setFilterPosisi] = useState('');
  const [selectedPelamar, setSelectedPelamar] = useState<Pelamar | null>(null); // State untuk detail modal
  const router = useRouter();

  const fetchDataPelamar = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('pelamar')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setListPelamar(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    const checkUserSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/admin/login');
      } else {
        fetchDataPelamar();
      }
    };
    checkUserSession();
  }, [router]);

  const updateStatus = async (id: string, statusBaru: string) => {
    const { error } = await supabase
      .from('pelamar')
      .update({ status: statusBaru })
      .eq('id', id);

    if (!error) {
      setListPelamar((prev) =>
        prev.map((p) => (p.id === id ? { ...p, status: statusBaru } : p))
      );
      if (selectedPelamar && selectedPelamar.id === id) {
        setSelectedPelamar({ ...selectedPelamar, status: statusBaru });
      }
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  const filteredPelamar = listPelamar.filter((p) => {
    const matchSearch = p.nama_lengkap.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        p.nik.includes(searchTerm) ||
                        p.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchPosisi = filterPosisi === '' || p.pendidikan_terakhir.toLowerCase().includes(filterPosisi.toLowerCase());
    return matchSearch && matchPosisi;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-4 sm:p-8 relative">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header Dashboard */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm gap-4">
          <div>
            <h1 className="text-xl font-bold text-slate-950">Dashboard Rekrutmen Staf Keuangan</h1>
            <p className="text-slate-400 text-xs mt-0.5">Sistem Kendali Administrasi RS Arun Lhokseumawe</p>
          </div>
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button 
              onClick={fetchDataPelamar}
              className="flex items-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold py-2 px-4 rounded-xl border border-slate-200 transition"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Refresh Data</span>
            </button>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs font-semibold py-2 px-4 rounded-xl border border-rose-100 transition"
            >
              <span>Keluar</span>
            </button>
          </div>
        </div>

        {/* Filter & Kontrol Cari */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Cari Nama, NIK, atau Email pelamar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 transition shadow-sm"
            />
          </div>
          <div className="relative">
            <Briefcase className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <select
              value={filterPosisi}
              onChange={(e) => setFilterPosisi(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 transition shadow-sm appearance-none"
            >
              <option value="">Semua Jenjang Pendidikan Terakhir</option>
              <option value="D3">Diploma III (D3)</option>
              <option value="S1">Sarjana (S1)</option>
              <option value="S2">Magister (S2)</option>
            </select>
          </div>
        </div>

        {/* Tabel Utama */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-slate-400 text-sm">Sedang mengambil basis data pelamar...</div>
          ) : filteredPelamar.length === 0 ? (
            <div className="p-12 text-center text-slate-400 text-sm">Belum ada data pelamar yang terekam.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/70 border-b border-slate-200/60 text-slate-400 text-[11px] font-bold uppercase tracking-wider">
                    <th className="py-4 px-6">Pelamar</th>
                    <th className="py-4 px-6">Pendidikan / IPK</th>
                    <th className="py-4 px-6">Pengalaman Kerja</th>
                    <th className="py-4 px-6">Status Verifikasi</th>
                    <th className="py-4 px-6 text-center">Tindakan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {filteredPelamar.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50/50 transition duration-100">
                      <td className="py-4 px-6">
                        <div className="font-semibold text-slate-900">{p.nama_lengkap}</div>
                        <div className="text-slate-400 text-xs mt-0.5">NIK: {p.nik} • WA: {p.whatsapp}</div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="text-slate-800 font-medium">{p.pendidikan_terakhir} - {p.jurusan}</div>
                        <div className="text-slate-400 text-xs mt-0.5">{p.nama_institusi} (IPK: {p.ipk})</div>
                      </td>
                      <td className="py-4 px-6">
                        {p.punya_pengalaman === 'Ya' ? (
                          <div>
                            <span className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded-md font-medium">Berpengalaman</span>
                            <div className="text-slate-400 text-[11px] mt-1 truncate max-w-[180px]">{p.jabatan_terakhir} di {p.perusahaan_terakhir}</div>
                          </div>
                        ) : (
                          <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-md">Fresh Graduate</span>
                        )}
                      </td>
                      <td className="py-4 px-6">
                        {p.status === 'Pending' && <span className="inline-flex items-center gap-1 text-xs text-amber-600 font-semibold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-100"><Clock className="w-3 h-3" /> Evaluasi</span>}
                        {p.status === 'Lolos' && <span className="inline-flex items-center gap-1 text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100"><Check className="w-3 h-3" /> Berkas Valid</span>}
                        {p.status === 'Tolak' && <span className="inline-flex items-center gap-1 text-xs text-rose-600 font-semibold bg-rose-50 px-2 py-0.5 rounded-md border border-rose-100"><X className="w-3 h-3" /> Ditolak</span>}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <button
                          onClick={() => setSelectedPelamar(p)}
                          className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-1.5 px-3 rounded-lg transition"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Periksa Data</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* ======================================================== */}
      {/* PANEL DETAIL PELAMAR (SLIDE-OVER MODAL) */}
      {/* ======================================================== */}
      {selectedPelamar && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex justify-end z-50 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-2xl h-screen shadow-2xl flex flex-col animate-in slide-in-from-right duration-200">
            
            {/* Header Modal */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div>
                <span className="text-[10px] bg-emerald-600 text-white font-bold uppercase px-2 py-0.5 rounded-sm tracking-wider">Berkas Pelamar</span>
                <h2 className="text-lg font-bold text-slate-950 mt-1">{selectedPelamar.nama_lengkap}</h2>
                <p className="text-xs text-slate-400">Terdaftar pada: {new Date(selectedPelamar.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
              </div>
              <button 
                onClick={() => setSelectedPelamar(null)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 rounded-xl transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Konten Scroll Modal */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
              
              {/* Seksi A: Data Pribadi */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-emerald-700 flex items-center gap-1.5 uppercase border-b border-slate-100 pb-1"><User className="w-4 h-4" /> A. Data Pribadi</h3>
                <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200/40">
                  <div><p className="text-[10px] font-semibold text-slate-400 uppercase">NIK KTP</p><p className="font-semibold text-slate-900">{selectedPelamar.nik}</p></div>
                  <div><p className="text-[10px] font-semibold text-slate-400 uppercase">Jenis Kelamin</p><p className="font-medium">{selectedPelamar.jenis_kelamin}</p></div>
                  <div><p className="text-[10px] font-semibold text-slate-400 uppercase">Tempat, Tanggal Lahir</p><p className="font-medium">{selectedPelamar.tempat_lahir}, {selectedPelamar.tanggal_lahir}</p></div>
                  <div><p className="text-[10px] font-semibold text-slate-400 uppercase">Agama</p><p className="font-medium">{selectedPelamar.agama}</p></div>
                  <div><p className="text-[10px] font-semibold text-slate-400 uppercase">Status Pernikahan</p><p className="font-medium">{selectedPelamar.status_pernikahan}</p></div>
                  <div><p className="text-[10px] font-semibold text-slate-400 uppercase">Kontak WhatsApp</p><p className="font-medium text-emerald-700 font-semibold">{selectedPelamar.whatsapp}</p></div>
                </div>
                <div className="space-y-2 bg-slate-50 p-3 rounded-xl border border-slate-200/40">
                  <div><p className="text-[10px] font-semibold text-slate-400 uppercase">Email</p><p className="font-medium">{selectedPelamar.email}</p></div>
                  <div><p className="text-[10px] font-semibold text-slate-400 uppercase">Alamat Sesuai KTP</p><p className="font-medium text-slate-700">{selectedPelamar.alamat_ktp}</p></div>
                  {selectedPelamar.alamat_domisili && (
                    <div><p className="text-[10px] font-semibold text-slate-400 uppercase">Alamat Domisili</p><p className="font-medium text-slate-700">{selectedPelamar.alamat_domisili}</p></div>
                  )}
                </div>
              </div>

              {/* Seksi B: Pendidikan */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-emerald-700 flex items-center gap-1.5 uppercase border-b border-slate-100 pb-1"><BookOpen className="w-4 h-4" /> B. Riwayat Pendidikan</h3>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/40 grid grid-cols-2 gap-3">
                  <div><p className="text-[10px] font-semibold text-slate-400 uppercase">Pendidikan Terakhir</p><p className="font-bold text-slate-900">{selectedPelamar.pendidikan_terakhir}</p></div>
                  <div><p className="text-[10px] font-semibold text-slate-400 uppercase">Nama Institusi</p><p className="font-medium">{selectedPelamar.nama_institusi}</p></div>
                  <div><p className="text-[10px] font-semibold text-slate-400 uppercase">Jurusan / Program Studi</p><p className="font-medium">{selectedPelamar.jurusan}</p></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div><p className="text-[10px] font-semibold text-slate-400 uppercase">Tahun Lulus</p><p className="font-medium">{selectedPelamar.tahun_lulus}</p></div>
                    <div><p className="text-[10px] font-semibold text-slate-400 uppercase">Nilai IPK</p><p className="font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded text-center border border-emerald-100">{selectedPelamar.ipk}</p></div>
                  </div>
                </div>
              </div>

              {/* Seksi C: Pengalaman Kerja */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-emerald-700 flex items-center gap-1.5 uppercase border-b border-slate-100 pb-1"><Award className="w-4 h-4" /> C. Pengalaman Kerja</h3>
                {selectedPelamar.punya_pengalaman === 'Ya' ? (
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/40 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <div><p className="text-[10px] font-semibold text-slate-400 uppercase">Instansi/Perusahaan</p><p className="font-medium text-slate-900">{selectedPelamar.perusahaan_terakhir}</p></div>
                      <div><p className="text-[10px] font-semibold text-slate-400 uppercase">Jabatan</p><p className="font-medium text-slate-900">{selectedPelamar.jabatan_terakhir}</p></div>
                      <div><p className="text-[10px] font-semibold text-slate-400 uppercase">Durasi Kerja</p><p className="font-medium">{selectedPelamar.lama_bekerja}</p></div>
                    </div>
                    {selectedPelamar.deskripsi_tugas && (
                      <div className="pt-1 border-t border-slate-200/60"><p className="text-[10px] font-semibold text-slate-400 uppercase">Tugas & Tanggung Jawab</p><p className="text-slate-600 leading-relaxed text-xs">{selectedPelamar.deskripsi_tugas}</p></div>
                    )}
                  </div>
                ) : (
                  <p className="text-slate-400 text-xs italic pl-2">Pelamar menyatakan belum memiliki pengalaman kerja kerja sebelumnya (Fresh Graduate).</p>
                )}
              </div>

              {/* Seksi D: Kompetensi */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-emerald-700 flex items-center gap-1.5 uppercase border-b border-slate-100 pb-1"><ShieldAlert className="w-4 h-4" /> D. Kompetensi & Keahlian</h3>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/40 space-y-2">
                  <div><p className="text-[10px] font-semibold text-slate-400 uppercase">Bidang Keahlian Utama</p><p className="font-medium text-slate-800">{selectedPelamar.keahlian_dimiliki || '-'}</p></div>
                  <div><p className="text-[10px] font-semibold text-slate-400 uppercase">Aplikasi Komputer / Sistem Akuntansi</p><p className="font-medium text-slate-800">{selectedPelamar.penguasaan_komputer || '-'}</p></div>
                  <div><p className="text-[10px] font-semibold text-slate-400 uppercase">Pelatihan / Sertifikasi Berlevan</p><p className="font-medium text-slate-800">{selectedPelamar.sertifikasi_pelatihan || '-'}</p></div>
                </div>
              </div>

              {/* Seksi E: Unduh Berkas Lamaran */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-emerald-700 flex items-center gap-1.5 uppercase border-b border-slate-100 pb-1"><FileText className="w-4 h-4" /> E. Unduh Dokumen Pendukung</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  
                  {/* Fungsi pembantu render tombol download */}
                  {[
                    { label: 'Surat Lamaran Kerja', url: selectedPelamar.file_surat_lamaran },
                    { label: 'Curriculum Vitae (CV)', url: selectedPelamar.file_cv },
                    { label: 'KTP Asli', url: selectedPelamar.file_ktp },
                    { label: 'Pas Foto Berwarna', url: selectedPelamar.file_pas_foto },
                    { label: 'Ijazah Terakhir', url: selectedPelamar.file_ijazah },
                    { label: 'Transkrip Nilai Akademik', url: selectedPelamar.file_transkrip },
                    { label: 'Kartu Keluarga (KK)', url: selectedPelamar.file_kk },
                    { label: 'Sertifikat Pelatihan (Opsional)', url: selectedPelamar.file_sertifikat_opsional },
                    { label: 'Surat Pengalaman Kerja (Opsional)', url: selectedPelamar.file_surat_pengalaman },
                    { label: 'Kartu NPWP (Opsional)', url: selectedPelamar.file_npwp },
                  ].map((doc, idx) => {
                    if (!doc.url) return null;
                    return (
                      <a 
                        key={idx}
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded-xl hover:border-emerald-500 hover:bg-emerald-50/20 transition group text-xs shadow-xs"
                      >
                        <span className="font-medium text-slate-700 group-hover:text-emerald-900 truncate max-w-[200px]">{doc.label}</span>
                        <Download className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 shrink-0" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Footer Aksi Penilaian Berkas */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-3">
              <div className="text-xs font-medium text-slate-500 pl-2">
                Status saat ini: <span className="font-bold underline">{selectedPelamar.status}</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => updateStatus(selectedPelamar.id, 'Tolak')}
                  className="flex items-center gap-1.5 bg-rose-50 hover:bg-rose-600 hover:text-white text-rose-600 text-xs font-bold py-2 px-4 rounded-xl border border-rose-200 transition"
                >
                  <X className="w-4 h-4" />
                  <span>Tolak Berkas</span>
                </button>
                <button
                  onClick={() => updateStatus(selectedPelamar.id, 'Lolos')}
                  className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 px-4 rounded-xl transition shadow-sm"
                >
                  <Check className="w-4 h-4" />
                  <span>Validasi Lolos</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}