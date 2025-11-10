"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Chat {
    message: String;
}

export default function Home() {
    const handleBackend = async () => {
        // take from local storage
    };
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
                <h1 className="text-3xl md:text-5xl font-semibold max-w-2xl leading-snug">
                    Ask the version of you that others only imagine — the one they wish they could
                    talk to.
                </h1>

                <div className="mt-8 flex gap-4 flex-wrap justify-center">
                    <Button
                        asChild
                        size="lg"
                        className="px-8 py-6 text-lg font-medium hover:cursor-pointer"
                    >
                        <Link href="/me" scroll={false}>
                            Try (Talk to me)
                        </Link>
                    </Button>
                    <Button
                        onClick={handleBackend}
                        size="lg"
                        variant="outline"
                        className="px-8 py-6 text-lg font-medium hover:cursor-pointer"
                    >
                        Create your persona
                    </Button>
                </div>
            </main>
        </div>
    );
}
