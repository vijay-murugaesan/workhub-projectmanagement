import { AlertTriangle } from "lucide-react";

interface PageErrorProps {
  message: string;
}

export const PageError = ({
  message = "something went wrong",
}: PageErrorProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <AlertTriangle className="size-6 text-muted-foreground mb-2" />
      <p className="text-sm font-medium text-muted-foreground text-red-600">
        {message}
      </p>
    </div>
  );
};
