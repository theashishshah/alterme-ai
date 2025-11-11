"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import Footer from "./Footer";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col text-center overflow-hidden">
            <div className="absolute inset-0  from-background via-background/90 to-background/95" />
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-indigo-600/25 via-purple-500/10 to-transparent blur-3xl opacity-50" />

            <main className="relative flex-1 flex flex-col items-center justify-center pt-28 pb-24 sm:pt-36 sm:pb-28 z-10">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full bg-muted/10 border border-muted-foreground/10 text-sm text-muted-foreground"
                >
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    <span>AI that speaks like you — not for you</span>
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-5xl font-bold leading-snug max-w-3xl"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Ask the version of <span className="text-indigo-400">you</span> that others only
                    imagine — the one they wish they could talk to.
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    Alterme-ai lets you craft your digital persona — train it with your memories,
                    tone, and thoughts, then chat with it like it’s really you.
                </motion.p>

                <motion.div
                    className="mt-8 flex gap-4 flex-wrap justify-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <Button
                        asChild
                        size="lg"
                        className="px-8 py-6 text-lg font-medium hover:cursor-pointer transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)]"
                    >
                        <Link href="/me" scroll={false}>
                            Try (Talk to me)
                        </Link>
                    </Button>
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="px-8 py-6 text-lg font-medium hover:cursor-pointer transition-all hover:scale-[1.02]"
                    >
                        <Link href="/create-persona" scroll={false}>
                            Create your persona
                        </Link>
                    </Button>
                </motion.div>

                <motion.div
                    className="mt-12 text-sm text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    <p>
                        Trusted by creators, developers, and thinkers exploring their digital
                        selves.
                    </p>
                    <div className="flex justify-center items-center gap-2 mt-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div
                                key={i}
                                className="w-8 h-8 rounded-full bg-muted-foreground/20 border border-muted-foreground/10"
                            />
                        ))}
                    </div>
                </motion.div>
            </main>

            <Footer />
        </section>
    );
}
