import Page from "@/components/page";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {KetrampilanItem} from "./_components";

const title = "Program Ketrampilan";
export const metadata = {
    title
};

export default function KetrampilanPage() {
    return (
        <Page title={title} className="flex flex-col">
            <KetrampilanItem
                icon="https://placehold.co/50"
                title="Rekayasa Perangkat Lunak (RPL)"
            >
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    The king, seeing how much happier his subjects were,
                    realized the error of his ways and repealed the joke tax.
                </p>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full mt-4"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-semibold">
                            Product Information
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Our flagship product combines cutting-edge
                                technology with sleek design. Built with premium
                                materials, it offers unparalleled performance
                                and reliability.
                            </p>
                            <p>
                                Key features include advanced processing
                                capabilities, and an intuitive user interface
                                designed for both beginners and experts.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-semibold">
                            Shipping Details
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                We offer worldwide shipping through trusted
                                courier partners. Standard delivery takes 3-5
                                business days, while express shipping ensures
                                delivery within 1-2 business days.
                            </p>
                            <p>
                                All orders are carefully packaged and fully
                                insured. Track your shipment in real-time
                                through our dedicated tracking portal.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-semibold">
                            Return Policy
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                We stand behind our products with a
                                comprehensive 30-day return policy. If
                                you&apos;re not completely satisfied, simply
                                return the item in its original condition.
                            </p>
                            <p>
                                Our hassle-free return process includes free
                                return shipping and full refunds processed
                                within 48 hours of receiving the returned item.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </KetrampilanItem>
            <KetrampilanItem
                icon="https://placehold.co/50"
                title="Desain Grafis (DG)"
                reverse
            >
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    The king, seeing how much happier his subjects were,
                    realized the error of his ways and repealed the joke tax.
                </p>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full mt-4"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-semibold">
                            Product Information
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Our flagship product combines cutting-edge
                                technology with sleek design. Built with premium
                                materials, it offers unparalleled performance
                                and reliability.
                            </p>
                            <p>
                                Key features include advanced processing
                                capabilities, and an intuitive user interface
                                designed for both beginners and experts.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-semibold">
                            Shipping Details
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                We offer worldwide shipping through trusted
                                courier partners. Standard delivery takes 3-5
                                business days, while express shipping ensures
                                delivery within 1-2 business days.
                            </p>
                            <p>
                                All orders are carefully packaged and fully
                                insured. Track your shipment in real-time
                                through our dedicated tracking portal.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-semibold">
                            Return Policy
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                We stand behind our products with a
                                comprehensive 30-day return policy. If
                                you&apos;re not completely satisfied, simply
                                return the item in its original condition.
                            </p>
                            <p>
                                Our hassle-free return process includes free
                                return shipping and full refunds processed
                                within 48 hours of receiving the returned item.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </KetrampilanItem>
            <KetrampilanItem
                icon="https://placehold.co/50"
                title="Teknik Bisnis Sepeda Motor (TBSM)"
            >
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    The king, seeing how much happier his subjects were,
                    realized the error of his ways and repealed the joke tax.
                </p>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full mt-4"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-semibold">
                            Product Information
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Our flagship product combines cutting-edge
                                technology with sleek design. Built with premium
                                materials, it offers unparalleled performance
                                and reliability.
                            </p>
                            <p>
                                Key features include advanced processing
                                capabilities, and an intuitive user interface
                                designed for both beginners and experts.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-semibold">
                            Shipping Details
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                We offer worldwide shipping through trusted
                                courier partners. Standard delivery takes 3-5
                                business days, while express shipping ensures
                                delivery within 1-2 business days.
                            </p>
                            <p>
                                All orders are carefully packaged and fully
                                insured. Track your shipment in real-time
                                through our dedicated tracking portal.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-semibold">
                            Return Policy
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                We stand behind our products with a
                                comprehensive 30-day return policy. If
                                you&apos;re not completely satisfied, simply
                                return the item in its original condition.
                            </p>
                            <p>
                                Our hassle-free return process includes free
                                return shipping and full refunds processed
                                within 48 hours of receiving the returned item.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </KetrampilanItem>
            <KetrampilanItem
                icon="https://placehold.co/50"
                title="Tata Boga (TBG)"
                reverse
            >
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    The king, seeing how much happier his subjects were,
                    realized the error of his ways and repealed the joke tax.
                </p>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full mt-4"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-semibold">
                            Product Information
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Our flagship product combines cutting-edge
                                technology with sleek design. Built with premium
                                materials, it offers unparalleled performance
                                and reliability.
                            </p>
                            <p>
                                Key features include advanced processing
                                capabilities, and an intuitive user interface
                                designed for both beginners and experts.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-semibold">
                            Shipping Details
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                We offer worldwide shipping through trusted
                                courier partners. Standard delivery takes 3-5
                                business days, while express shipping ensures
                                delivery within 1-2 business days.
                            </p>
                            <p>
                                All orders are carefully packaged and fully
                                insured. Track your shipment in real-time
                                through our dedicated tracking portal.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-semibold">
                            Return Policy
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                We stand behind our products with a
                                comprehensive 30-day return policy. If
                                you&apos;re not completely satisfied, simply
                                return the item in its original condition.
                            </p>
                            <p>
                                Our hassle-free return process includes free
                                return shipping and full refunds processed
                                within 48 hours of receiving the returned item.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </KetrampilanItem>
            <KetrampilanItem
                icon="https://placehold.co/50"
                title="Tata Kecantikan Kulit dan Rambut (TKKR)"
            >
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    The king, seeing how much happier his subjects were,
                    realized the error of his ways and repealed the joke tax.
                </p>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full mt-4"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-semibold">
                            Product Information
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Our flagship product combines cutting-edge
                                technology with sleek design. Built with premium
                                materials, it offers unparalleled performance
                                and reliability.
                            </p>
                            <p>
                                Key features include advanced processing
                                capabilities, and an intuitive user interface
                                designed for both beginners and experts.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-semibold">
                            Shipping Details
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                We offer worldwide shipping through trusted
                                courier partners. Standard delivery takes 3-5
                                business days, while express shipping ensures
                                delivery within 1-2 business days.
                            </p>
                            <p>
                                All orders are carefully packaged and fully
                                insured. Track your shipment in real-time
                                through our dedicated tracking portal.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-semibold">
                            Return Policy
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                We stand behind our products with a
                                comprehensive 30-day return policy. If
                                you&apos;re not completely satisfied, simply
                                return the item in its original condition.
                            </p>
                            <p>
                                Our hassle-free return process includes free
                                return shipping and full refunds processed
                                within 48 hours of receiving the returned item.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </KetrampilanItem>
            <KetrampilanItem
                icon="https://placehold.co/50"
                title="Tata Busana (TBS)"
                reverse
            >
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    The king, seeing how much happier his subjects were,
                    realized the error of his ways and repealed the joke tax.
                </p>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full mt-4"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="font-semibold">
                            Product Information
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Our flagship product combines cutting-edge
                                technology with sleek design. Built with premium
                                materials, it offers unparalleled performance
                                and reliability.
                            </p>
                            <p>
                                Key features include advanced processing
                                capabilities, and an intuitive user interface
                                designed for both beginners and experts.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-semibold">
                            Shipping Details
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                We offer worldwide shipping through trusted
                                courier partners. Standard delivery takes 3-5
                                business days, while express shipping ensures
                                delivery within 1-2 business days.
                            </p>
                            <p>
                                All orders are carefully packaged and fully
                                insured. Track your shipment in real-time
                                through our dedicated tracking portal.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-semibold">
                            Return Policy
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                We stand behind our products with a
                                comprehensive 30-day return policy. If
                                you&apos;re not completely satisfied, simply
                                return the item in its original condition.
                            </p>
                            <p>
                                Our hassle-free return process includes free
                                return shipping and full refunds processed
                                within 48 hours of receiving the returned item.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </KetrampilanItem>
        </Page>
    );
}
