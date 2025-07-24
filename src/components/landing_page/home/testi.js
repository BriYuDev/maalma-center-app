"use client";

import { Badge } from "@/components/ui/badge";
import Section from "../section";
import { faker } from "@faker-js/faker";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function TestiSection(){
    const [testiData, setTestiData] = useState([]);
    
        const generateTesti = () => {
            setTestiData((prev) => [
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
            ]);
        };
    
        useEffect(() => {
            let randResti = setInterval(generateTesti, 3000);
            return () => clearInterval(randResti);
        }, []);
    return (
        <Section className="bg-slate-800 text-slate-400 items-center justify-center">
            <h3 className="text-blue-300 scroll-m-20 pb-2 text-3xl font-semibold first:mt-0">
                Apa Kata Mereka?
            </h3>
            <p className="leading-7 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {testiData.map((v, i) => (
                    <div
                        key={i}
                        className="hidden [&*:first-child]:flex md:flex flex-col items-center justify-center p-4"
                    >
                        <Image
                            src="https://avatar.iran.liara.run/public"
                            alt="Avatar"
                            className="rounded-full"
                            height="75"
                            width="75"
                        />
                        <div className="text-center my-4">
                            <h4 className="text-blue-300  scroll-m-20 text-xl font-semibold block tracking-tight">
                                {v.username}
                            </h4>
                            <Badge className="bg-orange-400 text-white" asChild>
                                <p className="text-sm">{v.job}</p>
                            </Badge>
                        </div>
                        <p className="leading-7 text-center italic">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed id bibendum mi, sed suscipit nulla.
                            Vivamus consequat metus vitae placerat consequat.
                            Suspendisse in ornare sapien. Nunc cursus nunc
                            dolor, a aliquet dolor congue non. Curabitur varius
                            iaculis urna non luctus. Cras pulvinar felis ac erat
                            suscipit bibendum. Suspendisse potenti."
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}