import Greet from "./Greet";
import { render, screen } from "@testing-library/react";

test("Greet rendors correctly", () => {
  render(<Greet />);
  const txtElement = screen.getByText(/hello/i);
  expect(txtElement).toBeInTheDocument();
});
