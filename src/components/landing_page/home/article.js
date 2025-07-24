import { AspectRatio } from "@/components/ui/aspect-ratio";
import Section from "../section";
import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function ArticleSection() {
    return (
        <Section className=" bg-slate-800 text-slate-400 items-center justify-center">
            <h3 className="text-blue-300 scroll-m-20 pb-2 text-3xl font-semibold first:mt-0">
                Artikel Terkini
            </h3>
            <p className="leading-7 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3 w-full">
                <ArticleItem />
                <ArticleItem />
                <ArticleItem />
            </div>
            {/* <div className="mt-6 flex flex-row items-center justify-center gap-4">
                <Separator />
                <Link href="/artikel">Lainnya</Link>
                <Separator />
            </div> */}
        </Section>
    );
}

export function ArticleItem() {
    return (
        <div className="flex flex-col items-start">
            <AspectRatio ratio={16 / 9} className="border-slate-600 border-[1px] rounded-md" />
            <section className="mt-4">
                <Badge className="bg-orange-400 text-white">Kesehatan</Badge>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-blue-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h4>
                {/* <p className="leading-7 text-justify mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer condimentum non nulla ut fringilla.
                            Etiam eleifend efficitur pretium. Quisque malesuada
                            justo porttitor bibendum semper. Phasellus orci
                            lectus, semper sed molestie placerat, convallis eget
                            felis.
                        </p> */}
                <span className="mt-2 flex flex-row gap-2 text-sm items-center text-slate-500">
                    <Calendar className="size-4" /> 01 Agustus 2019, 12:00
                </span>
            </section>
        </div>
    );
}
