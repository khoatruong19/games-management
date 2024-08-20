import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import { formatReleaseDate } from "@/lib/utils";
import { useDeleteGame } from "@/hooks/mutations/useDeleteGameMutation";
import { useGames } from "@/providers/GamesProvider";
import { GameForm } from "../GameForm";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "sonner";

export const GamesTable = () => {
  const { games, isLoading, total, refetch } = useGames();

  const { mutate: deleteGame } = useDeleteGame();

  const handleDeleteGame = (id: string) => {
    deleteGame(id, {
      onSuccess: () => {
        toast("✅ Game's deleted successfully!");
        refetch();
      },
    });
  };

  return (
    <Table>
      {!isLoading && !total && (
        <TableCaption className="h-[185px] pt-24">No games found!</TableCaption>
      )}
      <TableHeader>
        <TableRow>
          <TableHead className="hidden w-[100px] sm:table-cell">
            <span className="sr-only">img</span>
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="hidden md:table-cell">Release date</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {isLoading && (
          <TableRow className="h-[200px]">
            <TableCell colSpan={10} className="text-center">
              <ClipLoader color="lightgrey" />
            </TableCell>
          </TableRow>
        )}
        {games.map((game) => (
          <TableRow key={game.id}>
            <TableCell className="hidden sm:table-cell">
              <img
                alt="game-img"
                className="aspect-square rounded-md object-cover"
                height="64"
                src={game.imageUrl}
                width="64"
              />
            </TableCell>
            <TableCell className="font-medium truncate max-w-[100px]">
              {game.name}
            </TableCell>
            <TableCell>
              <Badge variant="outline">{game.status}</Badge>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {formatReleaseDate(game.releaseDate)}
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button aria-haspopup="true" size="icon" variant="ghost">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <GameForm
                    formType={{
                      type: "edit",
                      data: game,
                    }}
                    triggerEle={
                      <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                        Edit
                      </DropdownMenuItem>
                    }
                  />
                  <DropdownMenuItem onClick={() => handleDeleteGame(game.id)}>
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
