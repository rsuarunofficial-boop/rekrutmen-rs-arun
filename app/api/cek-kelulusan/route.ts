import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Menggunakan environment variable kredensial Supabase Anda yang sudah terpasang aman di cPanel kemarin
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function POST(request: Request) {
  try {
    const { nik } = await request.json();

    if (!nik || nik.length !== 16) {
      return NextResponse.json({ error: 'Format NIK tidak valid.' }, { status: 400 });
    }

    // Ambil data berdasarkan NIK, tarik kolom namaLengkap dan status_seleksi
    const { data, error } = await supabase
      .from('pelamar')
      .select('nama_lengkap, status_seleksi')
      .eq('nik', nik)
      .single(); // Kita gunakan single karena NIK bersifat unik (1 orang 1 baris)

    if (error || !data) {
      return NextResponse.json({ error: 'Nomor NIK tidak terdaftar dalam basis data rekrutmen.' }, { status: 404 });
    }

    return NextResponse.json({ data }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: 'Terjadi kegagalan server.' }, { status: 500 });
  }
}