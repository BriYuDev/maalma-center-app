import { Badge } from "@/components/ui/badge";
import * as motion from "motion/react-client";
import { Button } from "../ui/button";
import { PlayIcon } from "lucide-react";
import Link from "next/link";

export default function ProfilSection() {
    return (
        <section className="flex flex-col md:flex-row gap-2 md:gap-4">
            <div
                className="w-full md:max-w-[400px] lg:max-w-[500px] h-[300px] md:h-auto"
                style={{
                    background: 'url("/tentang/illustration.svg")',
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            ></div>
            <div className="flex flex-col gap-2 flex-1">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Badge variant="secondary">Profil Madrasah</Badge>
                </motion.div>
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="font-semibold text-xl sm:text-3xl tracking-tight"
                >
                    Mengenal Lebih Jauh Madrasah Kami!
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-muted-foreground text-sm sm:text-base"
                >
                    <span className="font-bold">MA Ma'arif Udanawu Blitar</span> adalah Madrasah
                    Aliyah swasta terakreditasi A (Unggul) yang berlokasi di
                    Jalan Raya Bakung, Udanawu, Blitar. Kami berdedikasi untuk
                    membentuk generasi Muslim yang tangguh, berilmu, dan
                    berakhlak mulia, berlandaskan pada tiga pilar utama: iman,
                    ilmu, dan amal. Kami mengintegrasikan pendidikan akademik
                    yang unggul dengan penguatan karakter Islami. Didukung oleh
                    fasilitas lengkap seperti perpustakaan, laboratorium,
                    masjid, dan lapangan olahraga, kami menciptakan lingkungan
                    belajar yang kondusif untuk pengembangan potensi siswa
                    secara akademik, spiritual, dan personal. Bergabunglah
                    bersama kami untuk mencetak masa depan yang cerdas dan
                    berkarakter!
                </motion.p>
                <Button className="mt-2" size="lg" asChild>
                    <Link
                        href="https://youtu.be/SYKRRLGoNpw?si=W3T9SAocTYrwXvs9"
                        target="_blank"
                    >
                        <PlayIcon /> Lihat Video
                    </Link>
                </Button>
            </div>
        </section>
    );
}
