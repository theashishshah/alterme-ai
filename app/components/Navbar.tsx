"use client";

import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const router = useRouter();

    let logoSrc = "/logo-white.png";

    if (theme !== undefined) {
        logoSrc = theme === "dark" ? "/logo-white.png" : "/logo.png";
    }

    const baseURL =
        typeof window !== "undefined" && window.location.hostname === "localhost"
            ? "http://localhost:3000"
            : "https://alterme-ai.ashishshah.me";

    const handleClick = () => {
        router.push(baseURL);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 border-b ">
            <div
                className="
                    mx-auto 
                    flex items-center justify-between 
                    py-4 px-6 
                    w-[95%] sm:w-[90%] md:w-[80%] lg:w-[65%]
                    transition-all duration-300
                "
            >
                <div className="flex items-center gap-2 hover:cursor-pointer" onClick={handleClick}>
                    <Image
                        src={logoSrc}
                        alt="Logo"
                        width={32}
                        height={32}
                        className="rounded-md "
                    />
                    <span className="text-xl font-semibold ">Alterme-ai</span>
                </div>

                <div className="flex items-center gap-3">
                    <Button
                        className="hover:cursor-pointer"
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    >
                        {theme === "light" ? (
                            <Moon className="w-4 h-4" />
                        ) : (
                            <Sun className="w-4 h-4" />
                        )}
                    </Button>
                    <Button className="hover:cursor-pointer">Sign Up</Button>
                </div>
            </div>
        </nav>
    );
}
