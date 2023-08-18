import { NextResponse } from "next/server";
import { z } from "zod";

export const RegisterUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().nullable().default(null),
  lastName: z.string().nullable().default(null),
  displayEmail: z.string().email().nullable().default(null),
  image: z.string().nullable().default(null),
});

type RegistrationDetails = z.infer<typeof RegisterUserSchema>;

export function validateRegisterUser(reqBody: any) {
  const validate = RegisterUserSchema.safeParse(reqBody);

  return {
    success: validate.success,
    errors: validate.error?.issues,
    user: validate.data,
  };
}
