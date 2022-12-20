import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";
import * as stories from "./index.stories";

const { Default } = composeStories(stories);

test("レンダリングされていること", () => {
  render(<Default />);
  expect(screen.getByText("App")).toBeInTheDocument();
});
