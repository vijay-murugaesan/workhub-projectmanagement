"use client";

import { useGetTask } from "@/features/tasks/api/use-get-task";
import { useTaskId } from "@/features/tasks/hooks/use-task-id";
import { TaskBreadcrumbs } from "@/features/tasks/components/task-bredcrumbs";

import { PageError } from "@/components/page-error";
import { PageLoader } from "@/components/page-loader";
import { TaskDetailOverview } from "@/features/tasks/components/task-detail-overview";

export const TaskIdClientPage = () => {
  const taskId = useTaskId();
  const { data, isLoading } = useGetTask({ taskId });

  if (isLoading) return <PageLoader />;

  if (!data) return <PageError message="Task Not Found" />;

  return (
    <div className="flex flex-col">
      <TaskBreadcrumbs project={data.project} task={data} />
      <TaskDetailOverview task={data} />
    </div>
  );
};
