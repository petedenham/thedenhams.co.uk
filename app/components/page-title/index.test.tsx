import { render, screen } from "@testing-library/react";
import PageTitle from ".";

describe("PageTitle", () => {
  test("returns a styled title", () => {
    render(<PageTitle>Title</PageTitle>);

    expect(screen.getByText(/title/i)).toBeInTheDocument();
  });
});

