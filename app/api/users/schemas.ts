import { z } from "zod";

export const UpdateUserSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  displayEmail: z.string().email(),
});

export type UserUpdate = z.infer<typeof UpdateUserSchema>;
