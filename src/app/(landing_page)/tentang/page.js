import Page from "@/components/page";
import FasilitasSection from "@/components/tentang/fasilitas";
import StrukturOrganisasiSection from "@/components/tentang/organisasi";
import ProfilSection from "@/components/tentang/profil";
import VisiMisiSection from "@/components/tentang/visi_misi";

const title = "Tentang Kami"
export const metadata = {
    title,
};

export default function AboutPage() {
    return <Page title={title} className="gap-12">
        <ProfilSection/>
        <StrukturOrganisasiSection/>
        <VisiMisiSection/>
        <FasilitasSection/>
    </Page>;
}
