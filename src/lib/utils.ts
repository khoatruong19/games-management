import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";
import { Game, GameStatus } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatReleaseDate = (date: Date) => format(date, "PP");

export const checkMatchStatus = (game: Game, status?: GameStatus) =>
  !status ? true : status && game.status === status;

export const checkMatchSearch = (game: Game, search?: string) =>
  !search
    ? true
    : search && game.name.toLowerCase().includes(search.trim().toLowerCase());

export const exportArrayToCsv = (
  headers: string[],
  data: Array<any>,
  filename: string
) => {
  const csvContent =
    "data:text/csv;charset=utf-8," +
    [headers, ...data.map((row) => Object.values(row))]
      .map((row) => row.join(","))
      .join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", filename + ".csv");
  document.body.appendChild(link);
  link.click();
};
