"use strict";

const five = require("johnny-five");
const Plugin = require("../");
const board = new five.Board();

board.on("ready", () => {
  const plugin = new Tentacle({
    pin: "A0"
  });

  plugin.on("data", data => {
    console.log("Tentacle:", data);
  });
});