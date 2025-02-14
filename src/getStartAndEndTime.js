const { parse, formatRFC3339, addMinutes, addHours } = require("date-fns");

function getStartAndEndTime(prayer, prayerDate, time) {
  const period = prayer === "Subuh" ? "AM" : "PM";
  const dateFormat = "dd MMMM yyyy h:mm a";
  const date = new Date();

  const datetimestring = `${prayerDate} ${time} ${period}`;

  const startTime = formatRFC3339(
    addHours(parse(datetimestring, dateFormat, date), -8)
  );
  const endTime = formatRFC3339(addMinutes(startTime, 5));

  return [startTime, endTime];
}

module.exports = getStartAndEndTime;
