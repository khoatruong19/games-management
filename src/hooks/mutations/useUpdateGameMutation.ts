import { useMutation } from "@tanstack/react-query";
import GamesService from "@/services/games";

export const UPDATE_GAME_KEY = ["UPDATE_GAME_KEY"];

export function useUpdateGame() {
  return useMutation({
    mutationKey: UPDATE_GAME_KEY,
    mutationFn: GamesService.updateGame,
  });
}
