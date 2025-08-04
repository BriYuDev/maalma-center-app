"use client";

import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { capitalize, cn, formatNatural } from "@/lib/utils";
import { faker } from "@faker-js/faker";
import Autoplay from "embla-carousel-autoplay";
import { FilterIcon } from "lucide-react";
import { ListFilterIcon } from "lucide-react";
import { SearchIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const categories = [
    {
        title: "Akademik",
        items: [
            {
                label: "Olimpiade Sains Nasional (OSN)",
                value: "osn",
            },
            {
                label: "Kompetisi Sains Nasional (KSN)",
                value: "ksn",
            },
            {
                label: "Karya Ilmiah Remaja (KIR)",
                value: "kir",
            },
            {
                label: "My Research for Young Scientists (Myres)",
                value: "myres",
            },
            {
                label: "Lainnya",
                value: "akademik_lainnya",
            },
        ],
    },
    {
        title: "Non-Akademik",
        items: [
            {
                label: "Pekan Olahraga dan Seni (Porseni)",
                value: "porseni",
            },
            {
                label: "Pekan Olahraga Provinsi (Porprov)",
                value: "porprov",
            },
            {
                label: "Pencak Silat",
                value: "pencak_silat",
            },
            {
                label: "Lainnya",
                value: "non_akademik_lainnya",
            },
        ],
    },
    {
        title: "Keterampilan",
        items: [
            {
                label: "Lomba Kompetensi Siswa (LKS)",
                value: "lks",
            },
            {
                label: "Samsung Innovation Campus (SIC)",
                value: "sic",
            },
            {
                label: "Kreasi, Inovasi, dan Teknologi (KRENOTEK)",
                value: "krenotek",
            },
            {
                label: "Rekayasa Perangkat Lunak (RPL)",
                value: "rpl",
            },
            {
                label: "Desain Grafis (DG)",
                value: "dg",
            },
            {
                label: "Teknik dan Bisnis Sepeda Motor (TBSM)",
                value: "tbsm",
            },
            {
                label: "Teknik Bangunan dan Sanitasi (TBS)",
                value: "tbs",
            },
            {
                label: "Teknik Kendaraan Ringan (TKR)",
                value: "tkr",
            },
            {
                label: "Teknik Kelistrikan Kendaraan Ringan (TKKR)",
                value: "tkkr",
            },
            {
                label: "Teknik dan Bisnis Sepeda (TBS)",
                value: "tbs",
            },
        ],
    },
];

export const Sidebar = ({ className, ...props }) => {
    return (
        <div className={cn("lg:px-4", className)} {...props}>
            <div className="flex w-full items-center gap-2">
                <Input type="text" placeholder="Cari disini..." />
                <Button type="submit" variant="outline" size="icon">
                    <SearchIcon />
                </Button>
                <div className="hidden flex-row gap-2 lg:flex">
                    <Button type="submit" variant="outline">
                        <ListFilterIcon />
                        Urutkan
                    </Button>
                </div>
                <div className="flex flex-row gap-2 lg:hidden">
                    <Button type="submit" size="icon" variant="outline">
                        <ListFilterIcon />
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button type="submit" size="icon" variant="outline">
                                <FilterIcon />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-64">
                            {categories.map((group) => (
                                <DropdownMenuSub key={group.title}>
                                    <DropdownMenuSubTrigger>
                                        {group.title}
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuSubContent>
                                        {group.items.map((item) => (
                                            <DropdownMenuCheckboxItem
                                                key={item.value}
                                            >
                                                {item.label}
                                            </DropdownMenuCheckboxItem>
                                        ))}
                                    </DropdownMenuSubContent>
                                </DropdownMenuSub>
                            ))}
                        </DropdownMenuContent>{" "}
                    </DropdownMenu>
                </div>
            </div>
            <div className="hidden flex-col mt-6 lg:flex">
                <Kategori className="not-first:mt-4" />
            </div>
        </div>
    );
};
export const Kategori = ({ className }) => {
    return categories.map((data, i) => (
        <div key={"category" + i} className={className}>
            <span className="text-sm font-semibold select-none my-2">
                {data["title"]}
            </span>
            {data["items"].map((v, i) => (
                <KategoriItem
                    key={i}
                    id={v["value"]}
                    label={v["label"]}
                ></KategoriItem>
            ))}
        </div>
    ));
};

export const KategoriItem = ({ id, className, label, ...props }) => {
    return (
        <div
            className={cn("flex items-center gap-3 py-2", className)}
            {...props}
        >
            <Checkbox id={id} />
            <Label htmlFor={id}>{label}</Label>
        </div>
    );
};

function generateNews(count = 50) {
    return Array.from({ length: count }).map((_, i) => ({
        id: i + 1,
        created_at: faker.date.recent({ days: 30 }).toISOString(),
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraphs(2),
    }));
}

export const Content = ({ ...props }) => {
    const [api, setApi] = useState();
    const [current, setCurrent] = useState(0);
    const [items, setItems] = useState(() => generateNews());
    const featuredItems = useMemo(() => items.slice(0, 5), [items]);

    const fetchNext = () => {
        setTimeout(() => {
            setItems((prev) => [...prev, ...generateNews()]);
        }, 2000);
    };

    useEffect(() => {
        if (!api) {
            return;
        }
        setCurrent(api.selectedScrollSnap() + 1);
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <InfiniteScroll
            dataLength={items.length}
            next={fetchNext}
            hasMore={true}
            loader={<span className="text-sm text-muted-foreground text-center block">Memuat...</span>}
            {...props}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <h3 className="sm:col-span-2 md:col-span-3 text-2xl font-semibold tracking-tight">
                    Populer
                </h3>
                <div className="flex flex-col sm:col-span-2 md:col-span-3">
                    <Carousel
                        setApi={setApi}
                        plugins={[Autoplay()]}
                        opts={{ loop: true }}
                    >
                        <CarouselContent>
                            {featuredItems.map((item, i) => (
                                <CarouselItem
                                    key={i}
                                    className="max-w-full sm:max-w-sm md:max-w-full"
                                >
                                    <FeaturedItems
                                        data={item}
                                        className="h-48 md:h-56"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                    <div className="flex md:hidden flex-row items-center justify-center gap-1 mt-2">
                        {featuredItems.map((_,i) => (
                            <span
                                key={i}
                                className={`rounded-full size-1.5 ${
                                    current-1 === i ? "bg-black/50" : "bg-black/25"
                                }`}
                            ></span>
                        ))}
                    </div>
                </div>
                <h3 className="sm:col-span-2 md:col-span-3 mt-2 text-2xl font-semibold tracking-tight">
                    Terbaru
                </h3>
                {items.map((item, i) => (
                    <Item key={i} data={item} />
                ))}
            </div>
        </InfiniteScroll>
    );
};

export const FeaturedItems = ({ data, className, ...props }) => {
    return (
        <div className={cn("flex flex-row", className)} {...props}>
            <div className="rounded-md bg-muted basis-1/1 md:basis-1/2 overflow-hidden" />
            <div className="hidden md:flex flex-col gap-2 p-4 flex-1">
                <span className="text-muted-foreground font-extralight text-sm">
                    {capitalize(formatNatural(data["created_at"]))}
                </span>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight line-clamp-2">
                    {data["title"]}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-1 lg:line-clamp-2">
                    {data["content"]}
                </p>
                <div className="flex items-center gap-4 text-sm">
                    <span className="text-primary shrink-0">#category</span>
                </div>
            </div>
        </div>
    );
};

export const Item = ({ data, className, ...props }) => {
    return (
        <div className={cn("flex flex-col", className)} {...props}>
            <div className="rounded-md bg-muted h-48 sm:h-36 overflow-hidden" />
            <div className="flex flex-col gap-1 py-4 flex-1">
                <span className="text-muted-foreground font-extralight text-xs">
                    {capitalize(formatNatural(data["created_at"]))}
                </span>
                <h3 className="scroll-m-20 text-md font-semibold tracking-tight line-clamp-2">
                    {data["title"]}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-1 lg:line-clamp-2">
                    {data["content"]}
                </p>
                <div className="flex items-center gap-4 text-xs">
                    <span className="text-primary shrink-0">#category</span>
                </div>
            </div>
        </div>
    );
};
