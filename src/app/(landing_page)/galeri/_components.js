"use client"

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";

const categories = [
    {
        label: "Semua",
        value: "all"
    },
    {
        label: "Kegiatan Madrasah",
        value: "kegiatan-madrasah",
    },
    {
        label: "Ekstra",
        value: "ekstra",
    },
    {
        label: "Ketrampilan",
        value: "ketrampilan",
    },
    {
        label: "Lomba",
        value: "lomba",
    },
    {
        label: "Lainnya",
        value: "lainnya",
    },
];

export const FilterChips = () => {
    const [selected, setSelection] = useState('all');

    return <div className="flex flex-row gap-2 overflow-auto">
        {categories.map(category =><button className={cn("text-nowrap cursor-pointer transition-colors  py-1 px-2 rounded-md text-sm bg-muted text-muted-foreground", category['value']==selected&&"bg-primary/20 text-primary")} onClick={()=>setSelection(category['value'])}>{category['label']}</button>)}
    </div>;
};

export const MasonryGrid = () => {
    const images = useMemo(() =>
        Array.from(
            { length: 50 },
            (_, i) =>
                `https://picsum.photos/${
                    Math.floor(Math.random() * 601) + 200
                }/${Math.floor(Math.random() * 601) + 200}?random=${i}`
        )
    );
    return (
        <div className="gap-4 space-y-4 columns-2 sm:columns-3 md:columns-4">
            {images.map((image, i) => (
                <Tooltip>
                    <TooltipTrigger asChild>
                        <img
                            key={i}
                            src={image}
                            className="w-full h-full rounded-md transition grayscale transform hover:scale-[0.98] hover:grayscale-0"
                            alt="Test"
                        />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Item {i + 1}</p>
                    </TooltipContent>
                </Tooltip>
            ))}
        </div>
    );
};
