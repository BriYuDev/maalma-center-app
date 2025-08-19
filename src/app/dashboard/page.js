import DashboardContent from "@/components/dashboard/content";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Bell, AlertTriangle, BookOpen, TrendingDown } from "lucide-react";

export default function StudentDashboard() {
    return (
        <DashboardContent
            title="Dashboard Siswa"
            description="Selamat datang di portal siswa. Pantau perkembangan akademik dan informasi terbaru."
        >
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Poin Siswa Section */}
                <Card className="col-span-full lg:col-span-1">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Poin Pelanggaran
                        </CardTitle>
                        <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-600">
                            15
                        </div>
                        <p className="text-xs text-muted-foreground">
                            -5 dari bulan lalu
                        </p>
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span>Maksimal: 100 poin</span>
                                <span>15%</span>
                            </div>
                            <Progress value={15} className="h-2" />
                            <p className="text-xs text-green-600">
                                Status: Baik (semakin rendah semakin baik)
                            </p>
                        </div>
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-sm">Terlambat</span>
                                <Badge variant="destructive">+10</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm">
                                    Tidak Mengerjakan Tugas
                                </span>
                                <Badge variant="destructive">+5</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm">
                                    Pelanggaran Ringan
                                </span>
                                <Badge variant="destructive">+0</Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Rapot Digital Section */}
                <Card className="col-span-full lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BookOpen className="h-5 w-5" />
                            Rapot Digital
                        </CardTitle>
                        <CardDescription>
                            Nilai per semester - Semester Ganjil 2024/2025
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div>
                                        <p className="font-medium">
                                            Matematika
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Wajib
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-bold text-blue-600">
                                            88
                                        </p>
                                        <Badge variant="outline">A-</Badge>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div>
                                        <p className="font-medium">
                                            Bahasa Indonesia
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Wajib
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-bold text-green-600">
                                            92
                                        </p>
                                        <Badge variant="outline">A</Badge>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div>
                                        <p className="font-medium">
                                            Bahasa Inggris
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Wajib
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-bold text-blue-600">
                                            85
                                        </p>
                                        <Badge variant="outline">B+</Badge>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div>
                                        <p className="font-medium">Fisika</p>
                                        <p className="text-sm text-muted-foreground">
                                            Peminatan
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-bold text-green-600">
                                            90
                                        </p>
                                        <Badge variant="outline">A-</Badge>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div>
                                        <p className="font-medium">Kimia</p>
                                        <p className="text-sm text-muted-foreground">
                                            Peminatan
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-bold text-blue-600">
                                            87
                                        </p>
                                        <Badge variant="outline">A-</Badge>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div>
                                        <p className="font-medium">Biologi</p>
                                        <p className="text-sm text-muted-foreground">
                                            Peminatan
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-bold text-green-600">
                                            94
                                        </p>
                                        <Badge variant="outline">A</Badge>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">
                                        Rata-rata Nilai
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Semester ini
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-blue-600">
                                        89.3
                                    </p>
                                    <div className="flex items-center gap-1 text-sm text-green-600">
                                        <TrendingDown className="h-3 w-3" />
                                        -2.1 dari semester lalu
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Pengumuman Section */}
                <Card className="col-span-full">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Bell className="h-5 w-5" />
                            Pengumuman
                        </CardTitle>
                        <CardDescription>
                            Informasi terbaru dari sekolah
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex gap-4 p-4 border rounded-lg">
                                <div className="flex-shrink-0">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-medium">
                                            Ujian Tengah Semester
                                        </h4>
                                        <Badge variant="destructive">
                                            Penting
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Ujian Tengah Semester akan dilaksanakan
                                        pada tanggal 15-20 Januari 2025.
                                        Pastikan untuk mempersiapkan diri dengan
                                        baik.
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-2">
                                        2 hari yang lalu
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
                                            Libur Semester
                                        </h4>
                                        <Badge variant="secondary">Info</Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Libur semester akan dimulai pada tanggal
                                        25 Januari hingga 10 Februari 2025.
                                        Selamat berlibur!
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-2">
                                        5 hari yang lalu
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
                                            Pendaftaran Ekstrakurikuler
                                        </h4>
                                        <Badge variant="outline">Terbuka</Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Pendaftaran ekstrakurikuler semester
                                        genap telah dibuka. Daftar melalui
                                        portal siswa sebelum tanggal 20 Januari
                                        2025.
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-2">
                                        1 minggu yang lalu
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardContent>
    );
}
