import Anchor from "~/components/anchor";
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
        <div className="p-4 flex flex-col flex-1 items-center lg:items-end justify-center leading-normal">
          <h2 className="font-bold">Premier Inn Tonbridge (10 minute walk)</h2>
          <p className="mt-5 text-center lg:text-right">Pembury Road<br />Tonbridge<br />Kent<br />TN11 0NA</p>
          <div className="flex flex-row space-x-1">
            <Anchor href="https://goo.gl/maps/DNTuULzGM8Gmw1ob9">Google Maps</Anchor>
            <Anchor href="https://www.premierinn.com/gb/en/hotels/england/kent/tonbridge/tonbridge.html">Website</Anchor>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse overflow-hidden h-auto lg:mb-5">
        <img width="500" height="281" src={spaHotelImage} className="block h-auto flex-none lg:w-96" />
        <div className="p-4 flex flex-col flex-1 items-center lg:items-start justify-center leading-normal">
          <h2 className="font-bold">The Spa Hotel (13 minute drive)</h2>
          <p className="mt-5 text-center lg:text-left">Langton Rd<br />Royal Tunbridge Wells<br />Tunbridge Wells<br />TN4 8XJ</p>
          <div className="flex flex-row space-x-1">
            <Anchor href="https://goo.gl/maps/noysVcwH6LgJRygC9">Google Maps</Anchor>
            <Anchor href="https://www.spahotel.co.uk">Website</Anchor>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row overflow-hidden h-auto lg:mb-5">
        <img width="500" height="281" src={theCarpentersArmsImage} className="block h-auto flex-none lg:w-96" />
        <div className="p-4 flex flex-col flex-1 items-center lg:items-end justify-center leading-normal">
          <h2 className="font-bold">The Carpenters Arms (8 minute drive)</h2>
          <p className="mt-5 text-center lg:text-right">Three Elm Ln<br />Tonbridge<tx />TN11 0AD</p>
          <div className="flex flex-row space-x-1">
            <Anchor href="https://goo.gl/maps/aqVoTCHE888deWec8">Google Maps</Anchor>
            <Anchor href="https://www.carpentersarms.net">Website</Anchor>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse overflow-hidden h-auto lg:mb-5">
        <img width="500" height="281" src={honningtonFarmImage} className="block h-auto flex-none lg:w-96" />
        <div className="p-4 flex flex-col flex-1 items-center lg:items-start justify-center leading-normal">
          <h2 className="font-bold">Glamping at Honnington Farm (5 minute drive)</h2>
          <p className="mt-5 text-center lg:text-left">Honnington Farm<br />Vauxhall Ln<br />Southborough<br />TN4 0XD</p>
          <div className="flex flex-row space-x-1">
            <Anchor href="https://goo.gl/maps/FQYWFrCoVNm4TJHQ7">Google Maps</Anchor>
            <Anchor href="https://www.glampingathonningtonfarm.com">Website</Anchor>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row overflow-hidden h-auto lg:mb-5">
        <img width="500" height="281" src={mercureImage} className="block h-auto flex-none lg:w-96" />
        <div className="p-4 flex flex-col flex-1 items-center lg:items-end justify-center leading-normal">
          <h2 className="font-bold">Mercure Hotel (5 minute drive)</h2>
          <p className="mt-5 text-center lg:text-right">8 Tonbridge Rd<br />Pembury<br />Tunbridge Wells<br />TN2 4QL</p>
          <div className="flex flex-row space-x-1">
            <Anchor href="https://goo.gl/maps/iRrAatnUo4ZWHft16">Google Maps</Anchor>
            <Anchor href="https://www.mercuretunbridgewells.co.uk">Website</Anchor>
          </div>
        </div>
      </div>
    </>
  );
}

