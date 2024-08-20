import { PropsWithChildren } from "react";
import { ThemeProvider } from "./ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { GamesProvider } from "./GamesProvider";
import { TanstackProvider } from "./TanstackProvider";
import { Toaster } from "@/components/ui/sonner";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import { BrowserRouter } from "react-router-dom";

const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <TanstackProvider>
          <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <TooltipProvider>
              <GamesProvider>{children}</GamesProvider>
            </TooltipProvider>
            <Toaster />
          </ThemeProvider>
        </TanstackProvider>
      </QueryParamProvider>
    </BrowserRouter>
  );
};

export default AppProvider;
