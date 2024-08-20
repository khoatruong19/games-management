import { useGetGames } from "@/hooks/queries/useGetGamesQuery";
import createContext from "@/lib/context";
import { Game, GameStatus } from "@/lib/types";
import { PropsWithChildren, useCallback, useEffect } from "react";
import GamesService from "@/services/games";
import { exportArrayToCsv } from "@/lib/utils";
import { NumberParam, StringParam, useQueryParam } from "use-query-params";
import { GAME_STATUS } from "@/lib/constants";

type GamesProviderValues = {
  games: Game[];
  status?: GameStatus;
  search: string;
  isLoading: boolean;
  page: number;
  total: number;
  totalPages: number;
  from: number;
  to: number;
  refetch: () => void;
  navigateToNextPage: () => void;
  navigateToPreviousPage: () => void;
  navigateToPage: (pageNumber: number) => void;
  searchGame: (name: string) => void;
  filterGameByStatus: (status?: GameStatus) => void;
  exportToCSV: () => void;
};

const initialValues: GamesProviderValues = {
  games: [],
  search: "",
  isLoading: false,
  page: 1,
  total: 0,
  totalPages: 0,
  from: 0,
  to: 0,
  refetch: () => {},
  navigateToNextPage: () => {},
  navigateToPreviousPage: () => {},
  navigateToPage: () => {},
  searchGame: () => {},
  filterGameByStatus: () => {},
  exportToCSV: () => {},
};

const [Provider, useGames] = createContext<GamesProviderValues>({
  initialValues,
  name: "GamesProvider",
  strict: true,
  errorMessage: "useGames must be used within a GamesProvider",
});

export { useGames };

export function GamesProvider({ children }: PropsWithChildren) {
  const [pageParam, setPageParam] = useQueryParam("page", NumberParam);
  const [statusParam, setStatusParam] = useQueryParam("status", StringParam);
  const [searchParam, setSearchParam] = useQueryParam("search", StringParam);

  const page = pageParam && !isNaN(pageParam) ? pageParam : 1;
  const status = GAME_STATUS.includes(statusParam as GameStatus)
    ? (statusParam as GameStatus)
    : undefined;
  const search = searchParam ?? "";
  const { data, isLoading, refetch } = useGetGames({
    page: page,
    status,
    search,
    allowFetch: page > 0,
  });

  const games = data?.data ?? [];
  const totalPages = data?.totalPages ?? 0;
  const hasNext = totalPages > page;

  const navigateToNextPage = () => setPageParam(hasNext ? page + 1 : page);
  const navigateToPreviousPage = () => setPageParam(page > 1 ? page - 1 : page);
  const navigateToPage = (pageNumber: number) => setPageParam(pageNumber);

  const searchGame = (name: string) =>
    name !== searchParam && setSearchParam(name.trim());

  const filterGameByStatus = (status?: GameStatus) => setStatusParam(status);

  const exportToCSV = useCallback(() => {
    const headers = ["ID", "Name", "ImageUrl", "Status", "ReleaseDate"];
    const data = GamesService.getAllGames();
    const filename = "games";
    exportArrayToCsv(headers, data, filename);
  }, []);

  useEffect(() => {
    const fixedPage = data?.page;
    if (fixedPage && fixedPage !== pageParam) {
      setPageParam(fixedPage);
    }
  }, [data]);

  const value = {
    games,
    status,
    search,
    isLoading,
    page,
    total: data?.total ?? 0,
    totalPages,
    from: data?.from ?? 0,
    to: data?.to ?? 0,
    refetch,
    navigateToNextPage,
    navigateToPreviousPage,
    navigateToPage,
    searchGame,
    filterGameByStatus,
    exportToCSV,
  };

  return <Provider value={value}>{children}</Provider>;
}
