#!/usr/bin/env node

const fs = require("fs");

const dir = "../json";

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const getRandomNum = (max) => {
  if (!max) {
    return 0;
  }

  return Math.floor(Math.random() * max);
};

const getRandomTime = () => {
  const hour = getRandomNum(24);
  const min = getRandomNum(60);
  const sec = getRandomNum(60);
  const date = new Date(2022, 0, 1, hour, min, sec);
  return date.toISOString();
};

const userIds = Array.from(Array(100).keys()).map((key) => key + 1);
const pageTitles = "ABCDEFGHIJ".split("");

const data = Array.from(Array(1000)).map(() => {
  return {
    timeStamp: getRandomTime(),
    userID: userIds[getRandomNum(100)],
    pageTitle: pageTitles[getRandomNum(10)],
  };
});

const jsonData = JSON.stringify(data, null, 2);

console.log("Writing to JSON data to file");

fs.writeFileSync(`${dir}/chartData.json`, jsonData);

console.log("File write complete!!");
