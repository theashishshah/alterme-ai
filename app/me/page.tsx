"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// change id of each object in sequential manner
const mockMessages = [
    {
        id: 1,
        sender: "persona",
        text: "Hey there! I’m your persona — ready to show you how it feels when someone chats with you.",
        time: "2:43 PM",
    },
    {
        id: 2,
        sender: "user",
        text: "That’s awesome. I can’t wait to see how this works!",
        time: "2:44 PM",
    },
];

interface ChatPageProps {
    personaName: string;
    personaImage: string;
}

export default function ChatPage({
    personaName = "Ashish Shah",
    personaImage = "/meme.png",
}: ChatPageProps) {
    const [messages, setMessages] = useState(mockMessages);
    const [input, setInput] = useState("");
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;
        const newMessage = {
            id: Date.now(),
            sender: "user",
            text: input.trim(),
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages([...messages, newMessage]);
        setInput("");

        setTimeout(() => {
            const reply = {
                id: Date.now() + 1,
                sender: "persona",
                text: "Interesting thought! That’s exactly how your persona might respond in real time.",
                time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            };
            setMessages((prev) => [...prev, reply]);
        }, 1500);
    };

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
                                    msg.sender === "persona" ? "justify-start" : "justify-end"
                                }`}
                            >
                                {msg.sender === "persona" && (
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
