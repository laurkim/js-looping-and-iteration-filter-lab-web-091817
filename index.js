// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function(driver) {
    return driver.toUpperCase() === name.toUpperCase();
  });
};

function fuzzyMatch(drivers, chars) {
  return drivers.filter(function(driver) {
    charsLength = chars.length;
    let driverChars = driver.slice(0, charsLength);
    return driverChars === chars;
  });
};

function matchName(drivers, name) {
  return drivers.filter(function(driver) {
      return driver.name === name;
  });
};
