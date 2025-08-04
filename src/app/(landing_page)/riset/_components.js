"use client"
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const RisetSlider=()=>{
    return <Carousel opts={{ loop: true }} plugins={[Autoplay()]}>
        <CarouselContent>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                <AspectRatio
                    ratio={16 / 9}
                    className="bg-muted rounded-md overflow-hidden"
                />
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                <AspectRatio
                    ratio={16 / 9}
                    className="bg-muted rounded-md overflow-hidden"
                />
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                <AspectRatio
                    ratio={16 / 9}
                    className="bg-muted rounded-md overflow-hidden"
                />
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                <AspectRatio
                    ratio={16 / 9}
                    className="bg-muted rounded-md overflow-hidden"
                />
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                <AspectRatio
                    ratio={16 / 9}
                    className="bg-muted rounded-md overflow-hidden"
                />
            </CarouselItem>
        </CarouselContent>
    </Carousel>;
}