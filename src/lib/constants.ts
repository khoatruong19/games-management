import {
  Home,
  LineChart,
  Package,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";
import { Game } from "./types";

export const HOME_ROUTE = "/";

export const NAV_ITEMS = [
  {
    label: "Dashboard",
    path: "/",
    icon: Home,
  },
  {
    label: "Orders",
    path: "#",
    icon: ShoppingCart,
  },
  {
    label: "Products",
    path: "#",
    icon: Package,
  },
  {
    label: "Customers",
    path: "#",
    icon: Users2,
  },
  {
    label: "Analytics",
    path: "#",
    icon: LineChart,
  },
];

export const SETTING_NAV_ITEM = {
  label: "Setting",
  path: "#",
  icon: Settings,
};

export const GAME_STATUS = [
  "developing",
  "upcoming",
  "released",
  "cancelled",
] as const;

export const TABS = ["all", ...GAME_STATUS];

export const INITIAL_GAMES: Game[] = [
  {
    id: "game1",
    name: "Cyberpunk 2077",
    imageUrl:
      "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7",
    status: "released",
    releaseDate: new Date("2020-12-10"),
  },
  {
    id: "game2",
    name: "The Witcher 3: Wild Hunt",
    imageUrl:
      "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png",
    status: "released",
    releaseDate: new Date("2015-05-19"),
  },
  {
    id: "game3",
    name: "Red Dead Redemption 2",
    imageUrl:
      "https://store-images.s-microsoft.com/image/apps.58752.13942869738016799.078aba97-2f28-440f-97b6-b852e1af307a.95fdf1a1-efd6-4938-8100-8abae91695d6?q=90&w=480&h=270",
    status: "released",
    releaseDate: new Date("2018-10-26"),
  },
  {
    id: "game4",
    name: "Grand Theft Auto V",
    imageUrl:
      "https://assetsio.gnwcdn.com/eurogamer-zjp1vx.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
    status: "released",
    releaseDate: new Date("2013-09-17"),
  },
  {
    id: "game5",
    name: "The Legend of Zelda: Breath of the Wild",
    imageUrl:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58",
    status: "developing",
    releaseDate: new Date("2017-03-03"),
  },
  {
    id: "game6",
    name: "Elden Ring",
    imageUrl:
      "https://image.api.playstation.com/vulcan/ap/rnd/202108/0410/np2Eb60bDep9fDWtqNNSzqZI.png",
    status: "released",
    releaseDate: new Date("2022-02-25"),
  },
  {
    id: "game7",
    name: "God of War (2018)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
    status: "developing",
    releaseDate: new Date("2018-04-20"),
  },
  {
    id: "game8",
    name: "Horizon Forbidden West",
    imageUrl:
      "https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/HO8vkO9pfXhwbHi5WHECQJdN.png",
    status: "released",
    releaseDate: new Date("2022-02-18"),
  },
  {
    id: "game9",
    name: "Starfield",
    imageUrl:
      "https://assets.xboxservices.com/assets/28/98/2898b802-4629-4b5d-b825-e5aee13aab8c.jpg?n=Starfield_GLP-Page-Hero-0_1083x1222_05.jpg",
    status: "cancelled",
    releaseDate: new Date("2023-09-06"),
  },
  {
    id: "game10",
    name: "Diablo IV",
    imageUrl:
      "https://honggame.store/wp-content/uploads/2024/04/geforce-diablo-iv-og-1200x630-1.jpg",
    status: "upcoming",
    releaseDate: new Date("2023-06-06"),
  },
  {
    id: "game11",
    name: "The Last of Us Part II",
    imageUrl:
      "https://images2.thanhnien.vn/528068263637045248/2023/11/20/ps5-17004552410171500851148.jpg",
    status: "released",
    releaseDate: new Date("2020-06-19"),
  },
  {
    id: "game12",
    name: "Resident Evil 4 (2023)",
    imageUrl: "https://i.ytimg.com/vi/7BphS4SaOQo/maxresdefault.jpg",
    status: "cancelled",
    releaseDate: new Date("2023-03-24"),
  },
  {
    id: "game13",
    name: "Hollow Knight: Silksong",
    imageUrl:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030300/capsule_616x353.jpg?t=1695443850",
    status: "upcoming",
    releaseDate: new Date("2019-02-14"),
  },
  {
    id: "game14",
    name: "Metroid Prime Remastered",
    imageUrl:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000063709/32b85837beea0eee31220a59e247219662de4011f7a8c18fce61cf99a4933eb7",
    status: "released",
    releaseDate: new Date("2023-02-22"),
  },
  {
    id: "game15",
    name: "Hades",
    imageUrl:
      "https://cdn1.epicgames.com/min/offer/2560x1440-2560x1440-5e710b93049cbd2125cf0261dcfbf943.jpg",
    status: "released",
    releaseDate: new Date("2020-09-17"),
  },
];
