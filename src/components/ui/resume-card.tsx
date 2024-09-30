import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard: React.FC<ResumeCardProps> = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  const descriptionPoints = description ? description.split('\n').filter(point => point.trim() !== '') : [];

  return (
    <div className="w-full" onClick={handleClick}>
      <Card className="flex flex-col sm:flex-row bg-white/10 backdrop-filter backdrop-blur-lg border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 overflow-hidden text-white">
        <div className="flex-none p-4 sm:p-4">
          <Avatar className="border w-12 h-12 mx-auto sm:m-0 bg-white/20">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow p-4 flex flex-col group">
          <CardHeader className="p-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-2 sm:gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-sm">
                {title}
                <ChevronRightIcon
                  className={cn(
                    "w-4 h-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 ml-2",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-xs tabular-nums text-white/70">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs mt-1 text-white/80">{subtitle}</div>}
            {badges && (
              <div className="flex flex-wrap gap-1 mt-2">
                {badges.map((badge, index) => (
                  <Badge variant="secondary" className="text-xs bg-white/20 text-white" key={index}>
                    {badge}
                  </Badge>
                ))}
              </div>
            )}
          </CardHeader>
          <AnimatePresence initial={false}>
            {isExpanded && description && (
              <motion.div
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 }
                }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="mt-2 text-xs overflow-hidden"
              >
                <ul className="list-disc pl-5 space-y-1">
                  {descriptionPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </div>
  );
};
