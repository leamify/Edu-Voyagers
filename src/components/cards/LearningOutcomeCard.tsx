import React from "react";
import {
  Compass,
  Users,
  TreePine,
  MessageSquare,
  Lightbulb,
  HeartHandshake,
  IconProps,
} from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

interface LearningOutcomeCardProps {
  title: string;
  description: string;
  iconName: string;
  className?: string;
}

const iconMap: Record<string, React.FC<IconProps>> = {
  Independence: Compass,
  Collaboration: Users,
  "Environmental Awareness": TreePine,
  Communication: MessageSquare,
  "Problem Solving": Lightbulb,
  Empathy: HeartHandshake,
};

export function LearningOutcomeCard({
  title,
  description,
  iconName,
  className,
}: LearningOutcomeCardProps) {
  const IconComponent = iconMap[iconName] || Lightbulb;

  return (
    <div
      className={cn(
        "p-6 rounded-xs bg-canvas-card border border-sand-border flex flex-col justify-between space-y-4 transition-all duration-300 hover:border-forest/40 hover:shadow-xs",
        className
      )}
    >
      <div className="w-10 h-10 rounded-xs bg-forest-subtle flex items-center justify-center text-forest">
        <IconComponent className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-forest-dark mb-1.5">{title}</h3>
        <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
