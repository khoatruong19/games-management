import createContext from "@/lib/context";
import { Game } from "@/lib/types";
import { PropsWithChildren, useState } from "react";

type GamesProviderValues = {
  games: Game[];
};

const initialValues: GamesProviderValues = {
  games: [],
};

const [Provider, useGames] = createContext<GamesProviderValues>({
  initialValues,
  name: "GamesProvider",
  errorMessage: "useGames must be used within a GamesProvider",
});

export { useGames };

export function GamesProvider({ children }: PropsWithChildren) {
  const [games] = useState([]);

  const value = {
    games,
  };

  return <Provider value={value}>{children}</Provider>;
}
