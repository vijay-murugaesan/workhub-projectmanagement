import { FolderOpenDot } from "lucide-react";

interface EmptyDataProps {
  message: string;
}

export const EmptyData = ({ message = "No Results Found" }: EmptyDataProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-[75vh]">
      <FolderOpenDot className="size-6 text-muted-foreground mb-2" />
      <p className="text-sm font-medium text-muted-foreground text-grey-600">
        {message}
      </p>
    </div>
  );
};
