import HeroSection from "@/components/home/hero";
import GreetSection from "@/components/home/greet";
import WhySection from "@/components/home/why";
import KetrampilanSection from "@/components/home/ketrampilan";
import FasilitasSection from "@/components/home/fasilitas";
import PrestasiSection from "@/components/home/prestasi";
import AlumniSection from "@/components/home/alumni";
import ArtikelSection from "@/components/home/artikel";
import FAQSection from "@/components/home/faq";

export default function HomePage() {
    return (
        <main className="flex flex-col">
            <HeroSection/>
            <GreetSection/>
            <WhySection/>
            <KetrampilanSection/>
            <FasilitasSection/>
            <PrestasiSection/>
            <AlumniSection/>
            <ArtikelSection/>
            <FAQSection/>
        </main>
    );
}