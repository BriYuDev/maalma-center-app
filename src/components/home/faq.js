import Section from "@/components/section";
import { Badge } from "@/components/ui/badge";
import * as motion from "motion/react-client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
        {
            question: "Kapan pendaftaran dibuka?",
            answer: "Pendaftaran dibuka mulai tanggal 1 Juni hingga 15 Juni 2025 secara online melalui website ini.",
        },
        {
            question: "Apa saja dokumen yang dibutuhkan?",
            answer: "Dokumen yang dibutuhkan antara lain: fotokopi ijazah/SKL, fotokopi akta kelahiran, fotokopi kartu keluarga, dan pas foto terbaru. Detailnya ada di bagian Syarat Pendaftaran.",
        },
        {
            question: "Apakah ada jalur prestasi?",
            answer: "Ya, kami menyediakan Jalur Prestasi untuk siswa yang memiliki pencapaian di bidang akademik maupun non-akademik. Silakan pilih Tab 'Jalur Prestasi' pada bagian Syarat Pendaftaran untuk info lebih lanjut.",
        },
        {
            question:
                "Bagaimana jika saya mengalami kesulitan teknis saat mendaftar?",
            answer: "Jangan panik. Silakan hubungi tim bantuan kami melalui nomor WhatsApp atau email yang tertera di bagian paling bawah halaman ini. Kami siap membantu Anda.",
        },
    ]

export default function FAQSection() {
    return (
        <Section className="flex-col items-center text-center gap-2">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
            >
                <Badge variant="secondary">FAQ</Badge>
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
                Pertanyaan yang Sering Diajukan
            </motion.h3>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-sm sm:text-base text-muted-foreground"
            >
                Jawaban untuk pertanyaan-pertanyaan yang paling sering kami
                terima
            </motion.p>
            <Accordion
                type="single"
                collapsible
                className="w-full bg-white p-2 rounded-md shadow-sm border mt-4"
            >
                {items.map((item, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index + 1}`}
                        className="border-b last:border-b-0"
                    >
                        <AccordionTrigger className="text-left font-semibold text-base hover:no-underline px-4 py-4">
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base px-4 pb-4 text-start">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </Section>
    );
}
