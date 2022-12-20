import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";
import * as stories from "./index.stories";

const { Story1 } = composeStories(stories);

test("ストーリー1", async () => {
  render(<Story1 />);
  await screen.findByRole("main");
  expect(screen.getByText("Kotaro")).toBeInTheDocument();
  expect(screen.getByText("Sugawara")).toBeInTheDocument();
});
