'use client'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Section from "@/components/section";
import { Badge } from "@/components/ui/badge";
import * as motion from "motion/react-client";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

export default function KetrampilanSection(){
    return <Section className="flex-col gap-4">
                    <Carousel opts={{ loop: true }} plugins={[Autoplay()]}>
                        <CarouselContent>
                            {[
                                "/landing_page/rpl.webp",
                                "/landing_page/dg.webp",
                                "/landing_page/tkj.webp",
                                "/landing_page/tbs.webp",
                                "/landing_page/tbg.webp",
                                "/landing_page/tbsm.webp",
                            ].map((src, i) => (
                                <CarouselItem
                                    key={i}
                                    className="md:basis-1/3 lg:basis-1/4"
                                >
                                    <AspectRatio
                                        ratio={16 / 9}
                                        className="bg-muted rounded-md overflow-hidden"
                                        style={{
                                            background: 'url("' + src + '")',
                                            backgroundSize: "cover",
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "center",
                                        }}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex flex-col gap-2 flex-1">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{
                                    opacity: 1,
                                }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <Badge variant="secondary">
                                    Program Ketrampilan
                                </Badge>
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
                                Banyak Jurusan Ketrampilan
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
                                Sekolah kami menyediakan berbagai program keahlian
                                yang dirancang untuk membekali peserta didik dengan
                                keterampilan teknis dan kreatif yang sesuai dengan
                                kebutuhan dunia kerja dan industri saat ini. Kami
                                percaya bahwa keterampilan yang dikuasai hari ini
                                adalah pondasi untuk masa depan yang gemilang.{" "}
                                <span className="font-semibold">
                                    Bergabunglah dan kembangkan potensimu bersama
                                    kami!
                                </span>
                            </motion.p>
                            <Button
                                variant="link"
                                className="p-0 has-[>svg]:p-0"
                                asChild
                            >
                                <Link
                                    href="/ketrampilan"
                                    className="flex flex-row items-center"
                                >
                                    Pelajari Selengkapnya <ChevronRight />
                                </Link>
                            </Button>
                        </div>
                        <div className="w-full md:max-w-[400px] lg:max-w-[500px] flex flex-col items-center gap-2 justify-center">
                            <div className="flex flex-row gap-4">
                                {[
                                    "/ketrampilan/rpl.webp",
                                    "/ketrampilan/tkj.webp",
                                    "/ketrampilan/dg.webp",
                                    "/ketrampilan/tbsm.webp",
                                ].map((src, i) => (
                                    <div
                                        key={i}
                                        className="flex justify-center items-center gap-4"
                                    >
                                        <Image
                                            width={60}
                                            height={60}
                                            src={src}
                                            alt="Ketrampilan"
                                            className="object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-row justify-center gap-4">
                                {[
                                    "/ketrampilan/tkr.webp",
                                    "/ketrampilan/tbs.webp",
                                    "/ketrampilan/tbg.webp",
                                ].map((src, i) => (
                                    <div
                                        key={i}
                                        className="flex justify-center items-center"
                                    >
                                        <Image
                                            width={60}
                                            height={60}
                                            src={src}
                                            alt="Ketrampilan"
                                            className="object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>
}