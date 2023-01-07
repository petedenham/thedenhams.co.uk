import { render, screen } from "@testing-library/react";
import Header from ".";

vi.mock("@remix-run/react", async () => {
  let remix = await vi.importActual("@remix-run/react");
  return {
    ...remix,
    Link: vi.fn(({ children, to, ...rest }: React.ComponentProps<typeof RemixReact.Link>) => {
      return (
        <a {...rest} href={to}>
          {children}
        </a>
      );
    }),
  };
});

describe("Header", () => {
  it("renders", () => {
    render(<Header />);

    expect(screen.getByAltText(/peter & rachel/i)).toBeInTheDocument();
    expect(screen.getByText(/accommodation/i)).toBeInTheDocument();
    expect(screen.getByText(/venue/i)).toBeInTheDocument();
    expect(screen.getByText(/rsvp/i)).toBeInTheDocument();
    expect(screen.getByText(/information/i)).toBeInTheDocument();
    screen.debug();
  });
});
