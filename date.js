exports.getDate = function () {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  const currentDayName = today.toLocaleDateString("en-US", options);
  return currentDayName;
};
exports.getDay = function () {
  const today = new Date();
  const options = {
    weekday: "long",
  };
  const currentDayName = today.toLocaleDateString("en-US", options);
  return currentDayName;
};
