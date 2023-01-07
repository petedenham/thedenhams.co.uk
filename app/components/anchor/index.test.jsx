import { render, screen } from "@testing-library/react";
import Anchor from "./index";

describe("Anchor", () => {
  test("returns a styled anchor", () => {
    render(<Anchor href="http://example.com">Click Here</Anchor>);

    expect(screen.getByText(/click here/i)).toBeInTheDocument();
  });
});
