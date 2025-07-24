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
import { cn } from "@/lib/utils";

export default function Navbar() {
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
    const [isTriggered, setIsTriggered] = useState(false);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setIsTriggered(latest > 0.1);
    });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <header className="fixed z-10 top-0 left-0 px-[var(--safearea-width)] h-[var(--navbar-height)] w-full flex flex-row justify-between items-center transition-colors">
            <motion.div
                className="absolute left-0 top-0 bg-white origin-top w-full h-full border-b-[1px] border-gray-300 -z-10 shadow-sm"
                initial={{
                    scaleY: 0,
                }}
                animate={{ scaleY: isTriggered ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            />
            <motion.div
                className="absolute top-0 left-0 origin-left w-full h-[2px] bg-primary"
                style={{ scaleX: scaleX }}
            />
            <Image alt="Logo Sekolah" src="/logo.png" width={50} height={50} />
            <NavigationMenu className="hidden md:block" viewport={false}>
                <NavigationMenuList>
                    {menus.map((v, i) => (
                        <NavigationMenuItem key={i}>
                            {!v["children"] ? (
                                <NavigationMenuLink
                                    asChild
                                    data-active={
                                        v["path"] == "/"
                                            ? pathname == v["path"]
                                            : pathname.startsWith(v["path"])
                                    }
                                    className={cn(navigationMenuTriggerStyle(), "data-[active=true]:text-primary data-[active=true]:bg-primary/20")}
                                >
                                    <Link href={v["path"]}>{v["label"]}</Link>
                                </NavigationMenuLink>
                            ) : (
                                <>
                                    <NavigationMenuTrigger
                                        data-active={
                                            v["children"].find(
                                                (child) =>
                                                    child["path"] == pathname
                                            ) != null
                                        }
                                        className="data-[active=true]:text-primary data-[active=true]:bg-primary/20"
                                    >
                                        {v["label"]}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[200px] gap-4">
                                            {v["children"].map((child, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{
                                                        opacity: 0,
                                                        translateY: 15,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        translateY: 0,
                                                    }}
                                                    transition={{
                                                        duration:
                                                            0.35 * (i + 1),
                                                    }}
                                                >
                                                    <NavigationMenuLink
                                                        asChild
                                                        data-active={
                                                            child["path"] == "/"
                                                                ? pathname ==
                                                                  child["path"]
                                                                : pathname.startsWith(
                                                                      child[
                                                                          "path"
                                                                      ]
                                                                  )
                                                        }
                                                        className="data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground"
                                                    >
                                                        <Link
                                                            href={child["path"]}
                                                        >
                                                            {child["label"]}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </>
                            )}
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
            <Button className="hidden md:block" asChild>
                <Link href="/login">Masuk</Link>
            </Button>
        </header>
    );
}

export const NavbarSpacer = () => (
    <div className="h-[var(--navbar-height)]"></div>
);
