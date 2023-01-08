import { render, screen } from "@testing-library/react";
import PageTitle from ".";

describe("PageTitle", () => {
  test("matches snapshot", () => {
    const { container } = render(<PageTitle>Title</PageTitle>);

    expect(container).toMatchSnapshot();
  });
});

