import { INITIAL_GAMES } from "@/lib/constants";
import { v4 as uuidv4 } from "uuid";
import { Game, GameStatus } from "@/lib/types";
import { checkMatchSearch, checkMatchStatus } from "@/lib/utils";

const GAMES_PER_PAGE = 8;

let games = [...INITIAL_GAMES];

const getAllGames = () => games;

type GetGamesResponse = {
  data: Game[];
  page: number;
  total: number;
  totalPages: number;
  from: number;
  to: number;
};

type GetGamesArgs = {
  page: number;
  status?: GameStatus;
  search?: string;
};
const getGames = ({
  page,
  status,
  search,
}: GetGamesArgs): Promise<GetGamesResponse> => {
  return new Promise((resolve) => {
    let formatedPage = page;
    let start = (page - 1) * GAMES_PER_PAGE;

    const filteredGames: Game[] = [];
    games.forEach((game) => {
      const isStatusMatched = checkMatchStatus(game.status, status);
      const isSearchMatched = checkMatchSearch(game.name, search);
      if (isStatusMatched && isSearchMatched) filteredGames.push(game);
    });

    const totalFilteredGames = filteredGames.length;
    if (start > totalFilteredGames) {
      start = 0;
      formatedPage = 1;
    }

    const end = formatedPage * GAMES_PER_PAGE;
    const gamesData = filteredGames.slice(start, end);
    const totalGames = gamesData.length;

    setTimeout(() => {
      resolve({
        data: gamesData,
        page: formatedPage,
        total: totalFilteredGames,
        totalPages: Math.ceil(totalFilteredGames / GAMES_PER_PAGE),
        from: totalGames > 0 ? start + 1 : 0,
        to: start + totalGames,
      });
    }, 500);
  });
};

const addGame = (data: Omit<Game, "id">) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const existingGame = games.find((game) => game.name === data.name);
      if (existingGame) reject("Game's already exist!");

      const newGame = {
        id: uuidv4(),
        ...data,
      } as Game;
      games = [...games, newGame];
      resolve(newGame);
    }, 500);
  });
};

const updateGame = (data: Game) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const existingGameIndex = games.findIndex((game) => game.id === data.id);
      if (existingGameIndex < 0) reject("Game's not exist!");

      const existingGame = games.find(
        (game) => game.name === data.name && game.id !== data.id
      );
      if (existingGame) reject("Game's already exist!");

      games[existingGameIndex] = data;
      resolve(data);
    }, 500);
  });
};

const deleteGameById = (id: string) => {
  games = games.filter((game) => game.id !== id);
  return new Promise((resolve) => resolve(id));
};

export default { getAllGames, getGames, addGame, updateGame, deleteGameById };
