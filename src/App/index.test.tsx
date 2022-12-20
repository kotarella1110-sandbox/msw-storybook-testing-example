import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";
import * as stories from "./index.stories";

const { Story1, Story2, Story3 } = composeStories(stories);

test("ストーリー1", async () => {
  render(<Story1 />);
  expect(await screen.findByText("Kotaro")).toBeInTheDocument();
  expect(await screen.findByText("Sugawara")).toBeInTheDocument();
});

test("ストーリー2", async () => {
  render(<Story2 />);
  expect(await screen.findByText("Taro")).toBeInTheDocument();
  expect(await screen.findByText("Nihon")).toBeInTheDocument();
});

test("ストーリー3", async () => {
  render(<Story3 />);
  expect(await screen.findByText("failed to load")).toBeInTheDocument();
});
