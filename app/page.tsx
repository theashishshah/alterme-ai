"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Navbar from "./components/Navbar";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
                <h1 className="text-3xl md:text-5xl font-semibold max-w-2xl leading-snug">
                    Ask the version of you that others only imagine — the one they wish they could
                    talk to.
                </h1>

                <div className="mt-8 flex gap-4 flex-wrap justify-center">
                    <Button size="lg" className="px-8 py-6 text-lg font-medium">
                        Try (Talk to me)
                    </Button>
                    <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-medium">
                        Create your persona
                    </Button>
                </div>
            </main>
        </div>
    );
}
