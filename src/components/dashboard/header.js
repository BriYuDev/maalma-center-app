"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, Moon, Sun } from "lucide-react";
import { useSidebar } from "./wrapper";

export function DashboardHeader() {
    const [sidebarOpen, setSidebarOpen] = useSidebar();

    return (
        <header className="sticky top-0 z-40 border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-black">
            <div className="flex h-14 items-center px-6">
                <Button
                    variant="ghost"
                    size="sm"
                    className="md:hidden mr-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 shadow-none"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    <Menu className="h-4 w-4" />
                </Button>
                <div className="mr-4 hidden md:flex">
                    <h1 className="text-lg font-semibold text-black dark:text-white">
                        Dashboard
                    </h1>
                </div>

                <div className="flex flex-1 items-center justify-end space-x-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="relative h-8 w-8 rounded-full text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 shadow-none"
                            >
                                <Avatar className="h-8 w-8 border border-gray-300 dark:border-gray-700">
                                    <AvatarImage
                                        src="/diverse-user-avatars.png"
                                        alt="User"
                                    />
                                    <AvatarFallback className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
                                        JD
                                    </AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-56 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 shadow-none"
                            align="end"
                            forceMount
                        >
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium leading-none text-black dark:text-white">
                                        John Doe
                                    </p>
                                    <p className="text-xs leading-none text-gray-600 dark:text-gray-400">
                                        john@example.com
                                    </p>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-gray-300 dark:bg-gray-700" />
                            <DropdownMenuItem className="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900">
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900">
                                Settings
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-gray-300 dark:bg-gray-700" />
                            <DropdownMenuItem className="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900">
                                Log out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}
