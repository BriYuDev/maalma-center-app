"use client"

import Section from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NavbarSpacer } from "../navbar";

export default function HeroSection(){
    return (
        <Section className="justify-center overflow-hidden py-0 md:py-0 h-dvh bg-gradient-to-br from-primary/10 via-primary/5 to-background">
            <div className="flex flex-col lg:flex-row lg:justify-start h-full relative pt-8">
                <NavbarSpacer />
                <div className="flex flex-col lg:max-w-1/2 justify-center gap-4 z-5">
                    <div className="space-y-2">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Badge variant="outline" className="w-fit">
                                MA Ma'arif Udanawu Blitar
                            </Badge>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{ delay: 1 * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl"
                        >
                            Pendidikan Islami untuk
                            <br />
                            <span className="text-primary">
                                Masa Depan Gemilang
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{ delay: 2 * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-muted-foreground"
                        >
                            Madrasah Aliyah Ma'arif Udanawu Blitar, tempat ilmu
                            dan iman berpadu, membentuk pemimpin berakhlak mulia
                            dan berprestasi.
                        </motion.p>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{
                                opacity: 1,
                            }}
                            transition={{ delay: 3 * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Button size="lg" asChild>
                                <Link href="/register">Daftar Sekarang</Link>
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{
                                opacity: 1,
                            }}
                            transition={{ delay: 4 * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={(e) =>
                                    window.scrollBy({
                                        top: window.innerHeight,
                                        behavior: "smooth",
                                    })
                                }
                            >
                                Selengkapnya
                                <ArrowRight />
                            </Button>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    className="origin-bottom absolute h-full -bottom-75 w-full scale-140 lg:w-1/2 sm:scale-120 sm:-bottom-30 lg:scale-150 lg:right-0"
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{
                        background: 'url("/landing_page/ppdb.webp")',
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}
                ></motion.div>
            </div>
        </Section>
    );
}