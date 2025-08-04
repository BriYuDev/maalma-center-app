import { cn } from "@/lib/utils"
import { Telescope } from "lucide-react";
import { MoonStar } from "lucide-react";
import { Anvil } from "lucide-react";
import Section from "../section";
import * as motion from "motion/react-client";

export default function WhySection(){
    return (
        <Section className="border-t-1 border-[#eee] items-center text-slate-800">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Why Lorem Ipsum?
            </h2>
            <p className="leading-7 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="grid gird-cols-1 md:grid-cols-3 md:divide-x md:divide-muted [&>*:not(:first-child)]:md:pl-6 [&>*:not(:last-child)]:md:pr-6">
                <WhyItem
                    iconClassName="bg-primary/20 text-slate-800"
                    icon={<Telescope />}
                    title="Science"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisl augue, accumsan sed dolor a."
                />
                <WhyItem
                    iconClassName="bg-orange-200 text-orange-800"
                    icon={<Anvil />}
                    title="Skills"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisl augue, accumsan sed dolor a."
                />
                <WhyItem
                    iconClassName="bg-green-200 text-green-800"
                    icon={<MoonStar />}
                    title="Religy"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisl augue, accumsan sed dolor a."
                />
            </div>
        </Section>
    );
}

export function WhyItem({ iconClassName, icon, title, description }) {
    return (
        <section className="flex flex-col items-start py-6 px-0 md:py-0">
            <motion.div
                whileHover={{ translateY: -3 }}
                className={cn(
                    "p-4 rounded-lg mb-2 bg-primary/20 shadow-sm",
                    iconClassName
                )}
            >
                {icon}
            </motion.div>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                {title}
            </h4>
            <p className="leading-7 text-justify">{description}</p>
        </section>
    );
}
