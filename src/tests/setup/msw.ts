import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

export const server = setupServer(
  http.post("/api/login", async ({ request }) => {
    const { email, password } = (await request.json()) as {
      email: string;
      password: string;
    };
    if (email === "me@mail.com" && password === "123456") {
      return HttpResponse.json({ token: "mock-token", user: { id: "u1", email } });
    }
    return new HttpResponse(JSON.stringify({ message: "Invalid credentials" }), { status: 401 });
  })
);

beforeAll(() => server.listen({ onUnhandledRequest: "warn" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());