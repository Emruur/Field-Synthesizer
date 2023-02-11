let field;

function setup() {
    background(0);
    createCanvas(windowWidth, windowHeight);
    field = new Field(40);
}

function draw() {
    const [speedValue, smearValue, harmonyValue, heatValue] = handleAutomation(automationMap);
	console.log("Processed: ",speedValue,smearValue,harmonyValue,heatValue)
    background(0, smearValue);
    field.update(speedValue, harmonyValue);
    field.draw(heatValue);
}

