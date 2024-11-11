import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";

interface AnalyticsCard {
  title: string;
  value: number;
  variant: "up" | "down";
  increaseValue: number;
}

export const AnalyticsCard = ({
  title,
  value,
  variant,
  increaseValue,
}: AnalyticsCard) => {
  const iconColor = variant === "up" ? "text-emerald-500" : "text-red-500";
  const increaseValueColor =
    variant === "up" ? "text-emerald-500" : "text-red-500";

  const Icon = variant === "up" ? FaCaretUp : FaCaretDown;
  return (
    <Card className="shadow-none border-none w-full">
      <CardHeader className="flex items-center gap-x-2.5">
        <CardDescription className="flex items-center gap-x-2 font-medium overflow-hidden">
          <span className="text-base truncate">{title}</span>
        </CardDescription>
        <div className="flex items-center gap-x-1">
          <Icon className={cn(iconColor, "size-4F")} />
          <span
            className={cn(increaseValueColor, "font-medium truncate text-base")}
          >
            {increaseValue}
          </span>
        </div>
        <CardTitle>{value}</CardTitle>
      </CardHeader>
    </Card>
  );
};
