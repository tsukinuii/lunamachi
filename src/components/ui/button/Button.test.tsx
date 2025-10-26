import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Button } from "./index";
import { Loader } from "lucide-react";

describe("UI/Button", () => {
  it("renders children", () => {
    render(<Button>Submit</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Submit");
  });

  it("เมื่อปุ่มเป็น disabled หรือ loading -> ฟังก์ชัน onClick ไม่ควรถูกเรียก", async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();

    const { rerender } = render(
      <Button disabled onClick={onClick}>
        Submit
      </Button>
    );
    await user.click(screen.getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();

    rerender(
      <Button loading onClick={onClick}>
        Submit
      </Button>
    );
    await user.click(screen.getByRole("button"));

    expect(onClick).not.toHaveBeenCalled();
  });

  it("renders icons เมื่อส่ง leftIcon หรือ rightIcon", () => {
    const { rerender } = render(<Button leftIcon={<span>←</span>}>Go</Button>);
    const btn = screen.getByRole("button", { name: "Go" });
    const spans = btn.querySelectorAll("span[aria-hidden]");
    expect(screen.getByRole("button")).toHaveTextContent("←");
    expect(spans.length).toBe(1);

    rerender(<Button rightIcon={<span>→</span>}>Go</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Go");
    expect(screen.getByRole("button")).toHaveTextContent("→");
  });

  it("ส่ง sizeCustom -> ต้องมี style ตาม sizeCustom", () => {
    render(
      <Button
        sizeCustom={{
          height: "4rem",
          paddingX: "2rem",
          gap: "1rem",
          fontSize: "1.25rem",
        }}
      >
        Submit
      </Button>
    );
    expect(screen.getByRole("button")).toHaveStyle({
      "--btn-h": "4rem",
      "--btn-px": "2rem",
      "--btn-gap": "1rem",
      "--btn-text": "1.25rem",
    });
  });

  it("เมื่อส่ง variant -> ต้องมี class ตาม variant", () => {
    render(<Button variant="primary">Submit</Button>);
    expect(screen.getByRole("button")).toHaveClass(
      "bg-primary text-primary-foreground hover:bg-primary/90"
    );
  });

  it("เมื่อส่ง size -> ต้องมี class ตาม size", () => {
    render(<Button size="lg">Submit</Button>);
    expect(screen.getByRole("button")).toHaveClass(
      "h-[var(--btn-h)] px-[var(--btn-px)] gap-[var(--btn-gap)] text-[length:var(--btn-text)]"
    );
  });
});
