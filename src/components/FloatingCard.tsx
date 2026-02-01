import { ReactNode } from "react";
import { Card } from "./ui/card";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  delay?: string;
}

export function FloatingCard({ children, className = "", delay = "0s" }: FloatingCardProps) {
  return (
    <Card 
      className={`p-4 bg-gradient-card backdrop-blur-sm border-0 shadow-card animate-float ${className}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </Card>
  );
}