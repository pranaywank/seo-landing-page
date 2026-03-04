"use client";

import AnimatedSection from "./ui/AnimatedSection";

const blocks = [
    {
        title: "Week 1 is fun. Month 3 is maintenance hell.",
        body: "Stitching together ChatGPT, a keyword API, n8n or Python scripts, and your CMS works as a prototype. Then the API changes, the output quality drifts, internal links break, and nobody wants to maintain it.",
    },
    {
        title: "Writing is 20% of the problem.",
        body: "The hard part isn\u2019t generating text. It\u2019s keyword research that actually identifies ranking opportunities, content structure that search engines reward, image generation, internal linking, meta optimization, and consistent publishing. A ChatGPT prompt doesn\u2019t do that.",
    },
    {
        title: "Your time has a cost.",
        body: "Every hour you spend debugging a workflow is an hour not spent on product, sales, or customers. The founders who validated this tool told us the same thing: they want to run a company, not maintain an SEO pipeline.",
    },
];

export default function WhyNotDIY() {
    return (
        <section
            id="why-not-diy"
            className="py-section max-sm:py-section-mobile"
        >
            <div className="max-w-content mx-auto px-6">
                <AnimatedSection className="text-center mb-16 max-w-[900px] mx-auto">
                    <h2 className="text-[clamp(28px,4vw,44px)] font-bold tracking-tight mb-4">
                        You could wire this up yourself. Here&apos;s why that breaks.
                    </h2>
                </AnimatedSection>

                <div className="max-w-[800px] mx-auto flex flex-col gap-10">
                    {blocks.map((block, i) => (
                        <AnimatedSection key={i} delay={i * 0.1}>
                            <div className="border-l-2 border-accent/40 pl-8 py-2">
                                <h3 className="text-[clamp(20px,3vw,26px)] font-semibold text-white mb-3 leading-snug">
                                    {block.title}
                                </h3>
                                <p className="text-muted text-base leading-[1.7]">
                                    {block.body}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
