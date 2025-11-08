"use client";

import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    let logoSrc = "/logo-white.png";

    if (theme !== undefined) logoSrc = theme === "dark" ? "/logo-white.png" : "/logo.png";

    return (
        <nav className="flex justify-between items-center px-6 py-4 border-b">
            <div className="flex items-center gap-2">
                <Image src={logoSrc} alt="Logo" width={32} height={32} className="rounded-md" />
                <span className="text-xl font-semibold">Alterme-ai</span>
            </div>

            <div className="flex items-center gap-3">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                    {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                </Button>

                <Button>Sign Up</Button>
            </div>
        </nav>
    );
}
