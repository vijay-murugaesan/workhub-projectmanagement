import { redirect } from "next/navigation";
import { getCurrent } from "@/features/auth/queries";
// import { TaskIdClient } from "./client";
import { TaskIdClientPage } from "./task-client";

const TaskIdPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return <TaskIdClientPage />;
};

export default TaskIdPage;
