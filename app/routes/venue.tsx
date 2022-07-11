import PageTitle from "~/components/page-title";
import Anchor from "~/components/anchor";
import firstVenueImage from "~/assets/images/venue-1.jpg";
import secondVenueImage from "~/assets/images/venue-2.jpg";

export default function Venue() {
  return (
    <>
      <PageTitle>Venue</PageTitle>

      <div className="flex flex-col lg:flex-row lg:mb-5">
        <img height="500" width="500" src={firstVenueImage} />
        <div className="p-4 flex flex-col flex-1 justify-center items-center leading-normal">
          <iframe className="mb-5" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10004.402058667758!2d0.2891556!3d51.1803703!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaee7c176b61a9df9!2sOak%20Tree%20Barn%20Weddings!5e0!3m2!1sen!2suk!4v1657569166210!5m2!1sen!2suk" width="400" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <p className="text-center">Oak Tree Cottage<br />Pembury Rd<br />Tonbridge<br />TN11 0NB</p>
          <Anchor href="https://g.page/oaktreebarnweddings?share">Link to Google Maps</Anchor> 
        </div>
      </div> 

      <div className="flex flex-col lg:flex-row-reverse lg:mb-5">
        <img height="500" width="500" src={secondVenueImage} />
        <div className="p-4 flex flex-col flex-1 justify-center items-center leading-normal text-center">
          <h2 className="mb-2 font-bold text-lg">Getting there</h2>
          <p className="mb-2">The venue is located between Tonbrige and Royal Tunbridge Wells.</p>
          <p>It is situated just off of the A21, with easy access to the M25. There are regular direct trains from London Bridge to Tonbridge in around 40 minutes. Tonbridge station is 5 minutes in a taxi to the venue.</p>
          <Anchor href="https://www.oaktreebarnweddings.com/">Oak Tree Barn Weddings</Anchor> 
        </div>
      </div> 
    </>
  );
}

