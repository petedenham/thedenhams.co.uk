import PageTitle from "~/components/page-title";
import { useState } from "react";
import { json } from "@remix-run/node";
import { useActionData, useSubmit, useTransition } from "@remix-run/react";
import { chunkArray } from "~/utils/chunk-array";
import { addGuestsToSpreadsheet } from "~/utils/add-guests-to-spreadsheet.server";
import ThankYou from "~/components/thank-you";

export async function action({ request }) {
  const body = await request.formData();
  const guests = chunkArray([...body.values()], 4);
  const response = await addGuestsToSpreadsheet(guests);

  // Validate the body
  // Send email
  // Error handling

  const success = true;
  const status = 200;

  return json({ success }, { status });
}

export default function Rsvp() {
  const [numberOfGuests, setNumberOfGuests] = useState(false);
  const submit = useSubmit();
  const transition = useTransition();
  const actionData = useActionData();
  const isSuccess = actionData?.success ?? false;

  function handleSelect(event) {
    const { value } = event.target;

    setNumberOfGuests(parseInt(value));
  }

  if(isSuccess) {
    return <ThankYou />;
  }

  if(!numberOfGuests) {
    return (
      <>
        <PageTitle>RSVP</PageTitle>

        <label htmlFor="numberOfGuests" className="mb-2">How many guests are you responding for?</label>
        <select id="numberOfGuests" onChange={handleSelect} className="border border-primary p-1 w-full">
          <option>Please Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </>
    )
  }

  const ordinalNames = ["first", "second", "third", "forth", "fifth"];

  return (
    <>
      <PageTitle>RSVP</PageTitle>

      <form method="post">
        {[...Array(numberOfGuests).keys()].map(i => (
          <fieldset key={i} className="mb-5">
            <legend className="font-bold mb-5">{`Who is the ${ordinalNames[i]} guest?`}</legend>
            <div className="flex flex-col mb-2 items-start">
              <label htmlFor={`attend_{i}`} className="mb-2">Can they attend?</label>
              <select name={`guest[${i}][attend]`} id={`attend_{i}`} required className="border border-primary p-1 w-full">
                <option value="">Please select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor={`fullname_${i}`} className="mb-2">What is their full name?</label>
              <input name={`guest[${i}][name]`} id={`fullname_${i}`} type="text" required className="border border-primary p-1" />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor={`email_{i}`} className="mb-2">What is their email address?</label>
              <input name={`guest[${i}][email]`} id={`email_{i}`} type="email" required className="border border-primary p-1" />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor={`dietary_{i}`} className="mb-2">Do they have any dietary requirements?</label>
              <input name={`guest[${i}][dietary]`} id={`dietary_{i}`} type="text" className="border border-primary p-1" />
            </div>
          </fieldset>
        ))}

        <button type="submit" className="border-primary border-2 hover:bg-primary hover:text-white border px-10 py-2 inline-block active:translate-y-1" disabled={transition.state === "submitting"}>Submit</button>
      </form>
    </>
  );
}
