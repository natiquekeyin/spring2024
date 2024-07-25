import Application from "./Application";
import { screen, render } from "@testing-library/react";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    // testing heading elements...
    const pageHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(pageHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();

    // const bioElement = screen.getByRole("textbox", { name: "Bio" });
    // expect(bioElement).toBeInTheDocument();
  });
});
