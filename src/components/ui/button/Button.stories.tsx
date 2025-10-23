import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  args: { children: "Sign in" },
};
export default meta;

type S = StoryObj<typeof Button>;
export const Primary: S = {};
export const Secondary: S = { args: { variant: "secondary" } };
export const Disabled: S = { args: { disabled: true } };
export const Loading: S = { args: { loading: true } };