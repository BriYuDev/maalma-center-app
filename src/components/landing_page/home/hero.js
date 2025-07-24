import { Button } from "@/components/ui/button";
import { NavbarSpacer } from "../navbar";

export default function HeroSection(){
    return <div className="px-[var(--safearea-width)] h-dvh flex flex-col">
                    <NavbarSpacer />
                    <main className="flex flex-row items-center justify-between flex-1">
                        <div>
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
                    </main>
                </div>
}