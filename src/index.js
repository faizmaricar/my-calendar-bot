require("dotenv").config();

const { format } = require("date-fns");
const addEventToGoogleCalendar = require("./addEventToGoogleCalendar");
const createEvent = require("./createEvent");
const getPrayerTimes = require("./getPrayerTimes");

const now = Date.now();
const today = format(now, "yyyy-MM-dd");

getPrayerTimes(today).then((res) => {
  const { hijri_date, ...prayers } = res;
  console.log(today);
  //  for (let prayer in prayers) {
  //    const time = prayers[prayer];

  //    const event = createEvent(
  //      prayer.charAt(0).toUpperCase() + prayer.slice(1),
  //      today,
  //      time
  //    );

  //    addEventToGoogleCalendar(event)
  //      .then((response) => console.log("Event created:", response.data.htmlLink))
  //      .catch((error) => console.error("Error creating event:", error));
  //  }
});
