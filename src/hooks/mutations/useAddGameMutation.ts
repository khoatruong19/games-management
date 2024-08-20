import { useMutation } from "@tanstack/react-query";
import GamesService from "@/services/games";

export const ADD_GAME_KEY = ["ADD_GAME_KEY"];

export function useAddGame() {
  return useMutation({
    mutationKey: ADD_GAME_KEY,
    mutationFn: GamesService.addGame,
  });
}
