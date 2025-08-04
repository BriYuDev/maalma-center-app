"use client";

import * as motion from "motion/react-client";
import { useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { usePathname } from "next/navigation";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { useEffect, useMemo, useState } from "react";
import { MenuIcon } from "lucide-react";
import { cn, safeareaPadding } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export default function Navbar() {
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const pathname = usePathname();
    const menus = useMemo(() => [
        { path: "/", label: "Beranda" },
        { path: "/tentang", label: "Tentang Kami" },
        { path: "/prestasi", label: "Prestasi" },
        {
            label: "Program",
            children: [
                { path: "/ekstra", label: "Ekstrakulikuler" },
                { path: "/riset", label: "Riset" },
                { path: "/ketrampilan", label: "Ketrampilan" },
            ],
        },
        { path: "/galeri", label: "Galeri" },
        { path: "/artikel", label: "Artikel" },
        { path: "/kontak", label: "Kontak" },
        { path: "/ppdb", label: "PPDB" },
    ]);
    const { scrollYProgress } = useScroll();
    const [isShow, setIsShow] = useState(false);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setIsShow(latest > 0);
    });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <nav
            className={cn(
                safeareaPadding(),
                "fixed z-100 top-0 left-0 h-[var(--navbar-height)] w-full flex items-center justify-between transition-colors",
                isShow ? "text-slate-800" : "text-slate-300"
            )}
        >
            <motion.div
                className="absolute left-0 top-0 bg-white origin-top w-full h-full border-b-[1px] border-gray-300 -z-10 shadow-sm"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: isShow ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            />
            <motion.div
                className="absolute top-0 left-0 origin-left w-full h-[2px] bg-primary"
                style={{ scaleX: scaleX }}
            />

            <div className="flex items-center gap-2">
                <Image
                    alt="Logo Sekolah"
                    src="/logo.png"
                    width={50}
                    height={50}
                />
            </div>

            {/* Menu Desktop */}
            <NavigationMenu className="hidden lg:block" viewport={false}>
                <NavigationMenuList>
                    {menus.map((v, i) => (
                        <NavigationMenuItem key={i}>
                            {!v.children ? (
                                <NavigationMenuLink
                                    asChild
                                    data-active={
                                        v.path == "/"
                                            ? pathname == v.path
                                            : pathname.startsWith(v.path)
                                    }
                                    className={cn(
                                        navigationMenuTriggerStyle(),
                                        "transition-colors",
                                        isShow
                                            ? "data-[active=true]:text-primary data-[active=true]:bg-primary/20 hover:text-primary"
                                            : "data-[active=true]:text-white data-[active=true]:bg-white/20 hover:text-white"
                                    )}
                                >
                                    <Link href={v.path}>{v.label}</Link>
                                </NavigationMenuLink>
                            ) : (
                                <>
                                    <NavigationMenuTrigger
                                        data-active={
                                            v.children.find(
                                                (child) =>
                                                    child.path === pathname
                                            ) != null
                                        }
                                        className={cn(
                                            "transition-colors",
                                            isShow
                                                ? "data-[active=true]:text-primary data-[active=true]:bg-primary/20"
                                                : "data-[active=true]:text-white data-[active=true]:bg-white/5"
                                        )}
                                    >
                                        {v.label}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[200px]">
                                            {v.children.map((child, j) => (
                                                <li key={j}>
                                                    <NavigationMenuLink
                                                        asChild
                                                        data-active={
                                                            child.path == "/"
                                                                ? pathname ==
                                                                  child.path
                                                                : pathname.startsWith(
                                                                      child.path
                                                                  )
                                                        }
                                                        className="data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:text-primary hover:bg-accent hover:text-accent-foreground"
                                                    >
                                                        <Link href={child.path}>
                                                            {child.label}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </>
                            )}
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>

            {/* Tombol login desktop */}
            <Button
                className="hidden lg:block text-white transition-colors"
                variant={isShow ? "default" : "ghost"}
                asChild
            >
                <Link href="/login">Masuk</Link>
            </Button>

            {/* Tombol menu mobile */}
            <div className="lg:hidden">
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="w-full p-4 z-1000 gap-0">
                        <SheetHeader>
                            <SheetTitle className="text-2xl font-semibold">
                                Menu
                            </SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col gap-2">
                            {menus.map((menu, i) =>
                                !menu.children ? (
                                    <Link
                                        key={i}
                                        href={menu.path}
                                        onClick={() => setIsSheetOpen(false)}
                                        className={cn(
                                            "block p-2 rounded-md text-sm font-medium",
                                            menu.path == "/"
                                                ? pathname == menu.path
                                                : pathname.startsWith(menu.path)
                                                ? "bg-accent text-primary"
                                                : "hover:bg-primary/20 hover:text-accent-foreground"
                                        )}
                                    >
                                        {menu.label}
                                    </Link>
                                ) : (
                                    <Accordion
                                        type="single"
                                        collapsible
                                        key={i}
                                    >
                                        <AccordionItem value={`item-${i}`}>
                                            <AccordionTrigger className="text-left text-sm font-semibold p-2">
                                                {menu.label}
                                            </AccordionTrigger>
                                            <AccordionContent className="flex flex-col ms-2">
                                                {menu.children.map(
                                                    (child, j) => (
                                                        <Link
                                                            key={j}
                                                            href={child.path}
                                                            onClick={() =>
                                                                setIsSheetOpen(
                                                                    false
                                                                )
                                                            }
                                                            className={cn(
                                                                "block p-2 rounded-md text-sm",
                                                                pathname.startsWith(
                                                                    child.path
                                                                )
                                                                    ? "bg-primary/20 text-primary"
                                                                    : "hover:bg-accent hover:text-accent-foreground"
                                                            )}
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    )
                                                )}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                )
                            )}
                            <Button asChild className="mt-4 w-full">
                                <Link href="/login">Masuk</Link>
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );

}

export const NavbarSpacer = () => (
    <div className="h-[var(--navbar-height)]"></div>
);
