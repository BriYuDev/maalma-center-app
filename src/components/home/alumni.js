'use client'

import Section from "@/components/section";
import { Badge } from "@/components/ui/badge";
import * as motion from "motion/react-client";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const items = [
    {
        avatar: "https://avatar.iran.liara.run/public",
        name: faker.person.fullName(),
        job: faker.person.jobTitle(),
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac bibendum quam. Mauris viverra augue elementum, volutpat purus vel, ullamcorper tellus.",
    },
    {
        avatar: "https://avatar.iran.liara.run/public",
        name: faker.person.fullName(),
        job: faker.person.jobTitle(),
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac bibendum quam. Mauris viverra augue elementum, volutpat purus vel, ullamcorper tellus.",
    },
    {
        avatar: "https://avatar.iran.liara.run/public",
        name: faker.person.fullName(),
        job: faker.person.jobTitle(),
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac bibendum quam. Mauris viverra augue elementum, volutpat purus vel, ullamcorper tellus.",
    },
    {
        avatar: "https://avatar.iran.liara.run/public",
        name: faker.person.fullName(),
        job: faker.person.jobTitle(),
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac bibendum quam. Mauris viverra augue elementum, volutpat purus vel, ullamcorper tellus.",
    },
    {
        avatar: "https://avatar.iran.liara.run/public",
        name: faker.person.fullName(),
        job: faker.person.jobTitle(),
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac bibendum quam. Mauris viverra augue elementum, volutpat purus vel, ullamcorper tellus.",
    },
];

export default function AlumniSection() {
    return (
        <Section className="flex-col md:flex-row gap-4 md:gap-24">
            <div className="flex flex-col gap-2 w-full md:max-w-3xs text-center md:text-start">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Badge variant="secondary">Testimoni</Badge>
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
                    Apa Yang Mereka Katakan?
                </motion.h3>
            </div>
            <Carousel
                plugins={[Autoplay()]}
                opts={{ loop: true, align: "start" }}
                className="flex-1"
            >
                <CarouselContent>
                    {items.map((item, i) => (
                        <CarouselItem
                            key={i}
                            className="basis-1/1 md:basis-1/2 lg:basis-1/3"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: i * 0.1,
                                    duration: 0.5,
                                }}
                                viewport={{ once: true }}
                            >
                                <p className="text-muted-foreground text-sm text-justify italic">
                                    "{item.quote}"
                                </p>
                                <div className="mt-4 flex flex-row items-start gap-4">
                                    <Avatar className="border size-12 border-gray-300 dark:border-gray-700">
                                        <AvatarImage
                                            src="https://avatar.iran.liara.run/public"
                                            alt="User"
                                        />
                                        <AvatarFallback className="bg-gray-200 text-black">
                                            {item.name}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-medium">
                                            {item.name}
                                        </h4>
                                        <span className="text-sm line-clamp-2 text-muted-foreground ">
                                            {item.job}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </Section>
    );
}
