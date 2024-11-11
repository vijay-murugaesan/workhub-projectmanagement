import { UserButton } from "@/features/auth/components/user-button";
import Image from "next/image";
import Link from "next/link";

interface StandAloneLayoutProps {
  children: React.ReactNode;
}

const StandAloneLayout = ({ children }: StandAloneLayoutProps) => {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="p-4 mx-auto max-w-screen-2xl">
        <nav className="flex justify-between items-center h-[73px]">
          <Link href="/" className="flex flex-row gap-2 items-center">
            <Image width={40} height={40} alt="Logo" src="/icon.svg" />
            <p className="text-2xl font-semibold">WorkHub</p>
          </Link>{" "}
          <UserButton />
        </nav>
        <div className="flex py-4 flex-col justify-center items-center">
          {children}
        </div>
      </div>
    </main>
  );
};

export default StandAloneLayout;
