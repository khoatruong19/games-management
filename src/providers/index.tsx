import { Fragment, PropsWithChildren } from "react";
import { ThemeProvider } from "./ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { GamesProvider } from "./GamesProvider";

const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <Fragment>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <TooltipProvider>
          <GamesProvider>{children}</GamesProvider>
        </TooltipProvider>
      </ThemeProvider>
    </Fragment>
  );
};

export default AppProvider;
