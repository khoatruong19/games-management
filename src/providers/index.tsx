import { Fragment, PropsWithChildren } from "react";
import { ThemeProvider } from "./ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";

const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <Fragment>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <TooltipProvider>{children}</TooltipProvider>
      </ThemeProvider>
    </Fragment>
  );
};

export default AppProvider;
