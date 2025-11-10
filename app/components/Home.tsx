"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

type Role = "system" | "assistant" | "user" | "developer";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
                <h1 className="text-3xl md:text-5xl font-semibold max-w-2xl leading-snug">
                    Ask the version of you that others only imagine — the one they wish they could
                    talk to.
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                    Alterme-ai lets you craft your digital persona — train it with your memories,
                    your tone, and your thoughts, then chat with it like it’s really you.
                </p>

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
