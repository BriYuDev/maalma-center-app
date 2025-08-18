"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import * as motion from "motion/react-client";
import { useState, useMemo } from "react";
import { Badge } from "../ui/badge";

export default function FasilitasSection() {
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
                <Badge variant="secondary">Fasilitas Madrasah</Badge>
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
                Fasilitas Yang Bermanfaat
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
                Lorem ipsum dolor sit amet
            </motion.p>
            <div className="w-full mt-4 flex flex-row flex-wrap justify-center [&>*]:basis-1/1 [&>*]:sm:basis-1/2 [&>*]:md:basis-1/3 [&>*]:p-2 [&>*]:md:p-4">
                <FasilitasList />
            </div>
        </section>
    );
}

const items = [
    {
        title: "Perpustakaan",
        image: "/fasilitas/perpustakaan.webp",
    },
    {
        title: "Mushola",
        image: "/fasilitas/mushola.webp",
    },
    {
        title: "Gedung Olahraga",
        image: "/fasilitas/gor.webp",
    },
    {
        title: "Ruang UKS",
        image: "/fasilitas/uks.webp",
    },
    {
        title: "Koperasi Siswa",
        image: "/fasilitas/kopsis.webp",
    },
    {
        title: "Kantin",
        image: "/fasilitas/kantin.webp",
    },
    {
        title: "Lapangan Basket",
        image: "/fasilitas/basket.webp",
    },
    {
        title: "Ruang Osis",
        image: "/fasilitas/osis.webp",
    },
    {
        title: "Lab Ketrampilan",
        image: "/fasilitas/ketrampilan.webp",
    },
    {
        title: "Lab Fisika",
        image: "/fasilitas/fisika.webp",
    },
    {
        title: "Lab Biologi",
        image: "/fasilitas/biologi.webp",
    },
];
export const FasilitasList = () => {
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
                    <FasilitasItem {...item} />
                </motion.div>
            ))}
        </>
    );
};

export const FasilitasItem = ({ image, title = "Fasilitas" }) => {
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
