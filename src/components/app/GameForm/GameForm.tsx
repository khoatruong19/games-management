import { Typography } from "@/components/common";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GameStatusSelect } from "./GameStatusSelect";
import { PropsWithChildren, useState } from "react";
import { GameReleaseDateSelect } from "./GameReleaseDateSelect";

export type GameFormProps = {
  type: "add" | "edit";
  triggerEle: React.ReactNode;
};

export const GameForm = (props: GameFormProps) => {
  const { type, triggerEle } = props;

  const [file, setFile] = useState<File>();

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{triggerEle}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle asChild>
            <Typography level="h5">
              {type === "add" ? "Add game" : "Edit game"}
            </Typography>
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4 text-right">
          <FormField>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Game name..."
              className="col-span-3 w-[280px]"
            />
          </FormField>

          <FormField>
            <Label htmlFor="status">Status</Label>
            <GameStatusSelect />
          </FormField>

          <FormField>
            <Label htmlFor="release-date">Release Date</Label>
            <GameReleaseDateSelect />
          </FormField>

          <FormField>
            <Label htmlFor="image">Image</Label>
            <div className="flex items-center gap-2 w-[280px]">
              {file && (
                <img
                  alt="game-image"
                  className="w-9 h-9 rounded-md object-cover"
                  src={URL.createObjectURL(file)}
                />
              )}
              <Input
                id="image"
                type="file"
                accept="image/*"
                className="flex-1 file:text-muted-foreground"
                onChange={onFileChange}
              />
            </div>
          </FormField>
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const FormField = ({ children }: PropsWithChildren) => (
  <div className="grid grid-cols-4 items-center gap-4">{children}</div>
);
