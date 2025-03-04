import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useLogin } from "@/app/_api/auth/hooks";
import { useAuth } from "@/app/_provider/auth";
import { useRouter } from "next/navigation";
import Login from "./page";

jest.mock("@/app/_api/auth/hooks", () => ({
  useLogin: jest.fn(() => ({
    mutateAsync: jest.fn(), // Giả lập API call
  })),
}));

jest.mock("@/app/_provider/auth", () => ({
  useAuth: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Login Page", () => {
  const mockLogin = jest.fn();
  const mockSetLogin = jest.fn();
  const mockPush = jest.fn();

  beforeEach(() => {
    (useLogin as jest.Mock).mockReturnValue({ mutateAsync: mockLogin });
    (useAuth as jest.Mock).mockReturnValue({ setLogin: mockSetLogin });
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders login form correctly", () => {
    render(<Login />);

    // screen.debug();

    // expect(screen.getByText(/log in/i)).toBeInTheDocument();
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Log in" })).toBeInTheDocument();
  });

  test("shows validation errors when submitting empty form", async () => {
    render(<Login />);

    fireEvent.click(screen.getByRole("button", { name: "Log in" }));

    expect(
      await screen.findByText("The username required"),
    ).toBeInTheDocument();
    expect(
      await screen.findByText("The password is required"),
    ).toBeInTheDocument();
  });

  test("calls login API with valid credentials", async () => {
    mockLogin.mockResolvedValueOnce({
      data: { accessToken: "mock-token", username: "ductm" },
    });

    mockSetLogin.mockReturnValue(true);

    render(<Login />);

    fireEvent.change(screen.getByLabelText("Username"), {
      target: { value: "ductm" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Log in" }));

    await waitFor(() => {
      // Kiểm tra API gọi với đúng tham số
      expect(mockLogin).toHaveBeenCalledWith({
        username: "ductm",
        password: "123456",
      });
    });

    await waitFor(() => {
      // Kiểm tra đã lưu thông tin đăng nhập
      expect(mockSetLogin).toHaveBeenCalledWith("mock-token", {
        accessToken: "mock-token",
        username: "ductm",
      });
    });

    await waitFor(() => {
      // Kiểm tra có chuyển hướng trang sau khi login thành công
      expect(mockPush).toHaveBeenCalledWith("/recipes/feed");
    });
  });

  //   test("displays error message when login fails", async () => {
  //     mockLogin.mockRejectedValueOnce(new Error("Invalid credentials"));

  //     render(<Login />);

  //     fireEvent.change(screen.getByLabelText("Username"), { target: { value: "ductm1" } });
  //     fireEvent.change(screen.getByLabelText("Password"), { target: { value: "123456" } });

  //     fireEvent.click(screen.getByRole("button", { name: "Log in" }));

  //     await waitFor(() => expect(mockLogin).toHaveBeenCalled());
  //     expect(screen.getByText("Invalid credentials")).toBeInTheDocument();
  //   });
});
