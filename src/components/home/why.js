import Section from "@/components/section";
import { Badge } from "@/components/ui/badge";
import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";
import { MoonStar } from "lucide-react";
import { Telescope } from "lucide-react";
import { Anvil } from "lucide-react";


const items = [
    {
        icon: <MoonStar />,
        iconClassName: "bg-green-200 text-green-800",
        title: "Religy",
        description:
            "Menekankan pentingnya pendidikan agama dan nilai-nilai Islam dalam kehidupan sehari-hari.",
    },
    {
        icon: <Telescope />,
        iconClassName: "bg-primary/20 text-slate-800",
        title: "Science",
        description:
            "Menawarkan program pembelajaran untuk meningkatkan kemampuan akademik.",
    },
    {
        icon: <Anvil />,
        iconClassName: "bg-orange-200 text-orange-800",
        title: "Skills",
        description:
            "Menyediakan berbagai pelatihan keterampilan dan ekstrakurikuler untuk mencetak generasi siap kerja.",
    },
];


export default function WhySection(){
    return <Section className="items-center text-center gap-2">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                        }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Badge variant="secondary">Mengapa Harus Ma'alma?</Badge>
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
                        Kami Memiliki Program Unggulan
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
                        Berikut adalah program-program yang unggulan kami miliki
                    </motion.p>
                    <div className="mt-4 md:mt-10 flex flex-col md:flex-row gap-4 md:gap-12">
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
                                className="flex flex-col items-center py-6 px-0 md:py-0 text-center max-w-[300px]"
                            >
                                <div
                                    className={cn(
                                        "p-4 rounded-lg mb-2 bg-primary/20",
                                        item.iconClassName
                                    )}
                                >
                                    {item.icon}
                                </div>
                                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                                    {item.title}
                                </h4>
                                <p className="leading-7 text-muted-foreground">
                                    {item.description}
                                </p>
                            </motion.section>
                        ))}
                    </div>
                </Section>
}