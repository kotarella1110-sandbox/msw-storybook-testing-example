import { server } from "./src/mocks/server";

import "@testing-library/jest-dom";
import "whatwg-fetch";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
