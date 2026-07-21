import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test case", () => {
  // beforeAll(() => {
  //   console.log("before all");
  // });

  // afterAll(() => {
  //   console.log("after all");
  // });

  // beforeEach(() => {
  //   console.log("before each");
  // });

  // afterEach(() => {
  //   console.log("after each");
  // });

  it("should load contact us component ", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    // assertion
    expect(heading).toBeInTheDocument();
  });

  it("should load button inside Contact  component", () => {
    render(<Contact />);

    //  const button = screen.getByRole("Submit"); -- this one way to find button

    const button = screen.getByText("Submit"); // this is another way to find button by text

    // Assertion we here expect something we want to test
    expect(button).toBeInTheDocument();
  });

  it("should load input name inside contact  component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  it("should load 2 input boxes on the contact component ", () => {
    render(<Contact />);

    // querying
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes.length);

    // assertion
    expect(inputBoxes.length).toBe(2);

    // anothe way to find this

    // expect(inputBoxes.length).not.toBe(3);
  });
});
