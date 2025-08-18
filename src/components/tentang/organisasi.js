import { Badge } from "@/components/ui/badge";
import * as motion from "motion/react-client";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const items = [
    {
        avatar: "edi.png",
        name: "Edi Basuki, S.Ag.",
        job: "Pimpinan Madrasah",
    },
    {
        avatar: "faiz.png",
        name: "H. Faiz Balya Muhammadi, S.E.",
        job: "Kepala Madrasah",
    },
    {
        avatar: "jufri.png",
        name: "H. Muhammad Jufri, M.Ag.",
        job: "Kepala Tata Usaha",
    },
    {
        avatar: "hadi.png",
        name: "Hadi Pramono, S.Pd.",
        job: "Koordinator Kurikulum",
    },
    {
        avatar: "amik.png",
        name: "Amik Bahrun Niam, S.Ag.",
        job: "Koordinator Sarana Prasarana",
    },
    {
        avatar: "faiz.png",
        name: "Badriyah, S.Psi.",
        job: "Bimbingan Konseling",
    },
    {
        avatar: "nur.png",
        name: "Nur Kholis, S.Pd.",
        job: "Kesiswaan",
    },
    {
        avatar: "eva.png",
        name: "Eva Setiana, S.Pd.",
        job: "Koordinator Tata Tertib",
    },
    {
        avatar: "fitra.png",
        name: "Fitra Yuni Setiawan, S.Pd.",
        job: "Hubungan Masyarakat",
    },
];

export default function StrukturOrganisasiSection() {
    return (
        <section className="flex flex-col lg:flex-row gap-4 lg:gap-24">
            <div className="flex flex-col gap-2 w-full lg:max-w-3xs text-center lg:text-start">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Badge variant="secondary">Struktur Organisasi</Badge>
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
                    Tenaga Kerja Yang Handal
                </motion.h3>
            </div>
            <div className="flex flex-row flex-wrap justify-center [&>*]:basis-1/1 [&>*]:sm:basis-1/2 [&>*]:md:basis-1/3 [&>*]:p-2 [&>*]:md:p-4 w-full">
                {items.map((item, i) => (
                    <motion.section
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{ delay: i * 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="h-full flex flex-row items-center gap-4 p-4 bg-muted border rounded-lg">
                            <Avatar className="border size-12 border-gray-300">
                                <AvatarImage
                                    src={`/guru/${item.avatar}`}
                                    alt="Guru"
                                />
                                <AvatarFallback className="bg-gray-200 text-black">
                                    {item.name}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                                    {item.name}
                                </h4>
                                <span className="text-sm line-clamp-2 text-primary">
                                    {item.job}
                                </span>
                            </div>
                        </div>
                    </motion.section>
                ))}
            </div>
            {/* <div className="w-full mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {items.map((item, i) => (
                    <motion.section
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{ delay: i * 0.4, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex-1 flex flex-col items-center p-4 text-center bg-muted border rounded-lg"
                    >
                        <Image
                            src="https://avatar.iran.liara.run/public"
                            alt="Avatar"
                            className="rounded-full size-20"
                            height="100"
                            width="100"
                        />
                        <h4 className="scroll-m-20 mt-2 text-xl font-semibold tracking-tight">
                            {item.name}
                        </h4>
                        <p className="leading-7 text-sm text-primary">
                            {item.job}
                        </p>
                    </motion.section>
                ))}
            </div> */}
        </section>
    );
}
