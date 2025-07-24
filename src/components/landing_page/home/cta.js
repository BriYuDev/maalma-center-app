import { Input } from "@/components/ui/input";
import Section from "../section";
import { Button } from "@/components/ui/button";

export default function CTASection(){
    return (
        <Section className="items-center justify-center h-dvh py-0">
            <h2 className="scroll-m-20 pb-2 text-4xl font-bold tracking-tight">
                Lorem Ipsum
            </h2>
            <p>Libero sapiente aliquam quibusdam aspernatur.</p>
            <div className="flex w-full max-w-sm items-center gap-2 mt-4">
                <Input type="email" placeholder="Email" />
                <Button type="submit" variant="outline">
                    Daftarkan
                </Button>
            </div>
        </Section>
    );
}