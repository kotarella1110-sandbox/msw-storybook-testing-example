import { rest } from "msw";

export const handlers = [
  rest.get("/profile", (_, res, ctx) =>
    res(
      ctx.json({
        firstName: "Kotaro",
        lastName: "Sugawara",
      })
    )
  ),
];
