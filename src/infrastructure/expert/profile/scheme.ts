import { z } from "zod";

export type ShowResponse = {
  id: string;
  name: string;
  email: string;
};

export const updateRequestSchema = z.object({
  name: z.string(),
  email: z.string(),
});

export type UpdateRequest = z.infer<typeof updateRequestSchema>;
export type UpdateResponse = {
  id: string;
  name: string;
  email: string;
};

export type UPDATE_STATUS = "SUCCESS" | "FAILURE";
