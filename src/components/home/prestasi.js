"use client"

import Section from "@/components/section";
import { Badge } from "@/components/ui/badge";
import * as motion from "motion/react-client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function PrestasiSection() {
    return (
        <Section className="items-center text-center gap-2">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
            >
                <Badge variant="secondary">Prestasi Aktif</Badge>
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
                Mendorong Siswa Untuk Berprestasi
            </motion.h3>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-sm sm:text-base text-muted-foreground"
            >
                Berikut adalah prestasi-prestasi yang telah diraih oleh para
                siswa berprestasi
            </motion.p>
            <div className="mt-4 flex flex-row flex-wrap justify-center [&>*]:basis-1/1 [&>*]:sm:basis-1/2 [&>*]:md:basis-1/3 [&>*]:p-2 [&>*]:md:p-4 w-full">
                <PrestasiList />
            </div>
            <Button className="rounded-full" variant="outline" size="lg">
                <Link
                    href="/prestasi"
                    className="flex flex-row items-center gap-2"
                >
                    Lihat Selengkapnya <ChevronRight />
                </Link>
            </Button>
        </Section>
    );
}

const items = [
    {
        title: "Juara 1 Favorit - SIC Batch 5",
        image: "/landing_page/prestasi1.webp",
    },
    {
        title: "Juara 5 Umum - INOTEK Jatim 2025",
        image: "/landing_page/prestasi2.webp",
    },
    {
        title: "Juara 1 - KRENOTEK Blitar 2024",
        image: "/landing_page/prestasi3.webp",
    },
    {
        title: "Juara",
        image: "/landing_page/prestasi4.webp",
    },
    {
        title: "Juara",
        image: "/landing_page/prestasi5.webp",
    },
    {
        title: "Juara",
        image: "/landing_page/prestasi6.webp",
    },
];
export const PrestasiList = () => {
    return (
        <>
            {items.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <PrestasiItem {...item} />
                </motion.div>
            ))}
        </>
    );
};

export const PrestasiItem = ({ image, title = "Prestasi" }) => {
    const [isHover, setHover] = useState(false);
    return (
        <AspectRatio
            ratio={16 / 9}
            className="relative bg-muted overflow-hidden rounded-md"
        >
            <motion.div
                className="h-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.1 }}
                transition={{ duration: 1 }}
                style={{
                    background: 'url("' + image + '")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                <motion.div
                    className="w-full h-full flex items-end text-white relative"
                    animate={{
                        background: `color-mix(in oklab, var(--color-black) ${
                            !isHover ? "25" : "0"
                        }%, transparent)`,
                    }}
                    onHoverStart={() => setHover(true)}
                    onHoverEnd={() => setHover(false)}
                    onTap={() => setHover(!isHover)}
                >
                    <motion.h3
                        className="scroll-m-20 tracking-tight p-2 absolute"
                        animate={{ translateY: !isHover ? "0%" : "100%" }}
                        transition={{ duration: 0.5 }}
                    >
                        {title}
                    </motion.h3>
                </motion.div>
            </motion.div>
        </AspectRatio>
    );
};
