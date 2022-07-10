import premierInnImage from "~/assets/images/premier-inn.jpeg";
import spaHotelImage from "~/assets/images/the-spa-hotel.jpeg";
import theCarpentersArmsImage from "~/assets/images/the-carpenters-arms.jpeg";
import honningtonFarmImage from "~/assets/images/honnington-farm.jpeg"; 
import mercureImage from "~/assets/images/mercure.jpeg";

export default function Accommodation() {
  return (
    <>
      <p className="text-xl mb-5 font-bold">Accommodation</p>

      <div className="flex flex-col lg:flex-row overflow-hidden h-auto lg:mb-5">
        <img width="500" height="281" src={premierInnImage} className="block h-auto flex-none lg:w-96" />
        <div className="p-4 flex flex-col flex-1 justify-center leading-normal">
          <h2 className="font-bold">Premier Inn Tonbridge (10 minute walk)</h2>
          <p className="my-5">Pembury Road, Tonbridge, Kent, TN11 0NA</p>
          <p><a className="hover:underline" href="https://goo.gl/maps/DNTuULzGM8Gmw1ob9" target="_blank">Link to Google Maps</a></p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse overflow-hidden h-auto lg:mb-5">
        <img width="500" height="281" src={spaHotelImage} className="block h-auto flex-none lg:w-96" />
        <div className="p-4 flex flex-col flex-1 justify-center leading-normal">
          <h2 className="font-bold">The Spa Hotel (13 minute drive)</h2>
          <p className="my-5">Langton Rd, Royal Tunbridge Wells, Tunbridge Wells TN4 8XJ</p>
          <p><a className="hover:underline" href="https://goo.gl/maps/noysVcwH6LgJRygC9" target="_blank">Link to Google Maps</a></p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row overflow-hidden h-auto lg:mb-5">
        <img width="500" height="281" src={theCarpentersArmsImage} className="block h-auto flex-none lg:w-96" />
        <div className="p-4 flex flex-col flex-1 justify-center leading-normal">
          <h2 className="font-bold">The Carpenters Arms (8 minute drive)</h2>
          <p className="my-5">Three Elm Ln, Tonbridge TN11 0AD</p>
          <p><a className="hover:underline" href="https://goo.gl/maps/aqVoTCHE888deWec8" target="_blank">Link to Google Maps</a></p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse overflow-hidden h-auto lg:mb-5">
        <img width="500" height="281" src={honningtonFarmImage} className="block h-auto flex-none lg:w-96" />
        <div className="p-4 flex flex-col flex-1 justify-center leading-normal">
          <h2 className="font-bold">Glamping at Honnington Farm (5 minute drive)</h2>
          <p className="my-5">Honnington Farm, Vauxhall Ln, Southborough TN4 0XD</p>
          <p><a className="hover:underline" href="https://goo.gl/maps/FQYWFrCoVNm4TJHQ7" target="_blank">Link to Google Maps</a></p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row overflow-hidden h-auto lg:mb-5">
        <img width="500" height="281" src={mercureImage} className="block h-auto flex-none lg:w-96" />
        <div className="p-4 flex flex-col flex-1 justify-center leading-normal">
          <h2 className="font-bold">Mercure Hotel (5 minute drive)</h2>
          <p className="my-5">8 Tonbridge Rd, Pembury, Tunbridge Wells TN2 4QL</p>
          <p><a className="hover:underline" href="https://goo.gl/maps/iRrAatnUo4ZWHft16" target="_blank">Link to Google Maps</a></p>
        </div>
      </div>
    </>
  );
}

