import { cn } from "@/lib/utils";
import { desc } from "motion/react-client"

export default function DashboardContent({ title, description, className, children, ...props }) {
    return (
        <main className={cn("flex-1 overflow-y-auto bg-white p-6", className)} {...props}>
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-black">
                    {title}
                </h1>
                {description && <p className="text-sm text-gray-600">
                    {description}
                </p>}
            </div>
            {children}
        </main>
    );
}
