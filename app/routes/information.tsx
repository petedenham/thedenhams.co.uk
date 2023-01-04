import PageTitle from "~/components/page-title";

export default function Information() {
  return (
    <>
      <PageTitle>Information</PageTitle>

      <h2 className="text-lg font-bold">Contact</h2>
      <p className="mb-5">Need to get in touch? Email us at <a className="hover:underline" href="mailto:wedding@thedenhams.co.uk">wedding@thedenhams.co.uk</a>.</p>

      <h2 className="text-lg font-bold">Children</h2>
      <p className="mb-5">We have chosen to make this an adult only affair. We hope you understand. If you have any issues please talk to one of us directly.</p>

      <h2 className="text-lg font-bold">Dress code</h2>
      <p className="mb-5">Anything as long as you feel fabulous.. and its not a wedding dress.</p>

      <h2 className="text-lg font-bold">Taxis</h2>
      <p className="mb-2">If you are staying at the premier inn then you can walk it (but ladies you might want flats or to grab a pair of the complimentary flip flops)</p>
      <p className="mb-2">Any further a field you'll likely want a taxi and we highly recommend booking these in advance.</p>
      <p className="mb-2">Some local numbers are:</p>
      <p className="mb-2">Adam - 01732 364455 (Recommended by venue. Can do 8 seaters.)</p>
      <p className="mb-2">Castle Cars - 01732 363637</p>
      <p className="mb-5">Uber does operate in the area but it can be a long wait at the moment to connect to a driver so we wouldn't recommend risking it!</p>

      <h2 className="text-lg font-bold">Gifts</h2>
      <p className="mb-5">Coming soon.</p>

      <h2 className="text-lg font-bold">Timetable</h2>
      <p className="mb-2">1pm Arrival P.s The bar closes half an hour before the ceremony so come at 12:30pm if you want a drink 😜</p>
      <p className="mb-2">1:30pm Ceremony 👰 🤵</p>
      <p className="mb-2">4pm Time to feast 🥘</p>
      <p className="mb-2">7:30pm Put on your dancing shoes 💃</p>
      <p className="mb-2">12:30am Last song 🎶</p>
      <p className="mb-2">12:45am Taxis! 🚕</p>
    </>
  );
}
