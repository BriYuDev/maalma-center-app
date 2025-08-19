import DashboardContent from "@/components/dashboard/content";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Bell,
    FileText,
    Calendar,
    CheckCircle,
    Clock,
    AlertCircle,
} from "lucide-react";

export default function ProspectiveStudentDashboard() {
    return (
        <DashboardContent
            title="Halaman Utama"
            description="Selamat datang di portal calon siswa. Pantau informasi PPDB dan proses pendaftaran Anda."
        >
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Pengumuman Section */}
                <Card className="col-span-full lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Bell className="h-5 w-5" />
                            Pengumuman
                        </CardTitle>
                        <CardDescription>
                            Informasi terbaru seputar PPDB 2025
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex gap-4 p-4 border rounded-lg bg-red-50 border-red-200">
                                <div className="flex-shrink-0">
                                    <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-medium text-red-900">
                                            Perpanjangan Pendaftaran PPDB
                                        </h4>
                                        <Badge variant="destructive">
                                            Penting
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-red-700 mt-1">
                                        Pendaftaran PPDB diperpanjang hingga 31
                                        Januari 2025. Segera lengkapi berkas
                                        pendaftaran Anda.
                                    </p>
                                    <p className="text-xs text-red-600 mt-2">
                                        1 hari yang lalu
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 border rounded-lg">
                                <div className="flex-shrink-0">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-medium">
                                            Hasil Seleksi Gelombang 1
                                        </h4>
                                        <Badge variant="secondary">Info</Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Hasil seleksi gelombang 1 telah
                                        diumumkan. Cek status pendaftaran Anda
                                        di menu Verifikasi NISM.
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-2">
                                        3 hari yang lalu
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 border rounded-lg">
                                <div className="flex-shrink-0">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-medium">
                                            Virtual School Tour
                                        </h4>
                                        <Badge variant="outline">Terbuka</Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Ikuti virtual school tour setiap Sabtu
                                        pukul 09.00 WIB. Daftar melalui link
                                        yang tersedia.
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-2">
                                        1 minggu yang lalu
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Updated Verifikasi NISM Section */}
                <Card className="col-span-full lg:col-span-1">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5" />
                            Verifikasi NISM
                        </CardTitle>
                        <CardDescription>
                            Masukkan data untuk verifikasi
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="nism">
                                    Nomor Induk Siswa Madrasah (NISM)
                                </Label>
                                <Input
                                    id="nism"
                                    placeholder="Masukkan NISM Anda"
                                    className="w-full"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="nama">Nama Lengkap</Label>
                                <Input
                                    id="nama"
                                    placeholder="Masukkan nama lengkap"
                                    className="w-full"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="tanggal-lahir">
                                    Tanggal Lahir
                                </Label>
                                <Input
                                    id="tanggal-lahir"
                                    type="date"
                                    className="w-full"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="no-pendaftaran">
                                    No. Pendaftaran
                                </Label>
                                <Input
                                    id="no-pendaftaran"
                                    placeholder="Masukkan nomor pendaftaran"
                                    className="w-full"
                                />
                            </div>

                            <Button className="w-full">Verifikasi Data</Button>

                            <div className="text-center">
                                <Button variant="link" className="text-sm">
                                    Lupa nomor pendaftaran?
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                {/* Updated Informasi PPDB Section */}
                <Card className="col-span-full lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <FileText className="h-5 w-5" />
                            Informasi PPDB
                        </CardTitle>
                        <CardDescription>
                            Penerimaan Peserta Didik Baru Tahun Ajaran 2025/2026
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="p-4 bg-blue-50 rounded-lg">
                                <h4 className="font-medium text-blue-900 mb-3">
                                    Jalur Prestasi
                                </h4>
                                <div className="space-y-2 text-sm text-blue-800">
                                    <div className="flex justify-between">
                                        <span>Kuota:</span>
                                        <span className="font-medium">
                                            150 siswa
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Pendaftar:</span>
                                        <span className="font-medium">
                                            112 siswa
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Status:</span>
                                        <Badge
                                            variant="secondary"
                                            className="text-xs"
                                        >
                                            Buka
                                        </Badge>
                                    </div>
                                </div>
                                <div className="mt-3 pt-3 border-t border-blue-200">
                                    <p className="text-xs text-blue-700 font-medium mb-1">
                                        Persyaratan Khusus:
                                    </p>
                                    <ul className="text-xs text-blue-700 space-y-1">
                                        <li>
                                            • Sertifikat prestasi
                                            akademik/non-akademik
                                        </li>
                                        <li>
                                            • Nilai rata-rata rapor min. 8.0
                                        </li>
                                        <li>
                                            • Surat rekomendasi sekolah asal
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="p-4 bg-green-50 rounded-lg">
                                <h4 className="font-medium text-green-900 mb-3">
                                    Jalur Non Prestasi
                                </h4>
                                <div className="space-y-2 text-sm text-green-800">
                                    <div className="flex justify-between">
                                        <span>Kuota:</span>
                                        <span className="font-medium">
                                            230 siswa
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Pendaftar:</span>
                                        <span className="font-medium">
                                            189 siswa
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Status:</span>
                                        <Badge
                                            variant="secondary"
                                            className="text-xs"
                                        >
                                            Buka
                                        </Badge>
                                    </div>
                                </div>
                                <div className="mt-3 pt-3 border-t border-green-200">
                                    <p className="text-xs text-green-700 font-medium mb-1">
                                        Persyaratan Khusus:
                                    </p>
                                    <ul className="text-xs text-green-700 space-y-1">
                                        <li>• Berdomisili sesuai zonasi</li>
                                        <li>
                                            • Nilai rata-rata rapor min. 7.0
                                        </li>
                                        <li>• Lulus tes masuk sekolah</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                            <h4 className="font-medium mb-3">
                                Persyaratan Umum
                            </h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                                <li>• Ijazah SMP/MTs atau sederajat</li>
                                <li>
                                    • Surat Keterangan Hasil Ujian (SKHU)
                                    sementara
                                </li>
                                <li>• Kartu Keluarga (KK)</li>
                                <li>• Akta Kelahiran</li>
                                <li>• Pas foto 3x4 sebanyak 3 lembar</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                {/* Jadwal Section */}
                <Card className="col-span-full lg:col-span-1">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Calendar className="h-5 w-5" />
                            Jadwal
                        </CardTitle>
                        <CardDescription>Timeline PPDB 2025</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <div className="flex flex-col items-center">
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                    <div className="w-px h-6 bg-green-200"></div>
                                </div>
                                <div className="flex-1 pb-4">
                                    <p className="font-medium text-sm">
                                        Pendaftaran Online
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        1 - 31 Januari 2025
                                    </p>
                                    <Badge
                                        variant="outline"
                                        className="text-xs mt-1"
                                    >
                                        Selesai
                                    </Badge>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="flex flex-col items-center">
                                    <Clock className="h-4 w-4 text-blue-600" />
                                    <div className="w-px h-6 bg-blue-200"></div>
                                </div>
                                <div className="flex-1 pb-4">
                                    <p className="font-medium text-sm">
                                        Verifikasi Berkas
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        1 - 5 Februari 2025
                                    </p>
                                    <Badge
                                        variant="secondary"
                                        className="text-xs mt-1"
                                    >
                                        Berlangsung
                                    </Badge>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="flex flex-col items-center">
                                    <div className="h-4 w-4 rounded-full border-2 border-gray-300"></div>
                                    <div className="w-px h-6 bg-gray-200"></div>
                                </div>
                                <div className="flex-1 pb-4">
                                    <p className="font-medium text-sm">
                                        Pengumuman Hasil
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        10 Februari 2025
                                    </p>
                                    <Badge
                                        variant="outline"
                                        className="text-xs mt-1"
                                    >
                                        Menunggu
                                    </Badge>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="flex flex-col items-center">
                                    <div className="h-4 w-4 rounded-full border-2 border-gray-300"></div>
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium text-sm">
                                        Daftar Ulang
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        12 - 15 Februari 2025
                                    </p>
                                    <Badge
                                        variant="outline"
                                        className="text-xs mt-1"
                                    >
                                        Menunggu
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardContent>
    );
}
