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
import Link from "next/link";

export const metadata = {
    title: "Login",
};

export default function LoginPage() {
    return (
        <Card className="w-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <CardHeader className="text-center">
                <CardTitle className="text-xl">Selamat Datang!</CardTitle>
                <CardDescription>
                    Silahkan isi field dibawah ini untuk melanjutkan
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form action="auth" method="POST">
                    <input hidden name="type" defaultValue="login" />
                    <div className="grid gap-6">
                        <div className="grid gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    autoComplete="current-password"
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Login
                            </Button>
                        </div>
                        <div className="text-center text-sm">
                            Belum memiliki akun?{" "}
                            <Link
                                href="/register"
                                className="underline underline-offset-4"
                            >
                                Daftar
                            </Link>
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
