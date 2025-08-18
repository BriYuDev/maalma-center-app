import Page from "@/components/page";
import { FilterChips, MasonryGrid } from "./_components";

const title = "Galeri";
export const metadata = {
    title,
};

export default function GaleriPage() {
    return <Page title={title} className="flex flex-col">
        <FilterChips/>
        <MasonryGrid/>
    </Page>;
}
