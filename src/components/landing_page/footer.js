import { cn, safeareaPadding } from "@/lib/utils";
import Link from "next/link";
import { SiInstagram, SiYoutube } from "@icons-pack/react-simple-icons";

export default function Footer(){
    return (
        <footer className={cn(safeareaPadding(), "bg-slate-900 text-white")}>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 py-12">
                <div className="col-span-2">
                    <h5 className="text-xl font-semibold mb-4 text-blue-300">
                        MA MA'ARIF UDANAWU BLITAR
                    </h5>
                    <p className="text-slate-400 text-sm">
                        Mencetak generasi penerus bangsa yang cerdas, inovatif,
                        dan berkarakter.
                    </p>
                    <div className="flex space-x-4 mt-6">
                        <Link
                            href="https://www.youtube.com/@maalmablitar"
                            target="_blank"
                            className="text-slate-400 hover:text-white transition duration-300"
                        >
                            <SiYoutube />
                        </Link>
                        <Link
                            href="https://www.instagram.com/maalmablitar"
                            target="_blank"
                            className="text-slate-400 hover:text-white transition duration-300"
                        >
                            <SiInstagram />
                        </Link>
                    </div>
                </div>

                <div>
                    <h5 className="text-xl font-semibold mb-4 text-blue-300">
                        Alamat
                    </h5>
                    <ul className="text-slate-400 text-sm flex flex-col gap-2">
                        <li>Jl. Pendidikan No. 123, Kota Pelajar, Indonesia</li>
                        <li>Email: info@maarifudanawu.sch.id</li>
                        <li>Telepon: (021) 123-4567</li>
                    </ul>
                </div>

                <div>
                    <h5 className="text-xl font-semibold mb-4 text-blue-300">
                        Statistik Pengunjung
                    </h5>
                    <ul className="text-slate-400 text-sm flex flex-col gap-2">
                        <li>Hari Ini: 0</li>
                        <li>Bulan Ini: 0</li>
                        <li>Pengunjung: 0</li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-slate-500 text-sm py-8 border-t-1 border-slate-700">
                © 2025 MA MA'ARIF UDANAWU BLITAR. Hak Cipta Dilindungi.
            </div>
        </footer>
    );
};