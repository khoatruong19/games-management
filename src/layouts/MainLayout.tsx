import { Layout, Sidebar } from "@/components/common";
import { PropsWithChildren } from "react";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <Layout container={false} className="bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 max-h-screen overflow-y-auto">
        {children}
      </div>
    </Layout>
  );
};
