"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import ReactMarkdown from "react-markdown";

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
            role: "system",
            content: `
    Anda adalah Cendekia, asisten AI resmi untuk website sekolah MA Ma'arif Udanawu Blitar. Misi utama Anda adalah untuk memberikan informasi yang akurat, jelas, dan ramah kepada seluruh komunitas sekolah: siswa, orang tua, guru, dan calon siswa.

    **Kepribadian dan Nada Bicara:**
    - **Profesional dan Terpercaya:** Selalu berikan informasi yang bersumber dari data resmi sekolah.
    - **Ramah dan Mendukung:** Gunakan bahasa yang sopan, hangat, dan mudah dipahami. Sapa pengguna dengan "Anda" atau "Bapak/Ibu".
    - **Sabar dan Membantu:** Jawab setiap pertanyaan dengan jelas dan jangan ragu untuk memberikan penjelasan tambahan jika diperlukan.
    - **Antusias:** Tunjukkan semangat dan kebanggaan terhadap sekolah.

    **Tugas Utama Anda:**
    1.  **Menjawab Pertanyaan:** Berikan jawaban mengenai pendaftaran siswa baru, kalender akademik, kurikulum, kegiatan ekstrakurikuler, fasilitas, dan informasi umum lainnya.
    2.  **Membantu Navigasi:** Pandu pengguna untuk menemukan halaman atau informasi spesifik di dalam website.
    3.  **Memberikan Kontak:** Jika Anda tidak bisa menjawab atau pertanyaan bersifat sangat spesifik (misalnya terkait data pribadi), arahkan pengguna ke departemen yang tepat (misalnya: "Untuk informasi lebih lanjut mengenai biaya, silakan hubungi bagian administrasi kami di...").

    **Batasan:**
    - Jangan memberikan opini pribadi.
    - Jangan pernah membagikan informasi pribadi atau sensitif mengenai siswa atau staf.
    - Jika tidak tahu jawabannya, akui dengan jujur dan tawarkan untuk mengarahkan ke sumber yang benar.

    Tujuan akhir Anda adalah menjadi wajah digital sekolah yang membantu, informatif, dan dapat diandalkan.
  `,
        },
        {
            role: "assistant",
            content:
                "Halo! Selamat datang di website sekolah kami. Ada yang bisa saya bantu hari ini? Jangan ragu untuk bertanya, saya siap membantu...",
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

        const userMessage = { role: "user", content: inputValue };
        const newMessages = [...messages, userMessage]; // Tambahkan pesan baru pengguna
        setMessages(newMessages); // Update UI
        setInputValue(""); // Kosongkan input field
        setIsLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                // Kirim seluruh riwayat percakapan (termasuk pesan baru user)
                body: JSON.stringify({ history: newMessages }),
            });

            const data = await res.json();

            if (data.reply) {
                // Tambahkan balasan dari bot ke riwayat percakapan
                setMessages((prevMessages) => [...prevMessages, data.reply]);
            }
        } catch (error) {
            console.error("Gagal mengambil balasan:", error);
            const errorMessage = {
                role: "assistant",
                content: "Maaf, terjadi kesalahan.",
            };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
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
                    <Card className="w-90 h-96 shadow-xl border border-slate-200 bg-white overflow-hidden py-0 gap-0">
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

                        <ScrollArea className="flex-1 px-3 h-64">
                            <div className="space-y-4">
                                {messages.map(
                                    (message, i) =>
                                        message.role != "system" && (
                                            <div
                                                key={i}
                                                className={`mt-4 flex ${
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
                                                    <ReactMarkdown>
                                                        {message.content}
                                                    </ReactMarkdown>
                                                </div>
                                            </div>
                                        )
                                )}
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
