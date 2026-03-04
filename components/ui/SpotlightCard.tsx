"use client";

import { useRef, MouseEvent, ReactNode } from "react";

interface SpotlightCardProps {
    children: ReactNode;
    className?: string;
}

export default function SpotlightCard({
    children,
    className = "",
}: SpotlightCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty("--spotlight-x", `${x}px`);
        cardRef.current.style.setProperty("--spotlight-y", `${y}px`);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className={`spotlight-card p-6 ${className}`}
        >
            {children}
        </div>
    );
}
