import Squares from "@/components/background";
import "../globals.css";

export default function AuthLayout({ children }) {
    return (
        <main className="h-dvh">
            {children}
        </main>
    );
}
