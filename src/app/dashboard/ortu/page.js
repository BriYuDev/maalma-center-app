"use client";

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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Bell,
    TrendingUp,
    TrendingDown,
    Minus,
    User,
    BookOpen,
    Award,
    AlertCircle,
    AlertTriangle,
} from "lucide-react";
import { useState } from "react";

export default function ParentDashboard() {
    const [selectedChildId, setSelectedChildId] = useState(1);

    const students = [
        {
            id: 1,
            name: "Ahmad Rizki",
            class: "XII IPA 1",
            nis: "2021001",
            avatar: "/student-boy.png",
            violationPoints: 15,
            currentGrade: "A",
            status: "active",
        },
        {
            id: 2,
            name: "Siti Nurhaliza",
            class: "X IPS 2",
            nis: "2023045",
            avatar: "/diverse-student-girl.png",
            violationPoints: 8,
            currentGrade: "A+",
            status: "active",
        },
    ];

    const announcements = [
        {
            id: 1,
            title: "Rapat Orang Tua Semester Genap",
            content:
                "Mengundang seluruh orang tua untuk menghadiri rapat evaluasi semester genap pada Sabtu, 15 Juni 2024.",
            date: "2024-06-10",
            priority: "high",
            category: "Rapat",
        },
        {
            id: 2,
            title: "Pembayaran SPP Bulan Juli",
            content:
                "Reminder pembayaran SPP bulan Juli dapat dilakukan melalui bank atau aplikasi mobile banking.",
            date: "2024-06-08",
            priority: "medium",
            category: "Keuangan",
        },
        {
            id: 3,
            title: "Libur Hari Raya Idul Adha",
            content:
                "Sekolah libur pada tanggal 17-18 Juni 2024 dalam rangka Hari Raya Idul Adha.",
            date: "2024-06-05",
            priority: "low",
            category: "Libur",
        },
    ];

    const getAnalysisData = (childId) => {
        if (childId === 1) {
            return [
                {
                    subject: "Matematika",
                    currentScore: 88,
                    previousScore: 82,
                    trend: "up",
                    violationPoints: 5,
                },
                {
                    subject: "Bahasa Indonesia",
                    currentScore: 85,
                    previousScore: 87,
                    trend: "down",
                    violationPoints: 3,
                },
                {
                    subject: "Fisika",
                    currentScore: 90,
                    previousScore: 90,
                    trend: "stable",
                    violationPoints: 2,
                },
                {
                    subject: "Kimia",
                    currentScore: 78,
                    previousScore: 75,
                    trend: "up",
                    violationPoints: 5,
                },
            ];
        } else {
            return [
                {
                    subject: "Matematika",
                    currentScore: 92,
                    previousScore: 89,
                    trend: "up",
                    violationPoints: 2,
                },
                {
                    subject: "Bahasa Indonesia",
                    currentScore: 94,
                    previousScore: 91,
                    trend: "up",
                    violationPoints: 1,
                },
                {
                    subject: "Sejarah",
                    currentScore: 87,
                    previousScore: 85,
                    trend: "up",
                    violationPoints: 3,
                },
                {
                    subject: "Geografi",
                    currentScore: 89,
                    previousScore: 92,
                    trend: "down",
                    violationPoints: 2,
                },
            ];
        }
    };

    const getPriorityColor = (priority) => {
        switch (priority) {
            case "high":
                return "bg-red-100 text-red-800 border-red-200";
            case "medium":
                return "bg-yellow-100 text-yellow-800 border-yellow-200";
            case "low":
                return "bg-green-100 text-green-800 border-green-200";
            default:
                return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };

    const getTrendIcon = (trend) => {
        switch (trend) {
            case "up":
                return <TrendingUp className="h-4 w-4 text-green-600" />;
            case "down":
                return <TrendingDown className="h-4 w-4 text-red-600" />;
            case "stable":
                return <Minus className="h-4 w-4 text-gray-600" />;
            default:
                return <Minus className="h-4 w-4 text-gray-600" />;
        }
    };

    const analysisData = getAnalysisData(selectedChildId);
    const selectedChild = students.find(
        (student) => student.id === selectedChildId
    );

    const averageScore =
        analysisData.reduce((sum, subject) => sum + subject.currentScore, 0) /
        analysisData.length;
    const totalViolationPoints = analysisData.reduce(
        (sum, subject) => sum + subject.violationPoints,
        0
    );

    return (
        <DashboardContent
            title="Halaman Utama"
            description="Pantau perkembangan akademik anak Anda"
        >
            <div className="space-y-6">
                {/* List Siswa Section */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <User className="h-5 w-5" />
                            Daftar Anak
                        </CardTitle>
                        <CardDescription>
                            Informasi anak yang terdaftar di sekolah
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {students.map((student) => (
                                <div
                                    key={student.id}
                                    className="flex items-center justify-between p-4 border rounded-lg"
                                >
                                    <div className="flex items-center gap-4">
                                        <Avatar>
                                            <AvatarImage
                                                src={
                                                    student.avatar ||
                                                    "/placeholder.svg"
                                                }
                                                alt={student.name}
                                            />
                                            <AvatarFallback>
                                                {student.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h3 className="font-semibold">
                                                {student.name}
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                NIS: {student.nis} • Kelas:{" "}
                                                {student.class}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <Badge
                                            variant="outline"
                                            className="mb-2"
                                        >
                                            Grade: {student.currentGrade}
                                        </Badge>
                                        <p className="text-sm text-gray-600">
                                            Poin Pelanggaran:{" "}
                                            <span
                                                className={`font-semibold ${
                                                    student.violationPoints <=
                                                    10
                                                        ? "text-green-600"
                                                        : student.violationPoints <=
                                                          25
                                                        ? "text-yellow-600"
                                                        : "text-red-600"
                                                }`}
                                            >
                                                {student.violationPoints}/100
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Pengumuman Section */}
                <Card>
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
                            {announcements.map((announcement) => (
                                <div
                                    key={announcement.id}
                                    className="border-l-4 border-blue-500 pl-4 py-2"
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="font-semibold">
                                            {announcement.title}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <Badge
                                                className={getPriorityColor(
                                                    announcement.priority
                                                )}
                                            >
                                                {announcement.category}
                                            </Badge>
                                            <span className="text-xs text-gray-500">
                                                {new Date(
                                                    announcement.date
                                                ).toLocaleDateString("id-ID")}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-700">
                                        {announcement.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Analisis Poin/Nilai Section */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BookOpen className="h-5 w-5" />
                            Analisis Poin Pelanggaran & Nilai Anak
                        </CardTitle>
                        <CardDescription>
                            Perkembangan akademik dan kedisiplinan per mata
                            pelajaran
                        </CardDescription>
                        <div className="flex items-center gap-2 mt-4">
                            <span className="text-sm font-medium">
                                Pilih Anak:
                            </span>
                            <Select
                                value={selectedChildId.toString()}
                                onValueChange={(value) =>
                                    setSelectedChildId(Number.parseInt(value))
                                }
                            >
                                <SelectTrigger className="w-48">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {students.map((student) => (
                                        <SelectItem
                                            key={student.id}
                                            value={student.id.toString()}
                                        >
                                            {student.name} - {student.class}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                            <p className="text-sm text-blue-800">
                                Menampilkan analisis untuk:{" "}
                                <span className="font-semibold">
                                    {selectedChild?.name}
                                </span>{" "}
                                - {selectedChild?.class}
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            {analysisData.map((subject, index) => (
                                <div
                                    key={index}
                                    className="p-4 border rounded-lg"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="font-semibold">
                                            {subject.subject}
                                        </h3>
                                        <div className="flex items-center gap-1">
                                            {getTrendIcon(subject.trend)}
                                            <span className="text-sm font-medium">
                                                {subject.currentScore}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>Nilai Saat Ini</span>
                                            <span className="font-medium">
                                                {subject.currentScore}
                                            </span>
                                        </div>
                                        <Progress
                                            value={subject.currentScore}
                                            className="h-2"
                                        />

                                        <div className="flex justify-between text-xs text-gray-600">
                                            <span>
                                                Nilai Sebelumnya:{" "}
                                                {subject.previousScore}
                                            </span>
                                            <span
                                                className={`${
                                                    subject.violationPoints <= 2
                                                        ? "text-green-600"
                                                        : subject.violationPoints <=
                                                          5
                                                        ? "text-yellow-600"
                                                        : "text-red-600"
                                                }`}
                                            >
                                                Poin Pelanggaran:{" "}
                                                {subject.violationPoints}
                                            </span>
                                        </div>
                                    </div>

                                    {subject.trend === "down" && (
                                        <div className="mt-2 flex items-center gap-1 text-xs text-red-600">
                                            <AlertCircle className="h-3 w-3" />
                                            <span>Perlu perhatian lebih</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-blue-50 rounded-lg">
                                <Award className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                                <p className="text-2xl font-bold text-blue-600">
                                    {averageScore.toFixed(1)}
                                </p>
                                <p className="text-sm text-gray-600">
                                    Rata-rata Nilai
                                </p>
                            </div>
                            <div
                                className={`text-center p-4 rounded-lg ${
                                    totalViolationPoints <= 10
                                        ? "bg-green-50"
                                        : totalViolationPoints <= 25
                                        ? "bg-yellow-50"
                                        : "bg-red-50"
                                }`}
                            >
                                <AlertTriangle
                                    className={`h-6 w-6 mx-auto mb-2 ${
                                        totalViolationPoints <= 10
                                            ? "text-green-600"
                                            : totalViolationPoints <= 25
                                            ? "text-yellow-600"
                                            : "text-red-600"
                                    }`}
                                />
                                <p
                                    className={`text-2xl font-bold ${
                                        totalViolationPoints <= 10
                                            ? "text-green-600"
                                            : totalViolationPoints <= 25
                                            ? "text-yellow-600"
                                            : "text-red-600"
                                    }`}
                                >
                                    {totalViolationPoints}/100
                                </p>
                                <p className="text-sm text-gray-600">
                                    Poin Pelanggaran
                                </p>
                            </div>
                            <div className="text-center p-4 bg-purple-50 rounded-lg">
                                <BookOpen className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                                <p className="text-2xl font-bold text-purple-600">
                                    {analysisData.length}
                                </p>
                                <p className="text-sm text-gray-600">
                                    Mata Pelajaran
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardContent>
    );
}
