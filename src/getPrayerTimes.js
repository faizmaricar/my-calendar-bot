const axios = require("axios").default;

async function getPrayerTimes(today) {
  var options = {
    method: "GET",
    url: "https://isomer-user-content.by.gov.sg/muis_prayers_timetable_2025.json",
    params: {},
    headers: {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      return response.data[today];
    })
    .catch(function (error) {
      console.error(error);
    });
}

module.exports = getPrayerTimes;
