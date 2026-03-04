"use client";

import { motion } from "framer-motion";
import GlowButton from "./ui/GlowButton";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[72px]">
            {/* Background Effects */}
            <div className="hero-grid-bg" />
            <div className="hero-glow" />

            <div className="max-w-[800px] mx-auto px-6 text-center relative z-10 py-20">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-8"
                >
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    Now accepting early access signups
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-[clamp(36px,6vw,64px)] font-bold leading-[1.05] tracking-tight mb-6 text-balance"
                >
                    Your entire SEO pipeline.
                    <br />
                    One command. Zero busywork.
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-muted text-lg md:text-xl max-w-[60ch] mx-auto mb-10 leading-relaxed"
                >
                    From keyword research to published blog post, fully automated.
                    Whether you&apos;re publishing nothing or stuck at a handful per
                    month, this is how you break through.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col items-center gap-3"
                >
                    <a href="#early-access">
                        <GlowButton className="text-lg px-10 py-4 animate-glow-pulse">
                            Get Early Access
                        </GlowButton>
                    </a>
                    <p className="text-muted-dark text-sm">
                        Free pilot for early customers. Limited spots.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
