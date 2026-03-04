"use client";

import { ReactNode } from "react";

interface GlowButtonProps {
    children: ReactNode;
    variant?: "primary" | "outline";
    className?: string;
    type?: "button" | "submit";
    disabled?: boolean;
    onClick?: () => void;
}

export default function GlowButton({
    children,
    variant = "primary",
    className = "",
    type = "button",
    disabled = false,
    onClick,
}: GlowButtonProps) {
    const base =
        "glow-btn inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-bold transition-all";
    const variants = {
        primary: "",
        outline: "glow-btn-outline",
    };

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`${base} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""
                } ${className}`}
        >
            {children}
        </button>
    );
}
