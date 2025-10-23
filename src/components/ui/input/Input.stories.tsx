import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  args: { placeholder: "email@example.com" },
};
export default meta;

type S = StoryObj<typeof Input>;

export const Default: S = {};
export const WithLabel: S = { args: { label: "Email" } };
export const WithHelper: S = {
  args: { label: "Email", helperText: "We'll never share your email." },
};
export const ErrorState: S = {
  args: { label: "Email", error: "Invalid email" },
};
export const Password: S = {
  args: { label: "Password", type: "password", placeholder: "••••••••" },
};