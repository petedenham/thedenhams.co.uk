import { google } from "googleapis";

export async function addGuestsToSpreadsheet(guests) {
  const spreadsheetId = process.env.SPREADSHEET_ID;
  const range = "Sheet1!A:D";
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY,
    },
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
    ],
  });

  const client = await auth.getClient(); 
  const sheets = google.sheets({ version: "v4", auth: client });

  return await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: guests
    },
  });
}
