import { z } from "zod";

export const workSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  authorId: z.string().cuid("Invalid author id"),
});

export const workUpdateSchema = workSchema.partial();

export type WorkInput = z.infer<typeof workSchema>;
export type WorkUpdateInput = z.infer<typeof workUpdateSchema>;
