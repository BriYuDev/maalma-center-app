import Page from "@/components/page";
import { Content, Sidebar } from "./_components";

const title = "Artikel";
export const metadata = {
    title,
};

export default function ArtikelPage() {
    return (
        <Page title={title} className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-2">
            <Sidebar />
            <div className="col-span-2">
                <Content />
            </div>
        </Page>
    );
}
