import { UpdateRequest } from "./scheme";

export const EXPERT_PROFILE_SHOW = (id: string) =>
  `https://localhost:8000/api/expert/profile/${id}`;
export const EXPERT_PROFILE_UPDATE = (id: string) =>
  `https://localhost:8000/api/expert/profile/${id}`;

export const expertProfileRequest = {
  show: (id: string) => fetch(EXPERT_PROFILE_SHOW(id), { method: "GET" }),
  update: (id: string, params: UpdateRequest) =>
    fetch(EXPERT_PROFILE_UPDATE(id), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }),
};
