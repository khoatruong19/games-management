import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GAME_STATUS } from "@/lib/constants";
import { GameFormSchema } from "@/lib/schemas";
import { ControllerRenderProps } from "react-hook-form";

export type GameStatusSelectProps = {
  field: ControllerRenderProps<GameFormSchema, "status">;
};

export const GameStatusSelect = ({ field }: GameStatusSelectProps) => {
  return (
    <Select value={field.value} onValueChange={field.onChange}>
      <SelectTrigger className="w-[150px]">
        <SelectValue className="capitalize" />
      </SelectTrigger>
      <SelectContent ref={field.ref}>
        {GAME_STATUS.map((status) => (
          <SelectItem key={status} value={status}>
            {status}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
