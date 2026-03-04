"use client";

import AnimatedSection from "./ui/AnimatedSection";
import GlowButton from "./ui/GlowButton";

export default function Proof() {
    return (
        <section className="py-section max-sm:py-section-mobile proof-section-bg">
            <div className="max-w-text mx-auto px-6 text-center">
                <AnimatedSection>
                    <h2 className="text-[clamp(28px,4vw,44px)] font-bold tracking-tight mb-6">
                        We&apos;re not asking you to trust a demo. We&apos;re running
                        this ourselves.
                    </h2>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                    <p className="text-muted text-lg leading-[1.7] mb-10">
                        Before opening this to anyone, we deployed the full pipeline on
                        wednesday.is. Real keywords. Real content. Real traffic data.
                        When you join the pilot, we&apos;ll share exactly what happened:
                        blogs published, traffic impact, cost per post, and editorial
                        quality scores.
                    </p>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <a href="#early-access">
                        <GlowButton variant="outline">
                            Get early access to see the results
                        </GlowButton>
                    </a>
                </AnimatedSection>
            </div>
        </section>
    );
}
