import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Typography } from "@/components/common";
import { ControllerRenderProps } from "react-hook-form";
import { GameFormSchema } from "@/lib/schemas";

export type GameReleaseDateSelectProps = {
  field: ControllerRenderProps<GameFormSchema, "releaseDate">;
};

export const GameReleaseDateSelect = ({
  field,
}: GameReleaseDateSelectProps) => {
  const date = field.value;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[310px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          <Typography level="p5" component="span">
            {date ? format(date, "PPP") : "Select a date"}
          </Typography>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onDayClick={field.onChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
