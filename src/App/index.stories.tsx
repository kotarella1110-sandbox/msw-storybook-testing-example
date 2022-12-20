import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { rest } from "msw";
import { App } from ".";
import { swrDecorator } from "../lib/storybook";
import { handlers } from "../mocks/handlers";

export default {
  component: App,
  decorators: [swrDecorator],
} as ComponentMeta<typeof App>;

export const Story1: ComponentStoryObj<typeof App> = {
  parameters: {
    msw: {
      handlers,
    },
  },
};

export const Story2: ComponentStoryObj<typeof App> = {
  parameters: {
    msw: {
      handlers: [
        rest.get("/profile", (_, res, ctx) =>
          res(
            ctx.json({
              firstName: "Taro",
              lastName: "Nihon",
            })
          )
        ),
        ...handlers,
      ],
    },
  },
};

export const Story3: ComponentStoryObj<typeof App> = {
  parameters: {
    msw: {
      handlers: [
        rest.get("/profile", (_, res, ctx) => res(ctx.status(500))),
        ...handlers,
      ],
    },
  },
};
