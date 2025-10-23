import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginForm } from "@/components/features/login/LoginForm";

describe("LoginForm (integration, UI-only)", () => {
  it("พิมพ์ email/password แล้ว submit → onSubmit ได้ค่าตรง", async () => {
    const onSubmit = jest.fn();

    render(<LoginForm onSubmit={onSubmit} />);

    await userEvent.type(screen.getByLabelText(/email/i), "me@mail.com");
    await userEvent.type(
      screen.getByLabelText(/password/i, { selector: "input" }),
      "123456"
    );

    const submitBtn = await screen.findByRole("button", { name: /sign in/i });
    await waitFor(() => expect(submitBtn).toBeEnabled());
    await userEvent.click(submitBtn);

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({
      email: "me@mail.com",
      password: "123456",
    });
  });

  it("submitting=true → ปุ่ม disabled และ aria-busy", () => {
    render(<LoginForm onSubmit={() => {}} submitting />);
    const btn = screen.getByRole("button", { name: /sign in/i });

    expect(btn).toBeDisabled();
    expect(btn).toHaveAttribute("aria-busy", "true");
  });

  it("กด Enter บนช่อง email แต่ password ว่าง → onSubmit ไม่ถูกเรียก", async () => {
    const user = userEvent.setup();
    const onSubmit = jest.fn();
    render(<LoginForm onSubmit={onSubmit} />);

    await user.type(screen.getByLabelText(/email/i), "me@mail.com{enter}");

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("กด Enter บนช่อง password แต่ email ว่าง → onSubmit ไม่ถูกเรียก", async () => {
    const user = userEvent.setup();
    const onSubmit = jest.fn();
    render(<LoginForm onSubmit={onSubmit} />);

    await user.type(
      screen.getByLabelText(/password/i, { selector: "input" }),
      "123456{enter}"
    );

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("กด Enter บนช่อง email/password -> email/password ไม่ว่าง → ส่งฟอร์ม", async () => {
    const user = userEvent.setup();
    const onSubmit = jest.fn();
    render(<LoginForm onSubmit={onSubmit} />);

    await user.type(screen.getByLabelText(/email/i), "me@mail.com");
    const password = screen.getByLabelText(/password/i, { selector: "input" });
    await user.type(password, "123456{enter}");

    expect(onSubmit).toHaveBeenCalledWith({
      email: "me@mail.com",
      password: "123456",
    });
  });

  it("กด submit โดยค่าว่าง → onSubmit ไม่ถูกเรียก", async () => {
    const onSubmit = jest.fn();

    render(<LoginForm onSubmit={onSubmit} />);
    await userEvent.click(screen.getByRole("button", { name: /sign in/i }));

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("กด showPassword = true → แสดงรหัสผ่าน", async () => {
    const user = userEvent.setup();
    render(<LoginForm onSubmit={() => {}} />);

    await user.type(
      screen.getByLabelText(/password/i, { selector: "input" }),
      "123456"
    );
    await user.click(screen.getByRole("button", { name: /show password/i }));

    expect(
      screen.getByLabelText(/password/i, { selector: "input" })
    ).toHaveAttribute("type", "text");
  });

  it("กด showPassword = false → ซ่อนรหัสผ่าน", async () => {
    const user = userEvent.setup();
    render(<LoginForm onSubmit={() => {}} />);

    // เริ่มต้น เป็นแบบซ่อน
    const pwdInput = screen.getByLabelText(/password/i, { selector: "input" });
    expect(pwdInput).toHaveAttribute("type", "password");
    await user.type(pwdInput, "123456");

    // กดโชว์ → type เป็น text
    await user.click(screen.getByRole("button", { name: /show password/i }));
    expect(
      screen.getByLabelText(/password/i, { selector: "input" })
    ).toHaveAttribute("type", "text");

    // กดอีกครั้งเพื่อซ่อน → type กลับไปเป็น password
    await user.click(screen.getByRole("button", { name: /show password/i }));
    expect(
      screen.getByLabelText(/password/i, { selector: "input" })
    ).toHaveAttribute("type", "password");
  });

  it("ส่ง error ผ่าน prop → แสดงข้อความ error", () => {
    render(<LoginForm onSubmit={() => {}} error="Invalid credentials" />);
    expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
  });
});
