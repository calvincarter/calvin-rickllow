// This function allows us to insert commas into the right places in Numbers >= 1,000 with the help of regexs
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// This function allows us to convert a UTC/ISO date to a Locale-specific format (for us in the U.S., it's the full weekday
// in English, followed by the full month in English, then the day as a number, then the year as a number) without 
// changing the value of the actual date.  The Date object allows us to convert a UTC date to a locale-specific format with the
// toLocaleDateString method, but it sometimes changes the date to the day before, because it uses the locale's timezone.  
// This function prevents that.  Taken straight from a stackoverflow article -     
// https://stackoverflow.com/questions/55427168/is-there-a-function-to-get-the-utc-date-in-the-locale-string-format
function isoToLocale(date, locale, options) {
  const timeDiff = date.getTimezoneOffset() * 60000;
  const adjustedDate = new Date(date.valueOf() + timeDiff);
  return adjustedDate.toLocaleDateString(locale, options);
}

export { numberWithCommas, isoToLocale };