import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginField } from "@/components/features/login/LoginField";

describe("LoginField (integration)", () => {
  it("email field: มี label และ onChange ถูกเรียกเมื่อพิมพ์", async () => {
    // Arrange เตรียมค่า, mock, render
    const user = userEvent.setup();
    const onChange = jest.fn();
    render(
      <LoginField
        type="email"
        label="Email"
        name="email"
        // value=""
        onChange={onChange}
        placeholder="you@mail.com"
      />
    );

    // Act ทำสิ่งที่อยากเทส
    await user.type(screen.getByLabelText(/email/i), "me@mail.com");

    // Assert ตรวจผลที่คาดหวัง
    expect(onChange).toHaveBeenCalled();
  });

  it("password field: autoComplete=current-password", () => {
    render(
      <LoginField
        type="password"
        label="Password"
        name="password"
        // value=""
        onChange={() => {}}
      />
    );
    expect(screen.getByLabelText(/password/i)).toHaveAttribute("autocomplete", "current-password");
  });

  it("ส่ง error ลงไป → แสดงข้อความ error", () => {
    render(
      <LoginField
        type="email"
        label="Email"
        name="email"
        // value="x"
        onChange={() => {}}
        error="Invalid email"
      />
    );
    expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
  });
});