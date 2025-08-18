import Section from "@/components/section";
import { Badge } from "@/components/ui/badge";
import * as motion from "motion/react-client";

export default function GreetSection(){
    return (
        <Section
            className="relative border-t flex-col md:flex-row z-10 gap-6 lg:gap-0"
            style={{
                background: 'url("/landing_page/sekolah.webp")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute w-full h-full bg-white/50 top-0 left-0 -z-5"></div>
            <div
                className="w-full md:max-w-[400px] lg:max-w-[500px] h-[300px] md:h-auto"
                style={{
                    background: 'url("/landing_page/faiz.jpeg")',
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
                    <Badge className="opacity-75">Sambutan</Badge>
                </motion.div>
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="font-semibold text-muted drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-xl sm:text-3xl tracking-tight"
                >
                    Sambutan Oleh Kepala Madrasah
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-muted text-sm sm:text-base drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                >
                    Assalamu'alaikum warahmatullahi wabarakatuh.
                    <br />
                    Bismillahirrahmanirrahim,{" "}
                    <span className="font-semibold">
                        MA Ma'arif Udanawu Blitar
                    </span>{" "}
                    merupakan lembaga pendidikan yang berkomitmen untuk mencetak
                    generasi yang unggul dalam bidang akademik dan memiliki
                    karakter yang kuat berdasarkan nilai-nilai Islam. Sekolah
                    kami memiliki visi untuk menjadi madrasah yang dapat
                    mewujudkan Generasi Muslim yang Tangguh dan Berkualitas
                    dengan berdasarkan Iman, Ilmu dan Amal.
                    <br />
                    <br />
                    Dengan adanya kegiatan pembelajaran yang kondusif dan
                    lingkungan sekolah yang Islami, kami berharap dapat
                    membentuk siswa-siswi yang tidak hanya memiliki pengetahuan
                    yang luas tetapi juga memiliki kemampuan untuk
                    mengaplikasikan nilai-nilai Islam dalam kehidupan
                    sehari-hari serta memiliki skill yang mendukung .Kami
                    mengucapkan Terima kasih atas kepercayaan yang telah
                    diberikan kepada madrasah kami. Wassalamu'alaikum
                    warahmatullahi wabarakatuh.
                </motion.p>
            </div>
        </Section>
    );
}