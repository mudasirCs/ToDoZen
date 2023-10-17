const dateHandler = {
  getTodaysDate: function () {
    const today = new Date();
    return this.readableDate(today);
  },
  readableDate: function (date) {
    let locale = "en-US";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(locale, options);
  },
  validateDate: function (inputDate) {
    const today = new Date();
    if (inputDate >= today) {
      return this.readableDate(inputDate);
    } else {
      return this.readableDate(today);
    }
  },
};

export default dateHandler;
