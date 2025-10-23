import { isValidEmail, isNonEmpty } from "@/lib/validators";

describe("validators", () => {
  it("isValidEmail", () => {
    expect(isValidEmail("a@b.com")).toBe(true);
    expect(isValidEmail("bad@")).toBe(false);
  });
  it("isNonEmpty", () => {
    expect(isNonEmpty("x")).toBe(true);
    expect(isNonEmpty("   ")).toBe(false);
  });
});