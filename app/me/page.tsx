"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type UIMessage = {
    id: string;
    sender: "user" | "assistant";
    text: string;
    time: string;
};

export type LLMMessage = {
    role: "system" | "user" | "assistant";
    content: string;
};

interface ChatPageProps {
    personaName: string;
    personaImage: string;
}

export default function ChatPage({
    personaName = "Ashish Shah",
    personaImage = "/meme.png",
}: ChatPageProps) {
    const [messages, setMessages] = useState<UIMessage[]>([]);
    const [input, setInput] = useState("");
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
        localStorage.clear();
    }, []);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage: UIMessage = {
            id: crypto.randomUUID(),
            sender: "user",
            text: input.trim(),
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");

        const llmChatHistory: LLMMessage[] = JSON.parse(
            localStorage.getItem("chat-history") || "[]"
        );

        llmChatHistory.push({
            role: "user",
            content: input.trim(),
        });

        localStorage.setItem("chat-history", JSON.stringify(llmChatHistory));

        const response = await fetch("/api/me", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ messages: llmChatHistory }),
        });

        const data = await response.json();
        console.log("data receive from backedn", data);

        if (data.reply) {
            const assistantReply: UIMessage = {
                id: crypto.randomUUID(),
                sender: "assistant",
                text: data.reply,
                time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            };
            setMessages((pre) => [...pre, assistantReply]);

            llmChatHistory.push({
                role: "assistant",
                content: data.reply,
            });

            localStorage.setItem("chat-history", JSON.stringify(llmChatHistory));
        } else {
            console.log("Something went wrong, try again!");
        }
    };

    const [userMessage, setUserMessage] = useState<string>("");

    return (
        <div className="flex justify-center items-center min-h-screen bg-background text-foreground">
            <div className="w-full max-w-[1100px] md:w-[80%] lg:w-[60%] h-screen flex flex-col ">
                <header className=" p-4 text-center font-medium sticky top-0 bg-background z-10">
                    Talk to {personaName}
                </header>

                <main className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
                    <AnimatePresence>
                        {messages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className={`flex ${
                                    msg.sender === "assistant" ? "justify-start" : "justify-end"
                                }`}
                            >
                                {msg.sender === "assistant" && (
                                    <div className="flex items-start gap-3 max-w-[80%]">
                                        <Image
                                            src={personaImage}
                                            alt={personaName}
                                            width={40}
                                            height={40}
                                            className="rounded-full"
                                        />
                                        <div>
                                            <div className="rounded-2xl px-4 py-2 bg-muted text-sm md:text-base">
                                                {msg.text}
                                            </div>
                                            <div className="text-xs text-muted-foreground mt-1">
                                                {personaName} • {msg.time}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {msg.sender === "user" && (
                                    <div className="flex flex-col items-end max-w-[80%]">
                                        <div className="rounded-2xl px-4 py-2 bg-primary text-primary-foreground text-sm md:text-base">
                                            {msg.text}
                                        </div>
                                        <div className="text-xs text-muted-foreground mt-1">
                                            You • {msg.time}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    <div ref={chatEndRef} />
                </main>

                <footer className=" p-4 flex items-center gap-3 sticky bottom-0 bg-background">
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        placeholder={`Chat with ${personaName}...`}
                        className="flex-1"
                    />
                    <Button onClick={handleSend} size="icon" variant="secondary">
                        <Send className="w-4 h-4" />
                    </Button>
                </footer>
            </div>
        </div>
    );
}
