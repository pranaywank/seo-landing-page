"use client";

import AnimatedSection from "./ui/AnimatedSection";
import SpotlightCard from "./ui/SpotlightCard";

const steps = [
    {
        num: "01",
        title: "Feed it your brand context",
        desc: "Your services, your ICP, your tone. The system learns your positioning so every post sounds like it came from your team, not a random AI.",
        icon: (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5Z" />
                <path d="M17 10v1a5 5 0 0 1-10 0v-1" />
                <line x1="12" x2="12" y1="19" y2="22" />
                <line x1="8" x2="16" y1="22" y2="22" />
            </svg>
        ),
    },
    {
        num: "02",
        title: "Keyword gap analysis",
        desc: "Real search data identifies where your competitors rank and you don\u2019t. No manual research. No guessing.",
        icon: (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
            </svg>
        ),
    },
    {
        num: "03",
        title: "Content generation with depth",
        desc: "Full blog posts with proper structure, meta tags, images, and internal links. Built on research, not surface-level summaries.",
        icon: (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
        ),
    },
    {
        num: "04",
        title: "You review. Then it publishes.",
        desc: "Every post hits your inbox before it goes live. You approve, edit, or reject. Nothing publishes without your sign-off.",
        highlight: true,
        icon: (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 6 9 17l-5-5" />
            </svg>
        ),
    },
    {
        num: "05",
        title: "Auto-publish to your CMS",
        desc: "Staggered publishing on a natural schedule. Currently supports Webflow, with more CMS integrations coming.",
        icon: (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" x2="12" y1="3" y2="15" />
            </svg>
        ),
    },
];

export default function Pipeline() {
    return (
        <section
            id="how-it-works"
            className="py-section max-sm:py-section-mobile"
        >
            <div className="max-w-content mx-auto px-6">
                <AnimatedSection className="text-center mb-20 max-w-[900px] mx-auto">
                    <h2 className="text-[clamp(28px,4vw,44px)] font-bold tracking-tight mb-4">
                        From brand context to published post. Automatically.
                    </h2>
                    <p className="text-muted text-lg">
                        Five steps. Fully automated. You only step in when you want to.
                    </p>
                </AnimatedSection>

                {/* Steps Grid — 3 top, 2 bottom centered */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                    {steps.slice(0, 3).map((step, i) => (
                        <AnimatedSection key={step.num} delay={i * 0.1}>
                            <StepCard step={step} />
                        </AnimatedSection>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[808px] mx-auto">
                    {steps.slice(3).map((step, i) => (
                        <AnimatedSection key={step.num} delay={(i + 3) * 0.1}>
                            <StepCard step={step} />
                        </AnimatedSection>
                    ))}
                </div>

                {/* Connector line visualization */}
                <AnimatedSection delay={0.5} className="flex justify-center mt-10">
                    <div className="flex items-center gap-2 text-muted-dark text-sm">
                        <div className="w-8 h-px bg-accent/30" />
                        <span className="text-accent font-medium">End-to-end. Zero handoffs.</span>
                        <div className="w-8 h-px bg-accent/30" />
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}

function StepCard({ step }: { step: typeof steps[number] }) {
    return (
        <SpotlightCard
            className={`h-full relative ${step.highlight
                    ? "!border-accent/25 ring-1 ring-accent/10"
                    : ""
                }`}
        >
            {/* Step number + badge */}
            <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold tracking-widest text-accent/60 uppercase">
                    Step {step.num}
                </span>
                {step.highlight && (
                    <span className="text-[11px] font-bold bg-accent text-dark px-2.5 py-0.5 rounded-full">
                        Human in the loop
                    </span>
                )}
            </div>

            {/* Icon */}
            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4">
                {step.icon}
            </div>

            {/* Content */}
            <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                {step.title}
            </h3>
            <p className="text-muted text-[15px] leading-relaxed">
                {step.desc}
            </p>
        </SpotlightCard>
    );
}
