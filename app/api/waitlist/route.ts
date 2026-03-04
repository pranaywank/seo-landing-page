import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
    try {
        const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL || "").replace(/['"]/g, '').trim();
        const supabaseServiceKey = (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "").replace(/['"]/g, '').trim();

        if (!supabaseUrl || !supabaseServiceKey) {
            console.error("Supabase credentials missing");
            return NextResponse.json({ success: false, error: "Database configuration error on server." }, { status: 500 });
        }

        const supabase = createClient(supabaseUrl, supabaseServiceKey, {
            auth: {
                persistSession: false,
                autoRefreshToken: false
            }
        });

        const body = await req.json();
        const { name, email, website } = body;

        console.log("New Waitlist Signup:", {
            name,
            email,
            website,
            timestamp: new Date().toISOString()
        });

        console.log("Attempting to insert into Supabase at URL:", supabaseUrl);
        const { error: dbError } = await supabase
            .from('waitlist')
            .insert([
                { name, email, website }
            ]);

        if (dbError) {
            console.error("Supabase Insertion Error:", JSON.stringify(dbError, null, 2));

            if (dbError.code === '23505') {
                return NextResponse.json(
                    { success: false, error: "This email is already on the waitlist." },
                    { status: 400 }
                );
            }
            return NextResponse.json(
                { success: false, error: `${dbError.message || "Database error"}` },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error: unknown) {
        console.error("Waitlist API Error:", error);

        let errorMessage = "Internal server error.";
        if (error instanceof Error) {
            errorMessage = error.message;
        } else if (typeof error === 'string') {
            errorMessage = error;
        }

        return NextResponse.json(
            { success: false, error: `Exception: ${errorMessage}` },
            { status: 500 }
        );
    }
}
