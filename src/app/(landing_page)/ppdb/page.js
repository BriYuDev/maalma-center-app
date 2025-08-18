// app/ppdb/page.tsx

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    FileText,
    User,
    Calendar,
    CheckCircle,
    Award,
    BookOpen,
    HelpCircle,
    Phone,
    Mail,
    ArrowRight,
    FileCheck,
    Cake,
    Users,
    Image,
    ChevronRight,
} from "lucide-react";
import Page from "@/components/page";
import Link from "next/link";

// Metadata untuk SEO dan judul tab browser
const title = "Penerimaan Peserta Didik Baru";
export const metadata = {
    title,
};

export default function PPDBPage() {
    // === DATA UNTUK HALAMAN ===
    // Anda dapat mengubah data di sini tanpa mengubah struktur JSX
    const timelineData = [
        {
            date: "1 - 15 Juni 2025",
            title: "Pendaftaran Online",
            description:
                "Pengisian formulir dan unggah berkas melalui website.",
            icon: <FileText className="h-6 w-6 text-white" />,
        },
        {
            date: "16 - 20 Juni 2025",
            title: "Seleksi Administrasi",
            description:
                "Panitia memverifikasi kelengkapan dan keabsahan berkas.",
            icon: <CheckCircle className="h-6 w-6 text-white" />,
        },
        {
            date: "25 Juni 2025",
            title: "Pengumuman Hasil Seleksi",
            description: "Hasil seleksi akan diumumkan di halaman ini.",
            icon: <Calendar className="h-6 w-6 text-white" />,
        },
        {
            date: "26 - 30 Juni 2025",
            title: "Daftar Ulang",
            description: "Calon siswa yang lulus melakukan daftar ulang.",
            icon: <User className="h-6 w-6 text-white" />,
        },
    ];

    const faqItems = [
        {
            question: "Kapan pendaftaran dibuka?",
            answer: "Pendaftaran dibuka mulai tanggal 1 Juni hingga 15 Juni 2025 secara online melalui website ini.",
        },
        {
            question: "Apa saja dokumen yang dibutuhkan?",
            answer: "Dokumen yang dibutuhkan antara lain: fotokopi ijazah/SKL, fotokopi akta kelahiran, fotokopi kartu keluarga, dan pas foto terbaru. Detailnya ada di bagian Syarat Pendaftaran.",
        },
        {
            question: "Apakah ada jalur prestasi?",
            answer: "Ya, kami menyediakan Jalur Prestasi untuk siswa yang memiliki pencapaian di bidang akademik maupun non-akademik. Silakan pilih Tab 'Jalur Prestasi' pada bagian Syarat Pendaftaran untuk info lebih lanjut.",
        },
        {
            question:
                "Bagaimana jika saya mengalami kesulitan teknis saat mendaftar?",
            answer: "Jangan panik. Silakan hubungi tim bantuan kami melalui nomor WhatsApp atau email yang tertera di bagian paling bawah halaman ini. Kami siap membantu Anda.",
        },
    ];

    // Komponen kecil untuk item persyaratan agar kode utama lebih rapi
    // Dalam proyek besar, ini bisa menjadi file komponen terpisah
    const RequirementItem = ({ icon, children }) => (
        <div className="flex items-start gap-4 p-4 rounded-md bg-slate-50 border">
            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-sky-100">
                {icon}
            </div>
            <div>
                <p className="font-medium text-gray-800">{children}</p>
            </div>
        </div>
    );

    return (
        <Page title={title}>
            {/* === ALUR PENDAFTARAN (REDESIGNED) === */}
            <section>
                <div className="container">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                            Alur Pendaftaran
                        </h2>
                        <p className="mt-2 text-muted-foreground">
                            Ikuti proses pendaftaran yang sederhana dan cepat.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
                        <Card className="w-full md:w-1/3 shadow-lg border hover:border-blue-500 transition-all mt-4 md:mt-0">
                            <CardHeader className="text-center">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                    <User className="h-6 w-6" />
                                </div>
                                <CardTitle className="mt-4 text-xl">
                                    Buat Akun
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-center text-sm text-muted-foreground px-6 pb-6">
                                Daftarkan diri menggunakan email aktif untuk
                                mendapatkan akses ke portal pendaftaran.
                            </CardContent>
                        </Card>

                        <ChevronRight className="h-8 w-8 text-gray-300 mx-4 hidden md:block" />

                        <Card className="w-full md:w-1/3 shadow-lg border hover:border-blue-500 transition-all mt-4 md:mt-0">
                            <CardHeader className="text-center">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                    <FileText className="h-6 w-6" />
                                </div>
                                <CardTitle className="mt-4 text-xl">
                                    Lengkapi Data
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-center text-sm text-muted-foreground px-6 pb-6">
                                Isi formulir pendaftaran dengan data yang benar
                                dan unggah semua dokumen persyaratan.
                            </CardContent>
                        </Card>

                        <ChevronRight className="h-8 w-8 text-gray-300 mx-4 hidden md:block" />

                        <Card className="w-full md:w-1/3 shadow-lg border hover:border-blue-500 transition-all mt-4 md:mt-0">
                            <CardHeader className="text-center">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                    <CheckCircle className="h-6 w-6" />
                                </div>
                                <CardTitle className="mt-4 text-xl">
                                    Finalisasi & Tunggu
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-center text-sm text-muted-foreground px-6 pb-6">
                                Pastikan semua data sudah final. Pantau status
                                pendaftaran dan tunggu pengumuman kelulusan.
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* === TIMELINE SECTION === */}
            <section className="mt-16">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                        Jadwal Penting
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                        Catat tanggal-tanggal penting berikut agar tidak
                        terlewat.
                    </p>
                </div>
                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute left-1/2 w-0.5 h-full bg-gray-200"></div>
                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            className={`flex items-center w-full mb-8 ${
                                index % 2 === 0 ? "flex-row-reverse" : ""
                            }`}
                        >
                            <div className="w-1/2"></div>
                            <div className="z-10 bg-blue-600 p-3 rounded-full border-4 border-white">
                                {item.icon}
                            </div>
                            <div className={`w-1/2 px-6`}>
                                <Card className="shadow-md hover:shadow-xl transition-shadow">
                                    <CardHeader>
                                        <p className="text-sm font-semibold text-blue-600">
                                            {item.date}
                                        </p>
                                        <CardTitle>{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">
                                            {item.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* === SYARAT PENDAFTARAN (REDESIGNED) === */}
            <section className="mt-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                            Persyaratan Pendaftaran
                        </h2>
                        <p className="mt-2 text-lg text-muted-foreground">
                            Pastikan Anda telah menyiapkan semua dokumen yang
                            diperlukan.
                        </p>
                    </div>
                    <Tabs defaultValue="reguler" className="max-w-4xl mx-auto">
                        <TabsList className="grid w-full grid-cols-2 h-12">
                            <TabsTrigger value="reguler" className="text-base">
                                <BookOpen className="mr-2 h-5 w-5" /> Jalur
                                Reguler
                            </TabsTrigger>
                            <TabsTrigger value="prestasi" className="text-base">
                                <Award className="mr-2 h-5 w-5" /> Jalur
                                Prestasi
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="reguler" className="mt-6">
                            <Card className="shadow-sm">
                                <CardHeader>
                                    <CardTitle>
                                        Dokumen Wajib Jalur Reguler
                                    </CardTitle>
                                    <CardDescription>
                                        Semua dokumen di bawah ini wajib untuk
                                        diunggah dalam format digital
                                        (scan/foto).
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                    <RequirementItem
                                        icon={
                                            <FileCheck className="text-sky-600" />
                                        }
                                    >
                                        Fotokopi Ijazah atau Surat Keterangan
                                        Lulus (SKL) yang telah dilegalisir.
                                    </RequirementItem>
                                    <RequirementItem
                                        icon={
                                            <Users className="text-sky-600" />
                                        }
                                    >
                                        Fotokopi Kartu Keluarga (KK) terbaru.
                                    </RequirementItem>
                                    <RequirementItem
                                        icon={<Cake className="text-sky-600" />}
                                    >
                                        Fotokopi Akta Kelahiran calon siswa.
                                    </RequirementItem>
                                    <RequirementItem
                                        icon={
                                            <Image className="text-sky-600" />
                                        }
                                    >
                                        Pas foto berwarna ukuran 3x4 dengan
                                        latar belakang biru.
                                    </RequirementItem>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="prestasi" className="mt-6">
                            <Card className="shadow-sm">
                                <CardHeader>
                                    <CardTitle>
                                        Dokumen Wajib Jalur Prestasi
                                    </CardTitle>
                                    <CardDescription>
                                        Memenuhi semua syarat jalur reguler
                                        ditambah dengan salah satu dokumen
                                        prestasi di bawah ini.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="grid grid-cols-1 gap-6 pt-4">
                                    <RequirementItem
                                        icon={
                                            <Award className="text-amber-600" />
                                        }
                                    >
                                        Sertifikat atau piagam penghargaan
                                        (akademik/non-akademik) minimal tingkat
                                        Kabupaten/Kota.
                                    </RequirementItem>
                                    <RequirementItem
                                        icon={
                                            <User className="text-amber-600" />
                                        }
                                    >
                                        Surat Keterangan Peringkat 1-5 paralel
                                        dari sekolah asal (jika ada).
                                    </RequirementItem>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* === FAQ SECTION (REDESIGNED) === */}
            <section className="mt-16 p-16 bg-gray-50 rounded-xl">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                        <div className="lg:col-span-1">
                            <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                                Ada Pertanyaan?
                            </h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Kami telah merangkum beberapa pertanyaan yang
                                sering diajukan untuk membantu Anda.
                            </p>
                            <Button variant="outline" className="mt-6">
                                Hubungi Panitia
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>

                        <div className="lg:col-span-2">
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full bg-white p-2 rounded-md shadow-sm border"
                            >
                                {faqItems.map((item, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index + 1}`}
                                        className="border-b last:border-b-0"
                                    >
                                        <AccordionTrigger className="text-left font-semibold text-base hover:no-underline px-4 py-4">
                                            {item.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground text-base px-4 pb-4">
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-12 text-center">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                        Penerimaan Peserta Didik Baru
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                        Tahun Ajaran 2025/2026 - Bergabunglah dengan kami untuk
                        masa depan yang cerah dan berprestasi.
                    </p>
                </div>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href="/register">
                        Daftar Sekarang <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </section>
        </Page>
    );
}
