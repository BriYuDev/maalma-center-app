import Page from "@/components/page";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";

const title = "Kontak";
export const metadata = {
    title,
};

export default function KontakPage() {
    return (
        <Page title={title} className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                    <h3 className="text-3xl font-bold">Hubungi Kami</h3>
                    <p className="text-muted-foreground">
                        Lorem ipsum dolor sit amet
                    </p>
                    <form className="gap-6 mt-4">
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Nama Lengkap</Label>
                                <Input
                                    id="name"
                                    placeholder="Masukkan nama Anda"
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="contoh@email.com"
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="message">Pesan</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Tuliskan pesan Anda di sini..."
                                    className="min-h-[150px]"
                                />
                            </div>
                        </div>
                        <Button type="submit" className="w-full mt-4">
                            Kirim Pesan
                        </Button>
                    </form>
                </div>
                <div className="flex flex-col p-4 gap-2 rounded-md border">
                    <h3 className="text-2xl font-semibold">Informasi Kontak</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Mail className="h-6 w-6 text-primary" />
                            <div>
                                <h4 className="font-semibold">Email</h4>
                                <p className="text-sm text-muted-foreground">
                                    <a
                                        href="mailto:halo@perusahaan.com"
                                        className="hover:underline"
                                    >
                                        halo@perusahaan.com
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Phone className="h-6 w-6 text-primary" />
                            <div>
                                <h4 className="font-semibold">Telepon</h4>
                                <p className="text-sm text-muted-foreground">
                                    <a
                                        href="tel:+628123456789"
                                        className="hover:underline"
                                    >
                                        +62 812-3456-789
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <MapPin className="h-6 w-6 text-primary mt-1" />
                            <div>
                                <h4 className="font-semibold">Alamat</h4>
                                <p className="text-sm text-muted-foreground">
                                    Jl. Jend. Sudirman No. 123, <br />
                                    Jakarta Pusat, DKI Jakarta, 10220
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </Page>
    );
}
