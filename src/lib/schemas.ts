import { z } from "zod";
import { GAME_STATUS } from "./constants";

const gameFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, {
      message: "Name is required",
    })
    .max(100, {
      message: "Name must be less than 100 characters",
    }),
  imageUrl: z.string().trim().min(1, {
    message: "Image is required",
  }),
  status: z.enum(GAME_STATUS),
  releaseDate: z.date({ message: "Released date is required" }),
});

type GameFormSchema = z.infer<typeof gameFormSchema>;

export { gameFormSchema, type GameFormSchema };
