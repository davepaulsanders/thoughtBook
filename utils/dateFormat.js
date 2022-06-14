const { DateTime } = require("luxon");

const dateFormat = (date) => {
  return date.toLocaleString(DateTime.DATETIME_MED);
};

module.exports = dateFormat;
