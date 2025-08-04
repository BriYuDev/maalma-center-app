import Page from "@/components/landing_page/page";
import {RisetSlider} from "./_components";

const title = "Program Riset";
export const metadata = {
    title
};

export default function RisetPage() {
    return (
        <Page title={title} className="flex flex-col">
            <RisetSlider/>
            <p className="leading-7">
                The king, seeing how much happier his subjects were, realized
                the error of his ways and repealed the joke tax.
            </p>
        </Page>
    );
}
