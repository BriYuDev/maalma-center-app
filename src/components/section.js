import { cn, safeareaPadding } from "@/lib/utils";

export default function Section({ className, children, ...props }){
    return (
        <section
            className={cn(
                safeareaPadding(),
                "py-8 md:py-12 bg-white flex flex-col",
                className
            )}
            {...props}
        >
            {children}
        </section>
    );
};

