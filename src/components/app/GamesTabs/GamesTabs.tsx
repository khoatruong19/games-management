import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { GamesTable } from "./GamesTable";
import { GamesTabsHeader } from "./GamesTabsHeader";
import { Tab } from "@/lib/types";
import { Typography } from "@/components/common";

export const GamesTabs = () => {
  const [tab, setTab] = useState<Tab>("all");

  const onTabChange = (value: string) => {
    setTab(value as Tab);
  };

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <Tabs value={tab} onValueChange={onTabChange}>
        <GamesTabsHeader selectedTab={tab} onSelectTab={onTabChange} />
        <TabsContent value={tab}>
          <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader>
              <CardTitle>Games</CardTitle>
              <CardDescription>
                Manage your games and view their status.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <GamesTable />
            </CardContent>
            <CardFooter>
              <Typography level="p7" color="mutedForeground">
                Showing <strong>1-10</strong> of <strong>32</strong> products
              </Typography>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
};
