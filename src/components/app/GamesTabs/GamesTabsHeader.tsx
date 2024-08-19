import { Typography } from "@/components/common";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TABS } from "@/lib/constants";
import { File, ListFilter, PlusCircle } from "lucide-react";
import { GameForm } from "../GameForm";
import { Tab } from "@/lib/types";

type GamesTabsHeaderProps = {
  selectedTab: Tab;
  onSelectTab: (value: string) => void;
};

export const GamesTabsHeader = ({
  selectedTab,
  onSelectTab,
}: GamesTabsHeaderProps) => {
  return (
    <div className="flex items-center">
      <TabsList className="hidden md:inline-flex">
        {TABS.map((status) => (
          <TabsTrigger key={status} value={status} className="capitalize">
            {status}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="ml-auto flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <ListFilter className="h-3.5 w-3.5" />
              <Typography>Filter</Typography>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {TABS.map((status) => (
              <DropdownMenuCheckboxItem
                key={status}
                checked={status === selectedTab}
                className="capitalize"
                onClick={() => onSelectTab(status)}
              >
                {status}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button size="sm" variant="outline" className="h-8 gap-1">
          <File className="h-3.5 w-3.5" />
          <Typography color="inherit">Export</Typography>
        </Button>
        <GameForm
          type="add"
          triggerEle={
            <Button size="sm" className="h-8 gap-1">
              <PlusCircle className="h-3.5 w-3.5" />
              <Typography color="inherit">Add Game</Typography>
            </Button>
          }
        />
      </div>
    </div>
  );
};
