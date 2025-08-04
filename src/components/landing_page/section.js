import { cn, safeareaPadding } from "@/lib/utils";

export default function Section({ className, children }){
    return (
        <section
            className={cn(
                safeareaPadding(),
                "py-8 bg-white flex flex-col",
                className
            )}
        >
            {children}
        </section>
    );
};

