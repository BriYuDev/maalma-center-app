import { Button } from "@/components/ui/button";
import { NavbarSpacer } from "../navbar";
import { cn, safeareaPadding } from "@/lib/utils";

export default function HeroSection(){
    return <div className={cn(safeareaPadding(), "h-dvh flex flex-col")}>
                    <NavbarSpacer />
                    <main className="grid grid-cols-1 md:grid-cols-2 flex-1">
                        <div className="flex flex-col justify-center">
                            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
                                Lorem ipsum dolor sit amet, <br />
                                consectetur adipiscing elit
                            </h1>
                            <h4 className="mt-3 scroll-m-20 text-xl font-semibold tracking-tight">
                                Lorem ipsum dolor sit amet orci aliquam.
                            </h4>
                            <Button
                                size="lg"
                                className="mt-4 focus-visible:border-slate-800 focus-visible:ring-0 hover:bg-slate-800 hover:text-white bg-white text-slate-800 border-2 border-slate-800"
                            >
                                Join Sekarang!
                            </Button>
                        </div>
                        <div></div>
                    </main>
                </div>
}