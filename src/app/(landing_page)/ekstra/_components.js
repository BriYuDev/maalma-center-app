"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import * as motion from "motion/react-client";
import { useState } from "react";
const items = [
    {
        title: "Sepak Bola",
        image: "/ekstra/sepakbola.webp",
    },
    {
        title: "Pramuka",
        image: "/ekstra/pramuka.webp",
    },
    {
        title: "Jujitsu",
        image: "/ekstra/jujitsu.webp",
    },
    {
        title: "Jurnalisik",
        image: "/ekstra/jurnalistik.webp",
    },
    {
        title: "Palang Merah Remaja (PMR)",
        image: "/ekstra/pmr.webp",
    },
    {
        title: "Paskibra",
        image: "/ekstra/paskibra.webp",
    },
    {
        title: "Handy Craft",
        image: "/ekstra/handycraft.webp",
    },
    {
        title: "Ma'alma Research Center (MRC)",
        image: "/ekstra/mrc.webp",
    },
    {
        title: "Tahfidz",
        image: "/ekstra/tahfidz.webp",
    },
    {
        title: "Kitab Kuning",
        image: "/ekstra/kitabkuning.webp",
    },
    {
        title: "Musabaqah Tilawatil Qur'an (MTQ)",
        image: "/ekstra/mtq.webp",
    },
    {
        title: "Rebana",
        image: "/ekstra/rebana.webp",
    },
    {
        title: "Voli",
        image: "/ekstra/voli.webp",
    },
    {
        title: "Basket",
        image: "/ekstra/basket.webp",
    },
    {
        title: "Futsal",
        image: "/ekstra/futsal.webp",
    },
    {
        title: "Jamiyah",
        image: "/ekstra/jamiyah.webp",
    },
    {
        title: "Porsigal",
        image: "/ekstra/porsigal.webp",
    },
    {
        title: "Tata Busana",
        image: "/ekstra/tatabusana.webp",
    },
];
export const EkstraList = () => {
    return (
        <>
            {items.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0}}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <EkstraItem {...item} />
                </motion.div>
            ))}
        </>
    );
};

export const EkstraItem = ({ image, title = "Ekstra" }) => {
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
