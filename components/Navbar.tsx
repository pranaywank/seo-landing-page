"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = [
        { label: "How It Works", href: "#how-it-works" },
        { label: "Why Not DIY", href: "#why-not-diy" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-dark/90 nav-blur border-b border-white/5"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-content mx-auto px-6 h-[72px] flex items-center justify-between">
                {/* Logo */}
                <a
                    href="https://wednesday.is"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                >
                    <div className="w-7 h-7 bg-white text-dark rounded-md flex items-center justify-center font-extrabold text-sm">
                        W
                    </div>
                    <span className="font-semibold text-base tracking-tight">
                        Wednesday
                    </span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-muted hover:text-white transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#early-access"
                        className="glow-btn text-sm px-5 py-2.5 rounded-lg font-semibold"
                    >
                        Get Early Access
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <motion.span
                        animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                        className="block w-5 h-0.5 bg-white origin-center"
                    />
                    <motion.span
                        animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="block w-5 h-0.5 bg-white"
                    />
                    <motion.span
                        animate={
                            mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                        }
                        className="block w-5 h-0.5 bg-white origin-center"
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-dark/95 nav-blur border-b border-white/5 overflow-hidden"
                    >
                        <div className="px-6 py-6 flex flex-col gap-4">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-base text-muted hover:text-white transition-colors py-2"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#early-access"
                                onClick={() => setMobileOpen(false)}
                                className="glow-btn text-sm px-5 py-3 rounded-lg font-semibold text-center mt-2"
                            >
                                Get Early Access
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
