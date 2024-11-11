"use client";
import { useQueryState } from "nuqs";

import { useProjectId } from "@/features/projects/hooks/use-project-id";
import { useGetProject } from "@/features/projects/api/use-get-project";
import { ProjectAvatar } from "@/features/projects/components/project-avatar";
import { TaskViewSwitcher } from "@/features/tasks/components/task-view-switcher";
import { useGetProjectAnalytics } from "@/features/projects/api/use-get-project-analytics";
import { ProjectDetailOverview } from "@/features/projects/components/project-detail-overview";

import { PageLoader } from "@/components/page-loader";
import { PageError } from "@/components/page-error";

import { AnalyticsOverview } from "@/components/design/analytics-overview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ProjectIdClient = () => {
  const projectId = useProjectId();

  const { data: project, isLoading: isLoadingProject } = useGetProject({
    projectId,
  });

  const [view, setView] = useQueryState("project-view", {
    defaultValue: "project",
  });

  const { data: analytics, isLoading: isLoadingAnalytics } =
    useGetProjectAnalytics({ projectId });

  const isLoading = isLoadingProject || isLoadingAnalytics;

  if (isLoading) return <PageLoader />;
  if (!project) return <PageError message="Project not found" />;

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <ProjectAvatar
            name={project.name}
            image={project.imageUrl}
            className="size-8"
          />
          <p className="text-lg font-semibold">{project.name}</p>
        </div>
      </div>
      <Tabs
        className="flex-1 w-full"
        defaultValue={view}
        onValueChange={setView}
      >
        <div className="flex flex-col overflow-auto gap-4 h-full">
          <div className="flex flex-col gap-y-2 lg:flex-row justify-between items-center bg-white p-2 rounded-lg border">
            <TabsList className="w-full lg:w-auto">
              <TabsTrigger
                className="h-8 w-full lg:w-auto bg-muted"
                value="project"
              >
                Project Overview
              </TabsTrigger>
              <TabsTrigger
                className="h-8 w-full lg:w-auto bg-muted"
                value="tasks"
              >
                Task Details
              </TabsTrigger>
            </TabsList>
          </div>
          <>
            <TabsContent value="project" className="mt-0">
              {analytics ? <AnalyticsOverview data={analytics} /> : null}
              <ProjectDetailOverview project={project ?? []} />
            </TabsContent>
            <TabsContent value="tasks" className="mt-0">
              <TaskViewSwitcher hideProjectFilter />
            </TabsContent>
          </>
        </div>
      </Tabs>
    </div>
  );
};
