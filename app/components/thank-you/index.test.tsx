import ThankYou from ".";
import { render, screen } from "@testing-library/react";

describe("ThankkYou", () => {
  it("matches snapshot", () => {
    const { container } = render(<ThankYou />);

    expect(container).toMatchSnapshot();
  });
});
