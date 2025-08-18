import { DashboardHeader } from "@/components/dashboard/header";
import DashboardSidebar from "@/components/dashboard/sidebar";
import DashboardWrapper from "@/components/dashboard/wrapper";
import { cn } from "@/lib/utils";

export default function DashboardLayout({ children }) {
    return (
        <DashboardWrapper>
            <div className="flex h-screen bg-white">
                <DashboardSidebar />
                <div className="flex flex-1 flex-col overflow-hidden">
                    <DashboardHeader/>
                    {children}
                </div>
            </div>
        </DashboardWrapper>
    );
}
