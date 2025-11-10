"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Construction, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CreatePersonaPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-md w-full"
            >
                <Card className="border-muted-foreground/20 shadow-lg backdrop-blur-sm bg-background/80">
                    <CardContent className="flex flex-col items-center py-12 px-6 space-y-6">
                        <div className="p-4 rounded-full bg-muted w-fit">
                            <Construction className="w-10 h-10 text-muted-foreground" />
                        </div>

                        <h1 className="text-2xl font-semibold tracking-tight">
                            This page is under development
                        </h1>

                        <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
                            We're building something special here — soon you’ll be able to craft and
                            train your own AI persona with your thoughts, tone, and personality.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <Button asChild variant="outline" className="gap-2">
                                <Link href="/" scroll={false}>
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to Home
                                </Link>
                            </Button>

                            <Button disabled className="opacity-70 cursor-not-allowed">
                                Coming Soon
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </main>
    );
}
