// Function 1: `saturdayFun`
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// Function 2: `mondayWork`
const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// Function 3: `wrapAdjective`
function wrapAdjective(wrapper = "*") {
  return function (adjective = "special") {
    return `You are ${wrapper}${adjective}${wrapper}!`;
  };
}
