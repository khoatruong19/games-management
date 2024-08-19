import LogoImg from "@/assets/logo.png";
import { HOME_ROUTE, NAV_ITEMS, SETTING_NAV_ITEM } from "@/lib/constants";
import { NavItem } from "./NavItem";

export const Sidebar = () => (
  <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
    <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
      <a
        href="#"
        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary"
      >
        <img
          src={LogoImg}
          width={24}
          height={24}
          alt="Logo"
          className="overflow-hidden object-cover"
        />
      </a>
      {NAV_ITEMS.map((item) => (
        <NavItem
          key={item.label}
          item={item}
          isActive={item.path === HOME_ROUTE}
        />
      ))}
    </nav>
    <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
      <NavItem item={SETTING_NAV_ITEM} />
    </nav>
  </aside>
);
