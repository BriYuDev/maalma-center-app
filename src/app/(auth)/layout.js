import Squares from "@/components/landing_page/background";
import "../globals.css";

export default function AuthLayout({ children }) {
    return (
        <main className="h-dvh">
            <Squares />
            {children}
        </main>
    );
}
