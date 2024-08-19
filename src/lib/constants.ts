import {
  Home,
  LineChart,
  Package,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";

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

export const GAME_STATUS = ["developing", "upcoming", "released"];
export const TABS = ["all", ...GAME_STATUS];
