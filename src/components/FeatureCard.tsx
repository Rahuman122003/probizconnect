import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function FeatureCard({ title, description, icon: Icon, className = "" }: FeatureCardProps) {
  return (
    <Card className={`p-6 bg-gradient-card backdrop-blur-sm border-0 shadow-card hover:shadow-floating transition-all duration-300 hover:-translate-y-1 ${className}`}>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
}