import { Link } from "@remix-run/react";
import image from "~/assets/images/logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center mb-3">
      <img src={image} className="m-2 w-60 md:w-80"/>
      <nav className="text-base m-2">
        <ul className="flex flex-row flex-wrap items-center text-base text-lg">
          <li className="px-2 hover:underline"><Link to="/accommodation">Accommodation</Link></li>
          <li className="px-2 hover:underline"><Link to="/location">Venue</Link></li>
          <li className="px-2 hover:underline"><Link to="/rsvp">RSVP</Link></li>
          <li className="px-2 hover:underline"><Link to="/information">Information</Link></li>
        </ul>
      </nav>
    </header>
  );
}
