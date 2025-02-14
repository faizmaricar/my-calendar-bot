require("dotenv").config();

const createEvent = require("./createEvent");
const getPrayerTimes = require("./getPrayerTimes");

const now = Date.now();

getPrayerTimes(now).then((res) => {
  const { PrayerDate, Hijri, Syuruk, ...prayers } = res;

  for (let prayer in prayers) {
    const time = prayers[prayer];
    const event = createEvent(prayer, PrayerDate, time);

    addEventToGoogleCalendar(event)
      .then((response) => console.log("Event created:", response.data.htmlLink))
      .catch((error) => console.error("Error creating event:", error));
  }
});
