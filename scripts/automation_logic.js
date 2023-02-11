function handleAutomation(am) {
    let outputarr = [];
    am.forEach(function (value, key) {
        let rawValue = Number(value.currValue);
        if (value.active) {
            let amplitude = (value.maxAmplitude * value.amplitude) / 2;
            let funValue= functionMap.get(value.function)(value.xoff)
            rawValue += map(funValue, -1, 1, -amplitude, amplitude);
            value.xoff += value.xspeed;
        }
        outputarr.push(rawValue);
    });
    return outputarr;
}

const automationMap = new Map();
automationMap.set("speed", {
    active: false,
    xoff: 0,
    xspeed: 0.1,
    amplitude: 1,
    currValue: 0,
    maxAmplitude: 0,
    function: "sin",
});
automationMap.set("smear", {
    active: false,
    xoff: 0,
    xspeed: 0.1,
    amplitude: 1,
    currValue: 0,
    maxAmplitude: 0,
    function: "sin",
});
automationMap.set("harmony", {
    active: false,
    xoff: 0,
    xspeed: 0.1,
    amplitude: 1,
    currValue: 0,
    maxAmplitude: 0,
    function: "sin",
});
automationMap.set("heat", {
    active: false,
    xoff: 0,
    xspeed: 0.1,
    amplitude: 1,
    currValue: 0,
    maxAmplitude: 0,
    function: "sin",
});

let functionMap = new Map();
functionMap.set("sin", (val) => sin(val));
functionMap.set("cos", (val) => cos(val));
functionMap.set("noise", (val) => noise(val));
