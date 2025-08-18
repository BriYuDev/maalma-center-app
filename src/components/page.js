import { cn, safeareaPadding } from "@/lib/utils";
import { NavbarSpacer } from "./navbar";

export default function Page({ title, className, ...props }) {
    return (
        <div className="min-h-dvh bg-white flex flex-col">
            <Header title={title}/>
            <main
                className={cn(
                    safeareaPadding(),
                    "flex flex-col py-12 gap-8 border-t-1 border-muted flex-grow w-full",
                    className
                )}
                {...props}
            ></main>
        </div>
    );
}


export const Header = ({ title, className, ...props }) => {
    return (
        <header
            className={cn(
                safeareaPadding(),
                "flex flex-col items-center justify-center bg-gradient-to-r from-slate-800 to-slate-600 text-slate-200",
                className
            )}
            {...props}
        >
            <NavbarSpacer />
            <div className="py-14 text-center">
                <h2 className="text-blue-200 scroll-m-20 text-3xl font-semibold tracking-tight">
                    {title}
                </h2>
            </div>
        </header>
    );
};
