"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";

export function ChatWidget() {
    const openWhatsApp = () => {
        const phoneNumber = "6281334355517"; // ganti dengan nomor WA
        const message = "Halo, saya mau tanya.";
        window.open(
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: "1",
            content: "Hi! How can I help you today?",
            role: "assistant",
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async () => {
        if (!inputValue.trim() || isLoading) return;

        const userMessage = {
            id: Date.now().toString(),
            content: inputValue,
            role: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage.content }),
            });

            if (!response.ok) throw new Error("Failed to get response");

            const data = await response.json();

            const assistantMessage = {
                id: (Date.now() + 1).toString(),
                content: data.response,
                role: "assistant",
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, assistantMessage]);
        } catch (error) {
            const errorMessage = {
                id: (Date.now() + 1).toString(),
                content: "Sorry, something went wrong. Please try again.",
                role: "assistant",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="flex flex-col fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-2 duration-200 gap-4">
            {!isOpen && (
                <>
                    <Button
                        onClick={openWhatsApp}
                        className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-500 shadow-lg hover:shadow-xl transition-all duration-200 border-0"
                        size="icon"
                    >
                        <SiWhatsapp className="size-6" />
                    </Button>
                    <Button
                        onClick={() => setIsOpen(true)}
                        className="w-14 h-14 rounded-full bg-primary hover:bg-primary/70 shadow-lg hover:shadow-xl transition-all duration-200 border-0"
                        size="icon"
                    >
                        <MessageCircle className="w-6 h-6 text-white" />
                    </Button>
                </>
            )}

            {isOpen && (
                <div className="animate-in slide-in-from-bottom-2 duration-200">
                    <Card className="w-80 h-96 shadow-xl border border-slate-200 bg-white overflow-hidden py-0 gap-0">
                        <div className="bg-white border-b border-slate-100 p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                                        <Bot className="w-4 h-4 text-slate-600" />
                                    </div>
                                    <span className="font-medium text-slate-900">
                                        Assistant
                                    </span>
                                </div>
                                <Button
                                    onClick={() => setIsOpen(false)}
                                    variant="ghost"
                                    size="icon"
                                    className="w-8 h-8 text-slate-400 hover:text-slate-600 hover:bg-slate-50"
                                >
                                    <X className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>

                        <ScrollArea className="flex-1 p-4 h-64">
                            <div className="space-y-4">
                                {messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`flex ${
                                            message.role === "user"
                                                ? "justify-end"
                                                : "justify-start"
                                        }`}
                                    >
                                        <div
                                            className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                                                message.role === "user"
                                                    ? "bg-slate-900 text-white"
                                                    : "bg-slate-100 text-slate-900"
                                            }`}
                                        >
                                            {message.content}
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="bg-slate-100 px-3 py-2 rounded-lg">
                                            <div className="flex space-x-1">
                                                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                                                <div
                                                    className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"
                                                    style={{
                                                        animationDelay: "0.1s",
                                                    }}
                                                ></div>
                                                <div
                                                    className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"
                                                    style={{
                                                        animationDelay: "0.2s",
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        </ScrollArea>

                        <div className="p-4 border-t border-slate-100">
                            <div className="flex space-x-2">
                                <Input
                                    value={inputValue}
                                    onChange={(e) =>
                                        setInputValue(e.target.value)
                                    }
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type a message..."
                                    disabled={isLoading}
                                    className="flex-1 border-slate-200 focus:border-slate-300 focus:ring-1 focus:ring-slate-300 rounded-lg"
                                />
                                <Button
                                    onClick={handleSendMessage}
                                    disabled={!inputValue.trim() || isLoading}
                                    size="icon"
                                    className="bg-slate-900 hover:bg-slate-800 w-10 h-10 rounded-lg disabled:opacity-50"
                                >
                                    <Send className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            )}
        </div>
    );
}
