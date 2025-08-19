import Page from "@/components/page";
import {RisetSlider} from "./_components";

const title = "Program Riset";
export const metadata = {
    title
};

export default function RisetPage() {
    return (
        <Page title={title} className="flex flex-col">
            <RisetSlider />
            <p class="text-justify ">
                Madrasah Riset adalah sebuah model institusi pendidikan modern
                yang secara unik memadukan tiga pilar utama: kurikulum
                pendidikan nasional, pendalaman ilmu-ilmu keislaman, dan
                metodologi penelitian ilmiah sebagai pendekatan pembelajaran
                sentral. Penting untuk dipahami bahwa karakteristik "riset" pada
                madrasah ini bersifat universal dan tidak terbatas pada kajian
                keagamaan semata. Justru, pendekatan riset ini diterapkan secara
                lintas disiplin untuk menjelajahi semua bidang ilmu pengetahuan.
            </p>
            <p class="text-justify ">
                Secara mendasar, institusi ini bertujuan untuk membentuk budaya
                ilmiah dan nalar kritis di kalangan siswa. Proses belajar tidak
                lagi berpusat pada transfer informasi satu arah dari guru ke
                murid, melainkan pada proses penemuan (discovery) yang dipimpin
                oleh rasa ingin tahu siswa. Di sini, setiap mata pelajaran, baik
                itu Biologi, Fisika, Sosiologi, Ekonomi, maupun Sejarah
                Kebudayaan Islam, diajarkan sebagai sebuah bidang ilmu yang
                hidup, yang terus berkembang melalui pertanyaan, observasi,
                eksperimen, dan analisis. Siswa didorong untuk tidak hanya
                menjadi konsumen ilmu, tetapi juga calon produsen pengetahuan.
            </p>

            <p class="text-justify ">
                Dalam praktiknya, siswa di Madrasah Riset dilatih untuk
                merumuskan masalah, menyusun hipotesis, merancang metode
                penelitian, mengumpulkan dan menganalisis data, serta menyajikan
                temuan mereka secara sistematis dan argumentatif. Ruang lingkup
                penelitian yang mereka lakukan sangatlah luas dan mencerminkan
                spektrum keilmuan yang beragam. Misalnya, seorang siswa bisa
                saja meneliti efektivitas mikroorganisme lokal untuk pengolahan
                limbah (bidang{" "}
                <strong class="font-semibold text-sky-600">Bioteknologi</strong>
                ), sementara siswa lain menganalisis pengaruh literasi digital
                terhadap perilaku sosial remaja (bidang{" "}
                <strong class="font-semibold text-sky-600">Sosiologi</strong>),
                atau bahkan merancang sebuah purwarupa aplikasi untuk membantu
                UMKM (bidang{" "}
                <strong class="font-semibold text-sky-600">
                    Teknologi Informasi
                </strong>
                ).
            </p>

            <p class="text-justify ">
                Adapun unsur "Madrasah" dalam konsep ini berperan sebagai
                fondasi nilai dan etika. Ia memberikan kerangka moral dan
                spiritual yang membimbing seluruh aktivitas ilmiah. Tujuannya
                adalah untuk melahirkan para calon ilmuwan, insinyur, dokter,
                sosiolog, atau ahli di bidang apa pun yang tidak hanya unggul
                secara intelektual dan kompeten dalam bidangnya, tetapi juga
                memiliki integritas, akhlak yang mulia, dan kesadaran untuk
                mendedikasikan ilmunya bagi kemaslahatan umat manusia (rahmatan
                lil 'alamin).
            </p>

            <p class="text-justify ">
                Dengan demikian, Madrasah Riset bukanlah lembaga yang membatasi
                sains dalam lingkup agama, melainkan sebuah kawah candradimuka
                yang melahirkan generasi peneliti yang beriman. Lulusannya
                diharapkan menjadi pribadi utuh yang mampu bergerak dinamis
                antara laboratorium dan masjid, mampu menulis jurnal ilmiah
                internasional sekaligus memahami kaidah agamanya, serta siap
                menjadi pemimpin masa depan yang solutif dan berakhlak karimah.
            </p>
        </Page>
    );
}
