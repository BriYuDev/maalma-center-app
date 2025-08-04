import { Plus_Jakarta_Sans } from 'next/font/google'

export const metadata = {
    title: {
        default: "MA Ma'arif Udanawu",
        template: "%s - MA Ma'arif Udanawu",
    },
    description:
        "Portal resmi MA Ma'arif Udanawu Blitar yang memuat informasi sekolah, program unggulan, riset, dan keterampilan siswa.",
};

const lato = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: "400",
});

export default function RootLayout({children}) {
    return (
        <html lang="id" className={lato.className}>
            <body className="relative">{children}</body>
        </html>
    );
}
