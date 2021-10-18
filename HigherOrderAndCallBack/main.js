// 1
const addOne = (arr) => {
  let result = [];
  arr.forEach((number, i) => {
    result.push(number);
  });
  return result;
};

// 2
const addExclamation = (arr) => {
  let result = [];
  arr.forEach((number, i) => {
    result.push(number + "!");
  });
  return result;
};

// 3
const addOneByMap = (arr) => {
  let result = arr.map((item) => {
    return item + 1;
  });
  return result;
};

// 4
const addQuestion = (arr) => {
  let result = arr.map((item) => {
    return item + "?";
  });
  return result;
};

// 5
const forLoopTwoToThe = (arr) => {
  let result = arr.map((item, i) => {
    return Math.pow(2, item);
  });
  return result;
};

// 6
const typeNum = (arr) => {
  let result = arr.filter((item) => {
    return typeof item === "number";
  });
  return result;
};

// 7
const containsAnd = (arr) => {
  let result = arr.filter((item) => {
    return item.includes("and");
  });
  return result;
};

// 8
const oddValues = (arr) => {
  let result = arr.filter((item) => {
    return item % 2 == 1;
  });
  return result;
};

// 9
const addValues = (arr) => {
  let result = arr.reduce((acc, item) => {
    return acc + item;
  }, 0);
  return result;
};

// 10
const countNumberOfElements = (arr) => {
  let result = arr.reduce((acc, item, i) => {
    return i;
  }, 0);
  return result + 1;
};

// Extra

//1
const items = [
  {
    item: "switch",
    purchasePrice: 399,
  },
  {
    item: "nike",
    purchasePrice: 150,
  },
];

const addPurchases = (arr) => {
  let result = arr.reduce((acc, item, i) => {
    return acc + item.purchasePrice;
  }, 0);
  return result;
};

// 2
const sortNumbers = (arr) => {
  let result = arr.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  return arr;
};

// 3
const sortBackwards = (arr) => {
  let result = arr.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  });
  return arr;
};
