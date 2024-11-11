import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";
import { MembersCardList } from "@/features/workspaces/components/members-card-list";

const WorkspaceIdMembers = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");
  
  return (
    <div className="w-full">
      <MembersCardList />
    </div>
  );
};

export default WorkspaceIdMembers;
