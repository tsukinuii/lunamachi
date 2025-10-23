import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { LoginField } from "./LoginField";

const meta: Meta<typeof LoginField> = {
  title: "Features/Login/LoginField",
  component: LoginField,
};
export default meta;

type S = StoryObj<typeof LoginField>;

function ControlledEmail() {
  const [v, setV] = useState("");
  return (
    <LoginField
      type="email"
      label="Email"
      name="email"
      value={v}
      onChange={setV}
      placeholder="you@mail.com"
    />
  );
}

export const Email: S = { render: () => <ControlledEmail /> };
export const Password: S = {
  render: () => {
    const [v, setV] = useState("");
    return (
      <LoginField
        type="password"
        label="Password"
        name="password"
        value={v}
        onChange={setV}
        placeholder="•••••"
      />
    );
  },
};
export const ErrorState: S = {
  render: () => {
    const [v, setV] = useState("wrong@mail.com");
    return (
      <LoginField
        type="email"
        label="Email"
        name="email"
        value={v}
        onChange={() => {}}
        error="Email not found"
      />
    );
  },
};
