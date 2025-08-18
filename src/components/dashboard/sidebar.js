"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home, BarChart3, Users, Settings } from "lucide-react";
import { useState } from "react";
import { useSidebar } from "./wrapper";

const items = [
    {
        title: "Dashboard",
        icon: Home,
        active: true,
    },
    {
        title: "Analytics",
        icon: BarChart3,
    },
    {
        title: "Users",
        icon: Users,
    },
    {
        title: "Settings",
        icon: Settings,
    },
];

export default function DashboardSidebar({ className }) {
    const [sidebarOpen, setSidebarOpen] = useSidebar();

    return (
        <>
            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0",
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div
                    className={cn(
                        "h-full bg-slate-900 border-r border-white",
                        className
                    )}
                >
                    <div className="p-6">
                        <h2 className="text-lg font-semibold text-white mb-6">
                            Menu
                        </h2>

                        <nav className="flex flex-col gap-2 [&>*]:w-full">
                            {items.map((item) => (
                                <Button
                                    key={item.title}
                                    variant={
                                        item.active ? "secondary" : "ghost"
                                    }
                                    className={cn(
                                        "w-full justify-start gap-3 shadow-none",
                                        item.active
                                            ? "bg-gray-800 text-white border border-gray-600 hover:bg-gray-800"
                                            : "text-gray-400 hover:bg-gray-900 hover:text-white"
                                    )}
                                >
                                    <item.icon className="h-4 w-4" />
                                    {item.title}
                                </Button>
                            ))}
                        </nav>
                    </div>
                </div>
            </aside>
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-45 bg-black/50 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </>
    );
}
