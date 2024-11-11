"use client";

import { useWorkSpaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { EditWorkspaceForm } from "@/features/workspaces/components/edit-workspace-form";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { PageLoader } from "@/components/page-loader";
import { PageError } from "@/components/page-error";

export const WorkspaceIdSettingsClient = () => {
  const workspaceId = useWorkSpaceId();
  const { data: initialValues, isLoading } = useGetWorkspace({ workspaceId });

  if (isLoading) return <PageLoader />;
  if (!initialValues) return <PageError message="Workspace not found" />;

  return (
    <div className="w-full lg:max-w-xl">
      <EditWorkspaceForm initialValues={initialValues} />
    </div>
  );
};
