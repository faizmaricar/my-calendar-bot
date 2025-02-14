const axios = require("axios").default;

async function getPrayerTimes(v) {
  var options = {
    method: "GET",
    url: "https://www.muis.gov.sg/api/pagecontentapi/GetPrayerTime",
    params: { v },
    headers: {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
}

module.exports = getPrayerTimes;
