// import moment here; use this package in each function
const moment = require('moment');

const today = () => {
  // write code for dates.today
  let date = moment().format('dddd');
  return date;
}

const calendar = () => {
  // write code for dates.calendar
  let cal = moment().format('MMM DD, yyyy');
  return cal;
}

const currentTime = () => {
  // write code for dates.currentTime
  let time = moment().format('hh:mm:ss A')
  return time
}

module.exports = {
  today,
  calendar,
  currentTime
}