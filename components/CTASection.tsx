"use client";

import { useState, FormEvent } from "react";
import AnimatedSection from "./ui/AnimatedSection";
import GlowButton from "./ui/GlowButton";

export default function CTASection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        website: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        // Client-side email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus("error");
            setErrorMessage("Please enter a valid email address.");
            return;
        }

        try {
            const res = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setStatus("success");
                setFormData({ name: "", email: "", website: "" });
            } else {
                setStatus("error");
                setErrorMessage(data.error || "Something went wrong.");
            }
        } catch {
            setStatus("error");
            setErrorMessage("Failed to submit. Please try again.");
        }
    };

    return (
        <section
            id="early-access"
            className="py-section max-sm:py-section-mobile"
        >
            <div className="max-w-form mx-auto px-6">
                <AnimatedSection className="text-center mb-10">
                    <h2 className="text-[clamp(28px,4vw,44px)] font-bold tracking-tight mb-4">
                        Join the pilot. Run it on your site.
                    </h2>
                    <p className="text-muted text-lg leading-relaxed">
                        We&apos;re onboarding a small group of founders and marketing
                        leads for hands-on early access. You get a free pilot. We get
                        your honest feedback.
                    </p>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                    <div className="form-glow p-8 md:p-10">
                        {status === "success" ? (
                            <div className="text-center py-6">
                                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                                    <svg
                                        width="28"
                                        height="28"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="#F5C518"
                                        strokeWidth="2"
                                    >
                                        <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold mb-3">
                                    You&apos;re on the list. We&apos;ll be in touch.
                                </h3>
                                <p className="text-muted text-sm">
                                    Keep an eye on your inbox for early access details.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                {status === "error" && (
                                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg px-4 py-3">
                                        {errorMessage}
                                    </div>
                                )}

                                <div>
                                    <label
                                        htmlFor="cta-name"
                                        className="block text-sm font-medium text-muted mb-2"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="cta-name"
                                        name="name"
                                        required
                                        placeholder="Your full name"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                        disabled={status === "loading"}
                                        className="form-input"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="cta-email"
                                        className="block text-sm font-medium text-muted mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="cta-email"
                                        name="email"
                                        required
                                        placeholder="you@company.com"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        disabled={status === "loading"}
                                        className="form-input"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="cta-website"
                                        className="block text-sm font-medium text-muted mb-2"
                                    >
                                        Website URL
                                    </label>
                                    <input
                                        type="url"
                                        id="cta-website"
                                        name="website"
                                        placeholder="https://yourwebsite.com"
                                        value={formData.website}
                                        onChange={(e) =>
                                            setFormData({ ...formData, website: e.target.value })
                                        }
                                        disabled={status === "loading"}
                                        className="form-input"
                                    />
                                </div>

                                <GlowButton
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full mt-2 py-4 text-base"
                                >
                                    {status === "loading" ? "Submitting..." : "Get Early Access"}
                                </GlowButton>

                                <p className="text-center text-muted-dark text-xs">
                                    No payment required. We&apos;ll reach out personally.
                                </p>
                            </form>
                        )}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
