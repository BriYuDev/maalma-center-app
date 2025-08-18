import Section from "@/components/section";
import { Badge } from "@/components/ui/badge";
import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { capitalize, formatNatural } from "@/lib/utils";
import { faker } from "@faker-js/faker";

const items = Array.from({ length: 3 }).map((_, i) => ({
    id: i + 1,
    created_at: faker.date.recent({ days: 30 }).toISOString(),
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(2),
}));

export default function ArtikelSection() {
    return (
        <Section className="gap-4">
            <div className="flex flex-row justify-between items-end">
                <div className="flex flex-col gap-2">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                        }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Badge variant="secondary">Artikel Terkini</Badge>
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
                        Apa Kabar Hari Ini?
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
                        Artikel pilihan yang sedang hangat untuk menemani waktu
                        Anda
                    </motion.p>
                </div>
                <Button variant="link" className="p-0 has-[>svg]:p-0">
                    <Link
                        href="/artikel"
                        className="flex flex-row items-center"
                    >
                        Lihat Selengkapnya <ChevronRight />
                    </Link>
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: i * 0.4,
                            duration: 0.5,
                        }}
                        viewport={{ once: true }}
                        className="flex flex-col"
                    >
                        <div className="rounded-md bg-muted h-48 sm:h-36 lg:h-48 overflow-hidden" />
                        <div className="flex flex-col gap-1 py-4 flex-1">
                            <span className="text-muted-foreground font-extralight text-xs">
                                {capitalize(formatNatural(item.created_at))}
                            </span>
                            <h3 className="scroll-m-20 text-md font-semibold tracking-tight line-clamp-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-1 lg:line-clamp-2">
                                {item.content}
                            </p>
                            <div className="flex items-center gap-4 text-xs">
                                <span className="text-primary shrink-0">
                                    #category
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
