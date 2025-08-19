// app/api/chat/route.js

import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Nama fungsinya harus sesuai dengan metode HTTP, contoh: POST
export async function POST(request) {
    try {
        // 1. Mengambil body dari request (sedikit berbeda dari Pages Router)
        const { history } = await request.json();

        if (!history || history.length === 0) {
            return NextResponse.json(
                { error: "History is required" },
                { status: 400 }
            );
        }

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: history,
        });

        const reply = completion.choices[0].message;

        // 2. Mengirim balasan menggunakan NextResponse
        return NextResponse.json({ reply });
    } catch (error) {
        console.error("Error calling OpenAI API:", error);
        // 3. Mengirim error juga menggunakan NextResponse
        return NextResponse.json(
            { error: error },
            { status: 500 }
        );
    }
}
