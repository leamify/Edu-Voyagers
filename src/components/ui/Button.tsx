import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "gold" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      icon,
      iconPosition = "right",
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group";

    const variantStyles = {
      primary:
        "bg-forest text-white hover:bg-forest-light active:bg-forest-dark border border-forest shadow-xs",
      secondary:
        "bg-sand-light text-forest hover:bg-sand border border-sand-border active:bg-sand-dark",
      outline:
        "bg-transparent text-forest border border-forest/30 hover:border-forest hover:bg-forest/5 active:bg-forest/10",
      gold:
        "bg-gold text-forest-dark font-semibold hover:bg-gold-hover active:bg-[#B88A2D] shadow-xs",
      dark:
        "bg-forest-dark text-sand-light hover:bg-forest border border-white/10",
      ghost:
        "bg-transparent text-charcoal hover:bg-charcoal/5 hover:text-forest",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5 rounded-sm tracking-wide",
      md: "text-sm px-5 py-2.5 gap-2 rounded-sm tracking-wide",
      lg: "text-base px-6 py-3.5 gap-2.5 rounded-sm tracking-wide font-medium",
    };

    const combinedClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {icon && iconPosition === "left" && (
          <span className="transition-transform duration-200 group-hover:-translate-x-0.5">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={combinedClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClasses} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
