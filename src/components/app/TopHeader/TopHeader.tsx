import { AccountDropdown } from "@/components/common";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { useGames } from "@/providers/GamesProvider";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export const TopHeader = () => {
  const { search: storedSearch, searchGame } = useGames();

  const [search, setSearch] = useState(storedSearch);
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    searchGame(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <div className="relative ml-auto flex-1 md:grow-0">
        <Search className="absolute left-2.5 top-3.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>
      <AccountDropdown />
    </header>
  );
};
