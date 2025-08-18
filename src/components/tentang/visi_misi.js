import { Badge } from "@/components/ui/badge";
import * as motion from "motion/react-client";

const items = [
    {
        title: "Visi",
        description: "",
    },
    {
        title: "Misi",
        description: `a. Melaksanakan proses pembelajaran dan bimbingan secara profesional, berdaya saing dan berdaya serap.\n
b. Meningkatkan disiplin siswa dalam amal ibadah dan taqwa kepada Allah SWT.\n
c. Menumbuhkan semangat keunggulan secara intensif kepada seluruh warga madrasah.\n
d. Membimbing dan membina siswa agar memiliki sifat-sifat kepribadian (disiplin, cermat, teliti, tanggung jawab, toleransi, memiliki daya saing yang prima, profesionalisme yang tinggi serta cinta tanah air, bangsa dan negara.`,
    },
];

export default function VisiMisiSection() {
    return (
        <section className="flex flex-col items-center text-center gap-2">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
            >
                <Badge variant="secondary">Visi & Misi</Badge>
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
                Visi & Misi Madrasah
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
                Berikut adalah visi dan misi madrasah kami
            </motion.p>
            <div className="mt-4 flex flex-col md:flex-row gap-4 md:gap-8">
                <motion.section
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{ delay: 0 * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex-1 flex flex-col p-4 text-start bg-muted border rounded-lg"
                >
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                        Visi
                    </h4>
                    <p className="leading-7 text-muted-foreground">
                        "Terwujudnya Generasi Muslim yang Tangguh dan
                        Berkualitas dengan berdasarkan Iman, Ilmu dan Amal."
                    </p>
                </motion.section>
                <motion.section
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{ delay: 0 * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex-1 flex flex-col p-4 text-start bg-muted border rounded-lg"
                >
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                        Misi
                    </h4>
                    <ul className="leading-7 text-muted-foreground list-disc ps-4">
                        <li>
                            Melaksanakan proses pembelajaran dan bimbingan
                            secara profesional, berdaya saing dan berdaya serap.
                        </li>
                        <li>
                            Meningkatkan disiplin siswa dalam amal ibadah dan
                            taqwa kepada Allah SWT.
                        </li>
                        <li>
                            Menumbuhkan semangat keunggulan secara intensif
                            kepada seluruh warga madrasah.
                        </li>
                        <li>
                            Membimbing dan membina siswa agar memiliki
                            sifat-sifat kepribadian (disiplin, cermat, teliti,
                            tanggung jawab, toleransi, memiliki daya saing yang
                            prima, profesionalisme yang tinggi serta cinta tanah
                            air, bangsa dan negara.
                        </li>
                    </ul>
                </motion.section>
            </div>
        </section>
    );
}
