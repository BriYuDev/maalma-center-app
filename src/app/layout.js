export const metadata = {
    title: {
        default: "MA Ma'arif Udanawu",
        template: "%s - MA Ma'arif Udanawu",
    },
    description:
        "Portal resmi MA Ma'arif Udanawu Blitar yang memuat informasi sekolah, program unggulan, riset, dan keterampilan siswa.",
};

export default function RootLayout({children}) {
    return (
        <html lang="id">
            <body className="relative  text-slate-800">{children}</body>
        </html>
    );
}
