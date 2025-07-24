import { cn } from "@/lib/utils";

export default function Section({ className, children }){
    return (
        <section
            className={cn(
                "px-[var(--safearea-width)] py-12 bg-white flex flex-col",
                className
            )}
        >
            {children}
        </section>
    );
};

