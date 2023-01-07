import { render, screen } from "@testing-library/react";
import Anchor from "./index";

describe("App => Components => Anchror", () => {
  test("returns an anchor", () => {
    render(<Anchor href="http://example.com">Click Here</Anchor>);

    expect(screen.getByText(/click here/i)).toBeInTheDocument();
  });
});
