import { useMutation } from "@tanstack/react-query";
import GamesService from "@/services/games";

export const DELETE_GAME_KEY = ["DELETE_GAME_KEY"];

export function useDeleteGame() {
  return useMutation({
    mutationKey: DELETE_GAME_KEY,
    mutationFn: GamesService.deleteGameById,
  });
}
