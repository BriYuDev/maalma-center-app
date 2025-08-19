import { cn, safeareaPadding } from "@/lib/utils";
import Link from "next/link";
import { SiInstagram, SiTiktok, SiYoutube } from "@icons-pack/react-simple-icons";

export default function Footer() {
    return (
        <footer
            className={cn(safeareaPadding(), "bg-slate-900 text-slate-300")}
        >
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 py-12">
                <div className="col-span-2">
                    <h5 className="text-xl font-semibold">
                        MA MA'ARIF UDANAWU BLITAR
                    </h5>
                    <p className="text-sm mt-2 text-slate-500">
                        Mencetak generasi penerus bangsa yang cerdas, inovatif,
                        dan berkarakter.
                    </p>
                </div>

                <div>
                    <h5 className="text-xl font-semibold">Alamat</h5>
                    <ul className="text-slate-500 text-sm flex flex-col gap-2 mt-2">
                        <li>
                            JL. Raya Bakung, Kec. Udanawu, Kabupaten Blitar,
                            Jawa Timur 66154
                        </li>
                        <li>Email: ma_almaa@yahoo.com</li>
                        <li>Telepon: (0342) 552350</li>
                    </ul>
                </div>

                <div>
                    <h5 className="text-xl font-semibold">Sosial Media</h5>
                    <ul className="text-slate-500 mt-2 text-sm flex flex-col gap-2">
                        <li>
                            <Link
                                href="https://www.youtube.com/@maalmablitar"
                                className="flex flex-row gap-2 items-center"
                            >
                                <SiYoutube className="size-4" /> MA Ma'arif
                                Udanawu Blitar
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://www.instagram.com/maalmablitar"
                                className="flex flex-row gap-2 items-center"
                            >
                                <SiInstagram className="size-4" /> @maalmablitar
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://vt.tiktok.com/ZSJxXnV24/"
                                className="flex flex-row gap-2 items-center"
                            >
                                <SiTiktok className="size-4" /> @maalmablitar
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-slate-500 text-sm py-8 border-t-1 border-slate-500">
                © 2025 MA MA'ARIF UDANAWU BLITAR. Hak Cipta Dilindungi.
            </div>
        </footer>
    );
}
