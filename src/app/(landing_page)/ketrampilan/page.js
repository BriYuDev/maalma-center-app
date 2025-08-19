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
                icon="/ketrampilan/rpl.webp"
                title="Rekayasa Perangkat Lunak (RPL)"
            >
                <p class="mt-2 mb-4">
                    Rekayasa Perangkat Lunak adalah mata pelajaran yang
                    mempelajari tentang pengembangan perangkat lunak dengan
                    menggunakan prinsip-prinsip rekayasa.
                </p>
                <ul class="list-disc list-inside space-y-2">
                    <li class="marker:text-red-500">Pengembangan Aplikasi</li>
                    <li class="marker:text-blue-500">Pemrograman</li>
                    <li class="marker:text-green-500">Desain Sistem</li>
                </ul>
            </KetrampilanItem>
            <KetrampilanItem
                icon="/ketrampilan/dg.webp"
                title="Desain Grafis (DG)"
                reverse
            >
                <p class="mt-2 mb-4">
                    Desain Grafis adalah mata pelajaran yang mempelajari tentang
                    pembuatan desain visual untuk berbagai keperluan.
                </p>
                <ul class="list-disc list-inside space-y-2">
                    <li class="marker:text-purple-500">
                        Pembuatan Desain Visual
                    </li>
                    <li class="marker:text-pink-500">
                        Penggunaan Software Desain
                    </li>
                    <li class="marker:text-yellow-500">Kreativitas Desain</li>
                </ul>
            </KetrampilanItem>
            <KetrampilanItem
                icon="/ketrampilan/tbsm.webp"
                title="Teknik Bisnis Sepeda Motor (TBSM)"
            >
                <p class="mt-2 mb-4">
                    Teknik dan Bisnis Sepeda Motor adalah mata pelajaran yang
                    mempelajari tentang perbaikan dan perawatan sepeda motor.
                </p>
                <ul class="list-disc list-inside space-y-2">
                    <li class="marker:text-gray-700">Perbaikan Mesin</li>
                    <li class="marker:text-yellow-500">
                        Perawatan Sistem Kelistrikan
                    </li>
                    <li class="marker:text-orange-500">Diagnosis Kerusakan</li>
                </ul>
            </KetrampilanItem>
            <KetrampilanItem
                icon="/ketrampilan/tbg.webp"
                title="Tata Boga (TBG)"
                reverse
            >
                <p class="mt-2 mb-4">
                    Tata Boga adalah mata pelajaran yang mempelajari tentang
                    pengolahan makanan dan penyajian hidangan.
                </p>
                <ul class="list-disc list-inside space-y-2">
                    <li class="marker:text-green-500">Pengolahan Makanan</li>
                    <li class="marker:text-orange-500">Plating Hidangan</li>
                    <li class="marker:text-red-500">Teknik Masak</li>
                </ul>
            </KetrampilanItem>
            <KetrampilanItem
                icon="/ketrampilan/tkkr.webp"
                title="Tata Kecantikan Kulit dan Rambut (TKKR)"
            >
                
            </KetrampilanItem>
            <KetrampilanItem
                icon="/ketrampilan/tbs.webp"
                title="Tata Busana (TBS)"
                reverse
            >
                <p class="mt-2 mb-4">
      Tata Busana adalah mata pelajaran yang mempelajari tentang desain dan
      pembuatan busana.
    </p>
    <ul class="list-disc list-inside space-y-2">
      <li class="marker:text-indigo-500">Desain Busana</li>
      <li class="marker:text-teal-500">Pembuatan Pola</li>
      <li class="marker:text-pink-500">Teknik Menjahit</li>
    </ul>
            </KetrampilanItem>
        </Page>
    );
}
