import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
    try {
        // Initialize Supabase inside the handler so env vars are read at runtime
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

        if (!supabaseUrl || !supabaseServiceKey) {
            console.error("Supabase credentials missing");
            return NextResponse.json({ success: false, error: "Database configuration error on server." }, { status: 500 });
        }

        const supabase = createClient(supabaseUrl, supabaseServiceKey);

        const body = await req.json();
        const { name, company, designation, email, website } = body;

        if (!name || !company || !designation || !email || !website) {
            return NextResponse.json(
                { success: false, error: "All fields are required." },
                { status: 400 }
            );
        }

        // Log for Vercel outputs
        console.log("New Waitlist Signup:", {
            name,
            company,
            designation,
            email,
            website,
            timestamp: new Date().toISOString()
        });

        // 1. Insert into Supabase
        const { error: dbError } = await supabase
            .from('waitlist')
            .insert([
                { name, email, company, website, designation }
            ]);

        if (dbError) {
            console.error("Supabase Insertion Error:", dbError);
            // We can choose to fail the request here, or continue to send the email anyway.
            // Usually, failing is safer so the user knows it didn't work and can retry.
            if (dbError.code === '23505') { // Unique violation
                return NextResponse.json(
                    { success: false, error: "This email is already on the waitlist." },
                    { status: 400 }
                );
            }
            return NextResponse.json(
                { success: false, error: dbError.message || "Database error. Please try again." },
                { status: 500 }
            );
        }


        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Waitlist API Error:", error);
        return NextResponse.json(
            { success: false, error: "Internal server error." },
            { status: 500 }
        );
    }
}
