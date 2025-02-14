const getStartAndEndTime = require("./getStartAndEndTime");

function createEvent(summary, date, time) {
  const timeZone = "Asia/Singapore";
  const [startTime, endTime] = getStartAndEndTime(summary, date, time);

  return {
    summary,
    start: {
      dateTime: startTime,
      timeZone,
    },
    end: {
      dateTime: endTime,
      timeZone,
    },
    reminders: {
      useDefault: false,
      overrides: [{ method: "popup", minutes: 0 }],
    },
  };
}

module.exports = createEvent;
