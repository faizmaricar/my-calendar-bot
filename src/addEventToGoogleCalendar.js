const { google } = require("googleapis");

function addEventToGoogleCalendar(event) {
  const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_CREDENTIALS,
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });

  const calendar = google.calendar({ version: "v3", auth });

  return calendar.events.insert({
    calendarId: process.env.CALENDAR_ID,
    resource: event,
  });
}

module.exports = addEventToGoogleCalendar;
