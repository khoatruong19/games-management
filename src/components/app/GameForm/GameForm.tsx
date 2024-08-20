import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAddGame } from "@/hooks/mutations/useAddGameMutation";
import { useUpdateGame } from "@/hooks/mutations/useUpdateGameMutation";
import { gameFormSchema, GameFormSchema } from "@/lib/schemas";
import { Game } from "@/lib/types";
import { useGames } from "@/providers/GamesProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { GameReleaseDateSelect } from "./GameReleaseDateSelect";
import { GameStatusSelect } from "./GameStatusSelect";

type AddGameType = {
  type: "add";
};

type EditGameType = {
  type: "edit";
  data: Game;
};

const checkIsAddGameType = (formType: {
  type: string;
}): formType is AddGameType => formType.type === "add";

type GameFormProps = {
  formType: AddGameType | EditGameType;
  triggerEle: React.ReactNode;
};

export const GameForm = (props: GameFormProps) => {
  const { formType, triggerEle } = props;

  const { refetch } = useGames();

  const [imageFile, setImageFile] = useState<File>();

  const { mutate: addGame, isPending: addGameLoading } = useAddGame();
  const { mutate: updateGame, isPending: updateGameLoading } = useUpdateGame();

  const dialogTriggerRef = useRef<HTMLButtonElement>(null);

  const form = useForm<GameFormSchema>({
    resolver: zodResolver(gameFormSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
      releaseDate: undefined,
      status: "developing",
    },
  });

  function onSubmit(values: GameFormSchema) {
    if (checkIsAddGameType(formType)) {
      addGame(values, {
        onSuccess: () => {
          refetch();
          dialogTriggerRef.current?.click();
          toast("✅ Game's added successfully!");
        },
        onError: (message: unknown) => {
          toast("❌ " + (message as string));
        },
      });
      return;
    }

    updateGame(
      { id: formType.data.id, ...values },
      {
        onSuccess: () => {
          refetch();
          dialogTriggerRef.current?.click();
          toast("✅ Game's updated successfully!");
        },
        onError: (message: unknown) => {
          toast("❌ " + (message as string));
        },
      }
    );
  }

  const handleResetForm = () => {
    form.reset();
    setImageFile(undefined);
  };

  useEffect(() => {
    if (!imageFile) return;
    form.setValue("imageUrl", URL.createObjectURL(imageFile));
    form.clearErrors("imageUrl");
  }, [imageFile]);

  useEffect(() => {
    if (checkIsAddGameType(formType)) return;
    const { name, status, releaseDate, imageUrl } = formType.data;
    form.setValue("name", name);
    form.setValue("status", status);
    form.setValue("releaseDate", releaseDate);
    form.setValue("imageUrl", imageUrl);
  }, [formType]);

  return (
    <Dialog onOpenChange={(open) => !open && handleResetForm()}>
      <DialogTrigger ref={dialogTriggerRef} asChild>
        {triggerEle}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[470px]">
        <Form {...form}>
          <DialogHeader>
            <DialogTitle>
              {formType.type === "add" ? "Add game" : "Edit game"}
            </DialogTitle>
          </DialogHeader>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4 py-4 text-right"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormItemWrapper>
                    <FormLabel>Name</FormLabel>
                    <FormControl className="flex-1">
                      <Input
                        id="name"
                        placeholder="Game name..."
                        className="col-span-3 w-full"
                        {...field}
                      />
                    </FormControl>
                  </FormItemWrapper>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormItemWrapper>
                    <FormLabel>Status</FormLabel>
                    <FormControl>
                      <GameStatusSelect field={field} />
                    </FormControl>
                  </FormItemWrapper>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="releaseDate"
              render={({ field }) => (
                <FormItem>
                  <FormItemWrapper>
                    <FormLabel>Release date</FormLabel>
                    <FormControl>
                      <GameReleaseDateSelect field={field} />
                    </FormControl>
                  </FormItemWrapper>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormItemWrapper>
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-2 w-[310px]">
                        {!!field.value && (
                          <img
                            alt="game-image"
                            className="w-9 h-9 rounded-md object-cover"
                            src={field.value}
                          />
                        )}
                        <Input
                          id="image"
                          type="file"
                          accept="image/*"
                          className="flex-1 file:text-muted-foreground"
                          onChange={(e) =>
                            setImageFile(
                              e.target.files ? e.target.files[0] : undefined
                            )
                          }
                        />
                      </div>
                    </FormControl>
                  </FormItemWrapper>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
          <DialogFooter>
            <Button
              disabled={addGameLoading || updateGameLoading}
              onClick={form.handleSubmit(onSubmit)}
            >
              Save
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

const FormItemWrapper = ({ children }: PropsWithChildren) => (
  <div className="grid grid-cols-4 items-center gap-4 ">{children}</div>
);
