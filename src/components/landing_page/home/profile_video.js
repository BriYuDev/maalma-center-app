import { Button } from "@/components/ui/button";
import { PlayIcon } from "lucide-react";
import Section from "../section";

export default function ProfileVideoSection() {
    return (
        <Section>
            <div className="grid grid-cols-1 md:grid-cols-2 md:">
                <div className="order-1 md:order-2">
                    <h3 className="scroll-m-20 pb-4 text-3xl font-semibold first:mt-0">
                        Video Profile Sekolah
                    </h3>
                    <p className="leading-7 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer condimentum non nulla ut fringilla. Etiam
                        eleifend efficitur pretium. Quisque malesuada justo
                        porttitor bibendum semper. Phasellus orci lectus, semper
                        sed molestie placerat, convallis eget felis.
                        Pellentesque luctus pharetra libero ut gravida.
                        Vestibulum eu nunc augue.
                    </p>
                    <Button className="flex mt-4 hover:text-white hover:bg-red-500" size="lg" variant="secondary">
                        <PlayIcon className="size-4" /> Tonton
                    </Button>
                </div>
                <div className="order-2 md:order-1"></div>
            </div>
        </Section>
    );
}
