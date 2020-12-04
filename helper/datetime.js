const addZero = (i) => {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};
module.exports = {
  currentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = addZero(date.getMonth() + 1);
    const day = addZero(date.getDate());
    return day + "-" + month + "-" + year;
  },
  currentTime() {
    const date = new Date();
    const hour = addZero(date.getHours());
    const minute = addZero(date.getMinutes());
    const second = addZero(date.getSeconds());
    return hour + ":" + minute + ":" + second;
  },
  currentDateTime() {
    return this.currentDate() + " " + this.currentTime();
  },
  currentDateTimeYYYYMMDD() {
    const date = new Date();
    const year = date.getFullYear();
    const month = addZero(date.getMonth() + 1);
    const day = addZero(date.getDate());
    return year + "-" + month + "-" + day + " " + this.currentTime();
  },
};
