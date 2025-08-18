import Section from "@/components/section";
import { Badge } from "@/components/ui/badge";
import * as motion from "motion/react-client";

const items = [
    {
        alt: "Perpustakaan",
        src: "/fasilitas/perpustakaan.webp",
    },
    {
        alt: "Mushola",
        src: "/fasilitas/mushola.webp",
    },
    {
        alt: "Gedung Olahraga",
        src: "/fasilitas/gor.webp",
    },
    {
        alt: "Ruang UKS",
        src: "/fasilitas/uks.webp",
    },
    {
        alt: "Koperasi Siswa",
        src: "/fasilitas/kopsis.webp",
    },
    {
        alt: "Kantin",
        src: "/fasilitas/kantin.webp",
    },
    {
        alt: "Lapangan Basket",
        src: "/fasilitas/basket.webp",
    },
    {
        alt: "Ruang Osis",
        src: "/fasilitas/osis.webp",
    },
    {
        alt: "Lab Ketrampilan",
        src: "/fasilitas/ketrampilan.webp",
    },
    {
        alt: "Lab Fisika",
        src: "/fasilitas/fisika.webp",
    },
    {
        alt: "Lab Biologi",
        src: "/fasilitas/biologi.webp",
    },
];

export default function FasilitasSection(){
    // The scroll distance is the total height of all images combined with their margins.
    // We approximate the height here since we can't get it from the DOM directly in this way.
    // In a real app, you would use a ref to measure the total height after images load.
    // Assuming each image is 600px tall and has a 16px (1rem) bottom margin.
    const scrollDistance = (600 + 16) * items.length;

    // Animation variants for Framer Motion
    const scrollVariants = {
        // The "start" state is at the top of the container
        start: { y: 0 },
        // The "end" state is scrolled up by the total height,
        // creating a seamless loop when reset
        end: { y: -scrollDistance },
    };

    return (
        <Section className="flex-col md:flex-row gap-8">
            {/* <div className="w-full md:max-w-[400px] lg:max-w-[500px] h-[300px] md:h-auto"></div> */}
            <div className="w-full md:max-w-[400px] lg:max-w-[500px] h-[300px] md:h-auto overflow-hidden relative">
                {/* Top gradient overlay */}
                <div
                    className="absolute top-0 left-0 w-full h-1/5 z-10"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
                    }}
                ></div>

                {/* The motion component that handles the scrolling animation */}
                <motion.div
                    className="absolute inset-0"
                    variants={scrollVariants}
                    initial="start"
                    animate="end"
                    transition={{
                        duration: 50, // Adjust the duration to change the speed
                        repeat: Infinity, // Repeat the animation forever
                        repeatType: "loop", // Loop back to the start
                        ease: "linear", // Keep a constant speed
                    }}
                >
                    {/* We duplicate the images to create a seamless loop */}
                    {items.concat(items).map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-auto select-none"
                        />
                    ))}
                </motion.div>

                {/* Bottom gradient overlay */}
                <div
                    className="absolute bottom-0 left-0 w-full h-1/5 z-10"
                    style={{
                        background:
                            "linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
                    }}
                ></div>
            </div>
            <div className="flex flex-col gap-2 flex-1">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Badge variant="secondary">Fasilitas Madrasah</Badge>
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
                    Fasilitas Sekolah Yang Lengkap
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-muted-foreground text-sm sm:text-base"
                >
                    <span className="font-semibold">
                        MA Ma'arif Udanawu Blitar
                    </span>{" "}
                    memiliki berbagai fasilitas yang mendukung kegiatan belajar
                    mengajar dan pengembangan siswa, seperti perpustakaan,
                    laboratorium keterampilan, dan MIPA, masjid, ruang kelas
                    yang memadai, ruang BP, ruang TU, ruang kepala sekolah dan
                    guru, ruang OSIS, lapangan olahraga seperti basket, voli,
                    dan sepak bola, serta pendukung lainnya seperti CCTV, dan
                    kamar mandi/toilet yang bersih dan nyaman.
                    Fasilitas-fasilitas ini dirancang untuk menciptakan
                    lingkungan belajar yang kondusif dan mendukung perkembangan
                    siswa secara efisien. Dengan adanya fasilitas yang lengkap
                    dan memadai, MA Ma'arif Udanawu Blitar berkomitmen untuk
                    terus meningkatkan kualitas pendidikan dan memberikan
                    pengalaman belajar yang terbaik bagi siswa-siswanya.
                    Fasilitas-fasilitas ini diharapkan dapat membantu siswa
                    mengembangkan potensi mereka secara maksimal dan menjadi
                    generasi yang unggul dalam bidang akademik dan memiliki
                    karakter yang kuat berdasarkan nilai-nilai Islam.
                </motion.p>
            </div>
        </Section>
    );
}