import { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  path: string;
  icon: LucideIcon;
};

export type GameStatus = "all" | "developing" | "upcoming" | "released";

export type Tab = "all" & GameStatus;

export type Game = {
  id: string;
  name: string;
  imageUrl: string;
  status: GameStatus;
  releaseDate: Date;
};
