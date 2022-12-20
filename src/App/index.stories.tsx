import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { App } from ".";
import { handlers } from "../mocks/handlers";

export default {
  component: App,
} as ComponentMeta<typeof App>;

export const Story1: ComponentStoryObj<typeof App> = {
  parameters: {
    msw: {
      handlers,
    },
  },
};
