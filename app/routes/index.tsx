import { Link } from "@remix-run/react";
import firstImage from "~/assets/images/home-1.jpg";
import secondImage from "~/assets/images/home-2.jpg";
import thirdImage from "~/assets/images/home-3.jpg";
import fourthImage from "~/assets/images/home-4.jpg";

export default function Index() {
  return (
    <>
      <ul className="grid grid-flow-col grid-rows-1 md:my-5">
        <li>
          <img width="500" height="667" src={firstImage} />
        </li>
        <li>
          <img width="500" height="667" src={secondImage} />
        </li>
        <li className="hidden md:block">
          <img width="500" height="667" src={thirdImage} />
        </li>
        <li className="hidden md:block">
          <img width="500" height="667" src={fourthImage} />
        </li>
      </ul>

      <section className="text-center text-xl">
        <h1 className="text-center my-5 text-2xl">
          <span className="block mb-4 italic text-3xl">You are invited to the wedding of</span>
          <span className="block font-bold text-3xl uppercase">Peter Rattew</span>
          <span className="block italic uppercase">&</span>
          <span className="block font-bold text-3xl uppercase">Rachel Denham</span>
        </h1>
        <p>Saturday the 6th May 2023</p>
        <p>Arrival from 1pm for a 1:30pm ceremony</p>
        <p>At Oak Tree Barn</p>

        <Link
          className="border-primary border-2 hover:bg-primary hover:text-white border px-10 py-2 inline-block mt-5 active:translate-y-1"
          to="/rsvp"
        >
          RSVP
        </Link>
      </section>
    </>
  );
}
