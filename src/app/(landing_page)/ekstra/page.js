import Page from "@/components/page";
import { EkstraList } from "./_components";

const title = "Program Ekstra";
export const metadata = {
    title,
};

export default function EkstraPage() {
    return (
        <Page
            title={title}
            className="gap-0 flex flex-row flex-wrap justify-center [&>*]:basis-1/1 [&>*]:sm:basis-1/2 [&>*]:md:basis-1/3 [&>*]:p-2 [&>*]:md:p-4"
        >
            <EkstraList />
        </Page>
    );
}
