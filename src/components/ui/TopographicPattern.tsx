import React from "react";
import { cn } from "@/lib/utils";

interface TopographicPatternProps {
  className?: string;
  opacity?: number;
  variant?: "light" | "dark";
}

export function TopographicPattern({
  className,
  opacity = 0.08,
  variant = "light",
}: TopographicPatternProps) {
  const strokeColor = variant === "light" ? "#123C32" : "#E8DFD0";

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden select-none",
        className
      )}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <path
          d="M0,200 C300,150 400,350 700,220 C900,120 950,280 1000,200"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.2"
        />
        <path
          d="M0,320 C250,280 450,420 750,300 C920,220 980,380 1000,320"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.2"
        />
        <path
          d="M0,450 C320,400 380,550 680,480 C880,420 920,520 1000,450"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.2"
        />
        <path
          d="M0,600 C200,520 500,680 800,580 C950,520 980,640 1000,600"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.2"
        />
        <path
          d="M0,750 C350,680 450,820 720,740 C900,680 960,820 1000,750"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.2"
        />
        <path
          d="M0,900 C280,820 480,950 780,880 C920,820 980,920 1000,900"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}
