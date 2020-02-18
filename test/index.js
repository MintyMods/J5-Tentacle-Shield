"use strict";

const five = require("johnny-five");
const Plugin = require("../");
const board = new five.Board();

board.on("ready", () => {
  const plugin = new Plugin({
    pin: "A0"
  });

  plugin.on("data", data => {
    console.log(data);
  });
});