import type { DecoratorFn } from "@storybook/react";
import { SWRConfig } from "swr";

export const swrDecorator: DecoratorFn = (Story) => (
  <SWRConfig value={{ provider: () => new Map() }}>
    <Story />
  </SWRConfig>
);
