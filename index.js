#!/usr/bin/env node
const draculaFlow1 = require("./draculaFlow1.json");
const draculaFlow2 = require("./draculaFlow2.json");
const draculaFlow3 = require("./draculaFlow3.json");
const draculaFlow4 = require("./draculaFlow4.json");
const draculaFlow5 = require("./draculaFlow5.json");

const draculaFlows = [
  draculaFlow1,
  draculaFlow2,
  draculaFlow3,
  draculaFlow4,
  draculaFlow5,
];

function getRandomQuote(flow) {
  let file = [];
  if (flow && flow >= 1 && flow <= 5) {
    file = draculaFlows[flow - 1];
    return file[Math.floor(Math.random() * file.length)];
  } else {
    const allQuotes = draculaFlows.flatMap((str) => str);
    return allQuotes[Math.floor(Math.random() * allQuotes.length)];
  }
}

const args = process.argv;
if (args.length >= 3) {
  const number = args[2];
  if (!number || isNaN(Number(number))) {
    console.log("Usage: darcula-flow <number> (optional)");
    return 1;
  }
  console.log(getRandomQuote(number));
  return 0;
} else {
  console.log(getRandomQuote());
  return 0;
}
