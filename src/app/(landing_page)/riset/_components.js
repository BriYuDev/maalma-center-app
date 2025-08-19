"use client"
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const RisetSlider=()=>{
    return (
        <Carousel opts={{ loop: true }} plugins={[Autoplay()]}>
            <CarouselContent>
                {[
                    "/riset/1.webp",
                    "/riset/2.webp",
                    "/riset/3.webp",
                    "/riset/4.webp",
                    "/riset/5.webp",
                ].map((src, i) => (
                    <CarouselItem key={i} className="md:basis-1/3 lg:basis-1/4">
                        <AspectRatio
                            ratio={16 / 9}
                            className="bg-muted rounded-md overflow-hidden"
                            style={{
                                background: 'url("' + src + '")',
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                            }}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}