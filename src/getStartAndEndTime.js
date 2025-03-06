const { parse, addMinutes, addHours } = require("date-fns");

function getStartAndEndTime(prayerDate, time) {
  const dateFormat = "yyyy-MM-dd h:mmaaa";
  const date = new Date();
  const datetimestring = `${prayerDate} ${time}`;

  const startTime = addHours(parse(datetimestring, dateFormat, date), 16);
  const endTime = addMinutes(startTime, 5);

  return [startTime, endTime];
}

module.exports = getStartAndEndTime;
