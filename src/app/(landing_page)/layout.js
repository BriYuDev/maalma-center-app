import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ChatWidget } from "@/components/ui/chat-widget";


export default function RootLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
            <ChatWidget/>
        </>
    );
}
