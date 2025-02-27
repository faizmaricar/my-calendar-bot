const { parse, formatRFC3339, addMinutes, addHours } = require("date-fns");

function getStartAndEndTime(prayerDate, time) {
  const dateFormat = "yyyy-MM-dd h:mmaaa";
  const date = new Date();
  const datetimestring = `${prayerDate} ${time}`;

  const startTime = formatRFC3339(
    addHours(parse(datetimestring, dateFormat, date), -8)
  );
  const endTime = formatRFC3339(addMinutes(startTime, 5));

  return [startTime, endTime];
}

module.exports = getStartAndEndTime;
