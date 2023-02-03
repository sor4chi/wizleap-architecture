import { setupServer } from "msw/node";
import { handlers as ExpertProfileHandlers } from "./infrastructure/expert/profile/mock";
import { afterAll, afterEach, beforeAll } from "vitest";
import { fetch } from "cross-fetch";

global.fetch = fetch;
const server = setupServer(...ExpertProfileHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: `error` }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
