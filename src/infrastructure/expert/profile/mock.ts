import {
  ShowResponse,
  UpdateRequest,
  updateRequestSchema,
  UpdateResponse,
} from "./scheme";
import { EXPERT_PROFILE_SHOW, EXPERT_PROFILE_UPDATE } from "./requests";
import { setupWorker, rest } from "msw";

const EXPERT_PROFILE_SHOW_MOCK = (): ShowResponse => ({
  id: "1",
  name: "admin",
  email: "admin@example.com",
});

const EXPERT_PROFILE_UPDATE_MOCK = (params: UpdateRequest): UpdateResponse => ({
  id: "1",
  name: params.name,
  email: params.email,
});

export const handlers = [
  rest.get(EXPERT_PROFILE_SHOW(":id"), (req, res, ctx) => {
    return res(ctx.json(EXPERT_PROFILE_SHOW_MOCK()));
  }),
  rest.put(EXPERT_PROFILE_UPDATE(":id"), async (req, res, ctx) => {
    const body = await req.json();
    const params = updateRequestSchema.safeParse(body);
    if (!params.success) return res(ctx.status(400));
    return res(ctx.json(EXPERT_PROFILE_UPDATE_MOCK(params.data)));
  }),
];
