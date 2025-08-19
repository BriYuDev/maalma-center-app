"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [userType, setUserType] = useState("");
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login", { userType, identifier, password });

        // Redirect based on user type
        if (userType === "parent") {
            router.push("/dashboard/ortu");
        } else if (userType === "student") {
            router.push("/dashboard");
        }
    };

    return (
        <>
            <Head>
                <title></title>
            </Head>
            <div className="min-h-screen relative flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-[url('/auth_bg.webp')] bg-cover bg-center opacity-50" />

                <Card className="w-full max-w-md relative z-10 shadow-2xl border bg-white/95 backdrop-blur-sm">
                    <CardHeader className="text-center pb-2">
                        <CardTitle className="text-3xl font-bold">
                            Masuk
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                            Masukkan kredensial Anda untuk mengakses akun
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label
                                    htmlFor="userType"
                                    className="text-gray-800"
                                >
                                    Masuk sebagai
                                </Label>
                                <Select
                                    value={userType}
                                    onValueChange={setUserType}
                                    required
                                >
                                    <SelectTrigger className="bg-white border-gray-300 w-full">
                                        <SelectValue placeholder="Pilih jenis pengguna" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="student">
                                            Murid
                                        </SelectItem>
                                        <SelectItem value="parent">
                                            Orang Tua
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label
                                    htmlFor="identifier"
                                    className="text-gray-800"
                                >
                                    {userType === "student"
                                        ? "NIM / Email / No. HP"
                                        : "Email / No. HP"}
                                </Label>
                                <Input
                                    id="identifier"
                                    type="text"
                                    className="bg-white border-gray-300"
                                    placeholder={
                                        userType === "student"
                                            ? "Masukkan NIM, email, atau nomor HP"
                                            : "Masukkan email atau nomor HP"
                                    }
                                    value={identifier}
                                    onChange={(e) =>
                                        setIdentifier(e.target.value)
                                    }
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label
                                    htmlFor="password"
                                    className="text-gray-800"
                                >
                                    Password
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        className="bg-white border-gray-300 pr-10"
                                        placeholder="Masukkan password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        required
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-gray-600"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </Button>
                                </div>
                            </div>

                            <Button type="submit" className="w-full">
                                Masuk
                            </Button>
                        </form>

                        <div className="text-center text-sm">
                            <p className="text-gray-600">
                                Belum punya akun?{" "}
                                <Link
                                    href="/register"
                                    className="text-black hover:text-gray-80 font-medium underline"
                                >
                                    Daftar di sini
                                </Link>
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
