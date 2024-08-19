import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GAME_STATUS } from "@/lib/constants";

export const GameStatusSelect = () => {
  return (
    <Select value="developing">
      <SelectTrigger className="w-[150px]">
        <SelectValue className="capitalize" />
      </SelectTrigger>
      <SelectContent id="status">
        {GAME_STATUS.map((status) => (
          <SelectItem key={status} value={status}>
            {status}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
