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
import { Eye, EyeOff, Check, X } from "lucide-react";
import Link from "next/link";
import Head from "next/head";

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const passwordsMatch = password === confirmPassword && password !== "";
    const passwordValid = password.length >= 8;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!passwordValid) {
            alert("Password harus minimal 8 karakter");
            return;
        }
        if (!passwordsMatch) {
            alert("Password tidak cocok");
            return;
        }

        console.log("Register", { identifier, password });
    };

    return (
        <>
            <Head>
                <title>Register</title>
            </Head>
            <div className="min-h-screen relative flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-[url('/auth_bg.png')] opacity-10" />

                <Card className="w-full max-w-md relative z-10 shadow-2xl border bg-white/95 backdrop-blur-sm">
                    <CardHeader className="text-center pb-2">
                        <CardTitle className="text-3xl font-bold">
                            Daftar Akun
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                            Buat akun baru untuk mengakses platform
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label
                                    htmlFor="identifier"
                                    className="text-gray-800"
                                >
                                    Email / No. HP
                                </Label>
                                <Input
                                    id="identifier"
                                    type="text"
                                    className="bg-white border-gray-300"
                                    placeholder="Masukkan email atau nomor HP"
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
                                        placeholder="Masukkan password (min. 8 karakter)"
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
                                {password && (
                                    <div className="flex items-center gap-2 text-sm">
                                        {passwordValid ? (
                                            <Check className="h-4 w-4 text-gray-800" />
                                        ) : (
                                            <X className="h-4 w-4 text-gray-600" />
                                        )}
                                        <span
                                            className={
                                                passwordValid
                                                    ? "text-gray-800"
                                                    : "text-gray-600"
                                            }
                                        >
                                            Minimal 8 karakter
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label
                                    htmlFor="confirmPassword"
                                    className="text-gray-800"
                                >
                                    Ulangi Password
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="confirmPassword"
                                        type={
                                            showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                        className="bg-white border-gray-300 pr-10"
                                        placeholder="Ulangi password"
                                        value={confirmPassword}
                                        onChange={(e) =>
                                            setConfirmPassword(e.target.value)
                                        }
                                        required
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-gray-600"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                !showConfirmPassword
                                            )
                                        }
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </Button>
                                </div>
                                {confirmPassword && (
                                    <div className="flex items-center gap-2 text-sm">
                                        {passwordsMatch ? (
                                            <Check className="h-4 w-4 text-gray-800" />
                                        ) : (
                                            <X className="h-4 w-4 text-gray-600" />
                                        )}
                                        <span
                                            className={
                                                passwordsMatch
                                                    ? "text-gray-800"
                                                    : "text-gray-600"
                                            }
                                        >
                                            Password cocok
                                        </span>
                                    </div>
                                )}
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-black hover:bg-gray-800 text-white"
                                disabled={!passwordValid || !passwordsMatch}
                                asChild
                            >
                                <Link href="/register">Daftar</Link>
                            </Button>
                        </form>

                        <div className="text-center">
                            <p className="text-gray-600">
                                Sudah punya akun?{" "}
                                <Link
                                    href="/login"
                                    className="text-black hover:text-gray-800 font-medium underline"
                                >
                                    Masuk di sini
                                </Link>
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
