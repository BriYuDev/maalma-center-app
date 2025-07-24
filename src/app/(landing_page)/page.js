import HeroSection from "@/components/landing_page/home/hero";
import WhySection from "@/components/landing_page/home/why";
import GreetingSection from "@/components/landing_page/home/greeting";
import ProfileVideoSection from "@/components/landing_page/home/profile_video";
import TestiSection from "@/components/landing_page/home/testi";
import PrestasiSection from "@/components/landing_page/home/prestasi";
import ArticleSection from "@/components/landing_page/home/article";
import CTASection from "@/components/landing_page/home/cta";

export default function HomePage() {
    return (
        <>
            <HeroSection/>
            <WhySection/>
            <GreetingSection/>
            <ProfileVideoSection/>
            <TestiSection/>
            <PrestasiSection/>
            <ArticleSection/>
            <CTASection/>
        </>
    );
}
