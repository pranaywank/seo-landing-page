"use client";

import AnimatedSection from "./ui/AnimatedSection";
import SpotlightCard from "./ui/SpotlightCard";

const features = [
    {
        title: "Keyword gap analysis",
        desc: "Finds opportunities your competitors are winning that you\u2019re missing.",
        icon: (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
        ),
    },
    {
        title: "SEO-optimized long-form content",
        desc: "Proper heading structure, keyword placement, meta titles, meta descriptions, readability.",
        icon: (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
        ),
    },
    {
        title: "Auto-generated images",
        desc: "Contextual images generated and placed. No stock photo hunting.",
        icon: (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <rect width="18" height="18" x="3" y="3" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" />
            </svg>
        ),
    },
    {
        title: "Smart internal linking",
        desc: "Automatically links to relevant pages on your site to build SEO authority.",
        icon: (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7.1-7.1l-1.7 1.7" /><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7.1 7.1l1.7-1.7" />
            </svg>
        ),
    },
    {
        title: "Human review workflow",
        desc: "You see every post before it goes live. Approve, edit, or reject.",
        icon: (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 6 9 17l-5-5" />
            </svg>
        ),
    },
    {
        title: "CMS publishing",
        desc: "Pushes directly to your CMS on a staggered schedule.",
        icon: (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" />
            </svg>
        ),
    },
];

export default function Features() {
    return (
        <section className="py-section max-sm:py-section-mobile">
            <div className="max-w-content mx-auto px-6">
                <AnimatedSection className="text-center mb-16 max-w-[900px] mx-auto">
                    <h2 className="text-[clamp(28px,4vw,44px)] font-bold tracking-tight mb-4">
                        Everything between keyword research and a live blog post.
                    </h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((f, i) => (
                        <AnimatedSection key={i} delay={i * 0.08}>
                            <SpotlightCard className="h-full">
                                <div className="text-accent mb-4">{f.icon}</div>
                                <h3 className="text-base font-semibold text-white mb-2">
                                    {f.title}
                                </h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    {f.desc}
                                </p>
                            </SpotlightCard>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
