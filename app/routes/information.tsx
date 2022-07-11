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
      <p className="mb-5">As long as you feel fabulous.</p>

      <h2 className="text-lg font-bold">Gifts</h2>
      <p className="mb-5">Coming soon.</p>

      <h2 className="text-lg font-bold">Timetable</h2>
      <p className="mb-5">Coming soon.</p>
    </>
  );
}
