import { Layout } from "@/components/common";
import { PropsWithChildren } from "react";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return <Layout container={false}>{children}</Layout>;
};
