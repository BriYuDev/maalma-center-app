import { cn, safeareaPadding } from "@/lib/utils";
import { NavbarSpacer } from "./navbar";

export default function Page({ title, subtitle, className, ...props }) {
    return (
        <div className="min-h-dvh bg-white flex flex-col">
            <Header title={title} subtitle={subtitle||"Lorem ipsum dolor sit amet"} />
            <main
                className={cn(
                    safeareaPadding(),
                    "py-12 gap-8 border-t-1 border-muted flex-grow w-full",
                    className
                )}
                {...props}
            ></main>
        </div>
    );
}

export const Header = ({ title, subtitle, className, ...props }) => {
    return (
        <header
            className={cn(
                safeareaPadding(),
                "flex flex-col items-center justify-center bg-gradient-to-r from-slate-800 to-slate-700 text-slate-200",
                className
            )}
            {...props}
        >
            <NavbarSpacer />
            <div className="py-8 text-center">
                <h2 className="text-blue-200 scroll-m-20 text-3xl font-semibold tracking-tight">
                    {title}
                </h2>
                <p className="leading-7 text-slate-400">{subtitle}</p>
            </div>
        </header>
    );
};
