import Navbar from "@/components/landing_page/navbar";
import Squares from "@/components/landing_page/background";
import "../globals.css";
import Footer from "@/components/landing_page/footer";

export default function RootLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
