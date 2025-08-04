

import Page from "@/components/landing_page/page";
import {EkstraItem} from "./_components";

const title = "Program Ekstra";
export const metadata = {
    title
};

export default function EkstraPage() {
    return (
        <Page title={title} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <EkstraItem />
            <EkstraItem />
            <EkstraItem />
            <EkstraItem />
            <EkstraItem />
            <EkstraItem />
            <EkstraItem />
            <EkstraItem />
            <EkstraItem />
            <EkstraItem />
            <EkstraItem />
            <EkstraItem />
        </Page>
    );
}

