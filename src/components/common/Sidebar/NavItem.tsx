import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { NavItem as NavItemType } from "@/lib/types";
import { Typography } from "../Typography";
import { cn } from "@/lib/utils";

type NavItemProps = {
  item: NavItemType;
  isActive?: boolean;
};

export const NavItem = ({ item, isActive = false }: NavItemProps) => {
  const { label, path, icon: Icon } = item;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={path}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
            {
              "bg-accent text-accent-foreground": isActive,
            }
          )}
        >
          <Icon className="h-5 w-5" />
          <Typography component="span" level="p5" className="sr-only">
            {label}
          </Typography>
        </a>
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  );
};
