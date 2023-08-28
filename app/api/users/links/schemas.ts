import { z } from "zod";

const Platforms = [
  "github",
  "frontendMentor",
  "twitter",
  "linkedin",
  "hashnode",
  "devto",
  "stackOverflow",
  "codeWars",
  "gitlab",
  "twitch",
  "youtube",
  "facebook",
  "freeCodeCamp",
] as const;

export const AddLinkSchema = z
  .object({
    id: z.string().optional(),
    platform: z.enum(Platforms),
    url: z.string().url(),
    order: z.number().min(1),
    new: z.literal(true).optional(),
    updated: z.literal(true).optional(),
  })
  .array()
  .min(1);

export type Links = z.infer<typeof AddLinkSchema>;
