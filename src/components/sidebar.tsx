import Image from "next/image";
import Link from "next/link";
import { Projects } from "./projects";
import { DottedSeparator } from "./dotted-separator";
import { Navigation } from "./navigation";
import { WorkspaceSwitcher } from "./workspace-switcher";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-white p-4 w-full">
      <Link href="/" className="flex flex-row gap-2 items-center">
        <Image width={40} height={40} alt="Logo" src="/icon.svg" />
        <p className="text-2xl font-semibold">WorkHub</p>
      </Link>
      <DottedSeparator className="my-4" />
      <WorkspaceSwitcher />
      <DottedSeparator className="my-4" />
      <Navigation />
      <DottedSeparator className="my-4" />
      <Projects />
    </aside>
  );
};
