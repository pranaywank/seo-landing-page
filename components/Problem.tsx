"use client";

import AnimatedSection from "./ui/AnimatedSection";
import SpotlightCard from "./ui/SpotlightCard";

const problems = [
    {
        title: "You know SEO matters, but you can\u2019t start.",
        body: "No dedicated SEO person. No budget for agencies quoting \u20B960k\u20131L/month. You\u2019ve been meaning to start a blog for six months.",
    },
    {
        title: "You\u2019re publishing, but you can\u2019t scale.",
        body: "You\u2019re doing 4 blogs a month. You need 15. Your writer is at capacity, your review cycle is a bottleneck, and every blog takes a week from idea to live.",
    },
    {
        title: "You tried AI tools, and the output was unusable.",
        body: "Generic content. Wrong product assumptions. Surface-level writing that took an hour to fix per article. You stopped using it after the second post.",
    },
];

export default function Problem() {
    return (
        <section className="py-section max-sm:py-section-mobile">
            <div className="max-w-content mx-auto px-6">
                <AnimatedSection className="text-center mb-16 max-w-[900px] mx-auto">
                    <h2 className="text-[clamp(28px,4vw,44px)] font-bold tracking-tight mb-4">
                        SEO content is broken for small teams.
                    </h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {problems.map((p, i) => (
                        <AnimatedSection key={i} delay={i * 0.1}>
                            <SpotlightCard className="h-full">
                                <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                                    {p.title}
                                </h3>
                                <p className="text-muted text-[15px] leading-relaxed">
                                    {p.body}
                                </p>
                            </SpotlightCard>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
