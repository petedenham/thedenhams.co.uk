import { Link } from "@remix-run/react";
import image from "~/assets/images/logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center mb-3">
      <Link to="/"><img src={image} className="m-2 w-60 md:w-80" alt="Peter & Rachel"/></Link>
      <nav className="text-base md:m-2">
        <ul className="flex flex-row flex-wrap items-center text-base md:text-xl font-bold space-x-4">
          <li className="hover:underline"><Link to="/accommodation">Accommodation</Link></li>
          <li className="hover:underline"><Link to="/venue">Venue</Link></li>
          <li className="hover:underline"><Link to="/rsvp">RSVP</Link></li>
          <li className="hover:underline"><Link to="/information">Information</Link></li>
        </ul>
      </nav>
    </header>
  );
}
