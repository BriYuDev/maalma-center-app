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
    title: "Register",
};

export default function Register() {
    return (
        <Card className="w-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <CardHeader className="text-center">
                <CardTitle className="text-xl">Perkenalkan Dirimu!</CardTitle>
                <CardDescription>
                    Silahkan isi field dibawah ini untuk melanjutkan
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form action="auth" method="POST">
                    <input hidden name="type" defaultValue="register"/>
                    <div className="grid gap-6">
                        <div className="grid gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" required />
                            </div>
                            <Button type="submit" className="w-full">
                                Login
                            </Button>
                        </div>
                        <div className="text-center text-sm">
                            Sudah memiliki akun?{" "}
                            <Link
                                href="/login"
                                className="underline underline-offset-4"
                            >
                                Masuk
                            </Link>
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
