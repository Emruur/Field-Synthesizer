let speedSlider = document.getElementById("ss")
	let smearSlider = document.getElementById("cs")
	let harmonySlider = document.getElementById("hs")
	let heatSlider = document.getElementById("ws")

	automationMap.get("speed").currValue = speedSlider.defaultValue
	automationMap.get("smear").currValue = smearSlider.defaultValue
	automationMap.get("harmony").currValue = harmonySlider.defaultValue
	automationMap.get("heat").currValue = heatSlider.defaultValue

	automationMap.get("speed").maxAmplitude = speedSlider.max - speedSlider.min
	automationMap.get("smear").maxAmplitude = smearSlider.max - smearSlider.min
	automationMap.get("harmony").maxAmplitude = harmonySlider.max - harmonySlider.min
	automationMap.get("heat").maxAmplitude = heatSlider.max - heatSlider.min

	function speed(value) {
		automationMap.get("speed").currValue = value
		showParams()
	}
	function smear(value) {
		automationMap.get("smear").currValue = value
		showParams()
	}
	function harmony(value) {
		automationMap.get("harmony").currValue = value
		showParams()
	}
	function heat(value) {
		automationMap.get("heat").currValue = value
		showParams()
	}
	function showParams() {
		console.log("automation map ", automationMap)
	}

	console.log("automation map init: ", automationMap)
