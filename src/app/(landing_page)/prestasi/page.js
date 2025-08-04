import Page from "@/components/landing_page/page";
import { Content, Sidebar } from "./_components";

const title = "Prestasi";
export const metadata = {
    title,
};

export default function PrestasiPage() {
    return (
        <Page title={title} className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-2">
            <Sidebar />
            <div className="col-span-2">
                <Content />
            </div>
        </Page>
    );
}
