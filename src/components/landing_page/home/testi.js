"use client";

import { Badge } from "@/components/ui/badge";
import Section from "../section";
import { faker } from "@faker-js/faker";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testi = [
    {
        username: faker.person.fullName(),
        job: faker.person.jobTitle(),
    },
    {
        username: faker.person.fullName(),
        job: faker.person.jobTitle(),
    },
    {
        username: faker.person.fullName(),
        job: faker.person.jobTitle(),
    },
    {
        username: faker.person.fullName(),
        job: faker.person.jobTitle(),
    },
    {
        username: faker.person.fullName(),
        job: faker.person.jobTitle(),
    },
    {
        username: faker.person.fullName(),
        job: faker.person.jobTitle(),
    },
];

export default function TestiSection() {
    return (
        <Section className="items-center justify-center">
            <h3 className="scroll-m-20 pb-2 text-3xl font-semibold first:mt-0">
                Apa Kata Mereka?
            </h3>
            <p className="leading-7 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Carousel plugins={[Autoplay()]} opts={{loop:true}}>
                <CarouselContent>
                    {testi.map((v, i) => (
                        <CarouselItem key={i} className="basis-1/1 md:basis-1/3">
                            <div className="hidden [&*:first-child]:flex md:flex flex-col items-center justify-center p-4">
                                <Image
                                    src="https://avatar.iran.liara.run/public"
                                    alt="Avatar"
                                    className="rounded-full"
                                    height="75"
                                    width="75"
                                />
                                <div className="text-center my-4">
                                    <h4 className="scroll-m-20 text-xl font-semibold block tracking-tight">
                                        {v.username}
                                    </h4>
                                    <Badge
                                        className="bg-orange-400 text-white"
                                        asChild
                                    >
                                        <p className="text-sm">{v.job}</p>
                                    </Badge>
                                </div>
                                <p className="leading-7 text-center italic w-full">
                                    "Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed id bibendum mi, sed
                                    suscipit nulla. Vivamus consequat metus
                                    vitae placerat consequat. Suspendisse in
                                    ornare sapien. Nunc cursus nunc dolor, a
                                    aliquet dolor congue non. Curabitur varius
                                    iaculis urna non luctus. Cras pulvinar felis
                                    ac erat suscipit bibendum. Suspendisse
                                    potenti."
                                </p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </Section>
    );
}
