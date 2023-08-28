import { z } from "zod";

export const RegisterUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().nullable().default(null),
  lastName: z.string().nullable().default(null),
  displayEmail: z.string().email().nullable().default(null),
  image: z.string().nullable().default(null),
});

export type RegistrationDetails = z.infer<typeof RegisterUserSchema>;
