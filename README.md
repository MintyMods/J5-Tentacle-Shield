# J5-Tentacle-Shield

![White Labs Tentacle Shield for Arduino](/docs/tentacleshield.png)  

  
J5-Tentacle-Shield is a [Johnny-Five](http://johnny-five.io/) Plug in for the [WhiteBox Labs](https://www.whiteboxes.ch/) [Tentacle Shield for Arduino](https://www.whiteboxes.ch/shop/tentacle/) 

This plug in exposes up to four circuits from [Atlas Scientific](https://www.atlas-scientific.com/) as Johnny Five devices that can be controlled using JavaScript. 

```
    const five = require("johnny-five");
    const tentacle = require("j5-tentacle-shield")(five);
    const board = new five.Board();

    board.on("ready", () => {

        // poll sensors once per second
        board.samplingInterval(1000);

        
        let temp = new tentacle.Channel({
            controller: "ATLAS_EZO_RTD", // Default I2C address 102 (0x66)
            pin:"A",
            address: (0x61), // Override I2C address with 97 (0x61)
        });
        let orp = new tentacle.Channel({
            controller: "ATLAS_EZO_ORP", // Default I2C address 98 (0x62)
            pin:"B", // each channel requires a unique pin 
        });
        let ph = new tentacle.Channel({
            controller: "ATLAS_EZO_PH", // Default I2C address 99 (0x63)
            pin:"C",
        });
        let ec = new tentacle.Channel({
            controller: "ATLAS_EZO_EC", // Default I2C address 100 (0x64)
            pin:"D",
        });

        temp.on("change", function(reading) { // fires if the previous reading is different
            console.log("Temperature: " + reading.value + reading.unit); // e.g. 26.1°C
        });
        ph.on("data", function(reading) { // fires every reading as an event
            console.log("PH: " + reading.value); 
        });

    });

```
![Minty Hydro Box](/docs/MintyHydroBox1.png)  

These circuits can be mixed and matched in any combination and currently support the following types of sensors which can purchased from the White Box Labs [online shop](https://www.whiteboxes.ch/shop/) or directly from [Atlas Scientific](https://www.atlas-scientific.com/):-

 - Temperature (RTD) 
 - Electric Conductivity (E.C.) 
 - PH 
 - Dissolved Oxygen
 - Oxidation-Reduction Potential (ORP)



This is currently work in progress 

***@todo*** 

 - API
 - Tests
 - Documentation
 - Final Implementation
 - NPM package



![Minty Hydro Box](/docs/MintyHydroBox2.png)  