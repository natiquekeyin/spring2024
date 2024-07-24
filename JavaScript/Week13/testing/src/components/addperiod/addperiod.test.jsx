import AddPeriod from "./AddPeriod";
import { render, screen } from "@testing-library/react";

describe("PERIOD", () => {
  test("Add period renders correctly", () => {
    render(<AddPeriod />);
    const txtElement = screen.getByText("Hello");
    expect(txtElement).toBeInTheDocument();
  });

  test.only("Add period with name and period", () => {
    render(<AddPeriod name="Alex" />);
    const txtElement = screen.getByText("Hello Alex.");
    expect(txtElement).toBeInTheDocument();
  });
});

describe("Something", () => {
  test("Add period renders correctly", () => {
    render(<AddPeriod />);
    const txtElement = screen.getByText("Hello");
    expect(txtElement).toBeInTheDocument();
  });

  test("Add period with name and period", () => {
    render(<AddPeriod name="Alex" />);
    const txtElement = screen.getByText("Hello Alex.");
    expect(txtElement).toBeInTheDocument();
  });
});
