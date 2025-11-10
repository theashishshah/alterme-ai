"use client";

import Link from "next/link";
import { Github, Twitter, Mail, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-border mt-20">
            <div
                className="
                    mx-auto w-[95%] sm:w-[90%] md:w-[80%] lg:w-[65%]
                    flex flex-col sm:flex-row items-center justify-between
                    gap-6 py-8 text-sm text-muted-foreground
                "
            >
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
                    <span className="font-semibold text-foreground">Alterme-ai</span>
                    <p className="text-muted-foreground">
                        Build, talk, and grow with your digital reflection.
                    </p>
                </div>

                <div className="flex items-center gap-5">
                    <Link
                        href="https://github.com/theashishshah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors"
                    >
                        <Github className="w-5 h-5" />
                    </Link>

                    <Link
                        href="https://x.com/ashishtwtz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors"
                    >
                        <Twitter className="w-5 h-5" />
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/theashishshahh/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors"
                    >
                        <Linkedin className="w-5 h-5" />
                    </Link>

                    <Link
                        href="mailto:ashishah@outlook.com"
                        className="hover:text-foreground transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                    </Link>
                </div>
            </div>

            <div className="border-t border-border/50 py-4">
                <p className="text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Alterme-ai. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
