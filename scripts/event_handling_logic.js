function handleCheckBox(name, element) {
    let extraContBar = (document.getElementsByClassName("extra-control-" + name))[0]
    if (element.checked) {
        extraContBar.style.opacity = 1
    }
    else {
        extraContBar.style.opacity = 0.3
    }
    let nn = automationMap.get(name).active = element.checked
}
const button = document.querySelector("#show-btn");
const extraBar = document.querySelector("#extra-bar")
let angle = 0;

button.addEventListener("click", function () {
    angle += 180;
    button.style.transform = `rotate(${angle}deg)`;
    if (extraBar.style.height === "0rem" || !extraBar.style.height) {
        console.log("showing")
        extraBar.style.height = "10rem"

    }
    else {
        console.log("collapsing", extraBar.style.height)
        extraBar.style.height = "0rem"
    }

});