import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useGames } from "@/providers/GamesProvider";

export const GamesPagination = () => {
  const {
    page,
    totalPages,
    navigateToNextPage,
    navigateToPreviousPage,
    navigateToPage,
  } = useGames();

  return (
    <Pagination>
      <PaginationContent>
        {page > 1 && (
          <>
            <PaginationItem onClick={navigateToPreviousPage}>
              <PaginationPrevious />
            </PaginationItem>

            {page > 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            <PaginationItem onClick={navigateToPreviousPage}>
              <PaginationLink>{page - 1}</PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem onClick={() => navigateToPage(page)}>
          <PaginationLink isActive>{page}</PaginationLink>
        </PaginationItem>
        {page < totalPages && (
          <>
            <PaginationItem onClick={navigateToNextPage}>
              <PaginationLink>{page + 1}</PaginationLink>
            </PaginationItem>

            {page < totalPages - 1 && (
              <PaginationItem>
                <PaginationLink>
                  <PaginationEllipsis />
                </PaginationLink>
              </PaginationItem>
            )}
            <PaginationItem onClick={navigateToNextPage}>
              <PaginationNext />
            </PaginationItem>
          </>
        )}
      </PaginationContent>
    </Pagination>
  );
};
