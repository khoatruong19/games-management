import { useQuery } from "@tanstack/react-query";
import GamesService from "@/services/games";
import { GameStatus } from "@/lib/types";

export type UseGetGamesArgs = {
  page: number;
  status?: GameStatus;
  search?: string;
  allowFetch?: boolean;
};

export const getGamesKeys = (
  page: number,
  status?: GameStatus,
  search?: string
) => ["getGamesKeys", page, status, search];

export function useGetGames({
  page,
  status,
  search,
  allowFetch,
}: UseGetGamesArgs) {
  return useQuery({
    queryKey: getGamesKeys(page, status, search),
    queryFn: () => GamesService.getGames({ page, status, search }),
    enabled: allowFetch,
  });
}
