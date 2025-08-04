"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import * as motion from "motion/react-client";
import { useState } from "react";

export const EkstraItem = ({ image, title = "Ekstra" }) => {
    const [isHover, setHover] = useState(false);
    return (
        <AspectRatio
            ratio={16 / 9}
            className="relative bg-muted overflow-hidden rounded-md"
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
                    className="scroll-m-20 text-xl font-semibold tracking-tight p-2 absolute"
                    animate={{ translateY: !isHover ? "0%" : "100%" }}
                    transition={{ duration: 0.5 }}
                >
                    {title}
                </motion.h3>
            </motion.div>
        </AspectRatio>
    );
};
