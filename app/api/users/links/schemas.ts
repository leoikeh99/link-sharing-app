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

export const AddLinkSchema = z.object({
  links: z
    .object({
      _id: z.string().optional(),
      platform: z.enum(Platforms),
      url: z.string().url(),
      order: z.number().min(1),
      new: z.literal(true).optional(),
      updated: z.literal(true).optional(),
    })
    .array(),
  removedLinks: z.string().array().nullable().optional(),
});

export type SaveLinks = z.infer<typeof AddLinkSchema>;
