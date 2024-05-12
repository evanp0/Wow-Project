let plotButton = document.getElementById("plotButton");
let sideInput = document.getElementsByName("side")
let yardInput = document.getElementById("yardInput");
let inOutInput = document.getElementsByName("inOut")
let stepsInput = document.getElementById("stepsInput");
let hashInput = document.getElementsByName("vH")
let hashSteps = document.getElementById("hashSteps");
let frontBackInput = document.getElementsByName("frontBack")
let circ = document.getElementById("circle")
let stepSize = '7.75'
let x
let y
plotButton.addEventListener("click", function () {
    let side = 0;
    if (sideInput[0].checked) side = 1;
    if (sideInput[1].checked) side = 2;

    let inOut = 0;
    if (inOutInput[0].checked) inOut = 1;
    if (inOutInput[1].checked) inOut = 2;

    let hashVH = 0;
    if (hashInput[0].checked) hashVH = 1;
    if (hashInput[1].checked) hashVH = 2;

    let frontBack = 0;
    if (frontBackInput[0].checked) frontBack = 1;
    if (frontBackInput[1].checked) frontBack = 2;

    let yard = yardInput.value;
    let steps = stepsInput.value;
    let hash = hashSteps.value;

    if (side === 0 || inOut === 0 || hashVH === 0 || frontBack === 0 || yard === "" || steps === "" || hash === "") {
        alert("Please fill in all values!");
    } else if((yard > 50 || yard < 0)){
        alert("Please choose a yard line between 0 and 50!");
    } else if((steps > 8 || steps < 0)){
        alert("Please choose between 0 and 8 steps away from the yard line!")
    } else if((hash > 28 || hash < 0)){
        alert("Please choose between 0 and 28 steps away from the hash!")
    } else {
        circ.style.visibility = 'visible'
        //find x coordinate
        if (side === 1){
            //Determine yard line
            x = (952 - (123 * ((50 - yardInput.value) / 10))).toString()
            if (inOut === 1){
                //steps inside
                x = (parseInt(x) + (stepsInput.value * stepSize)).toString()
            } else {
                //steps outside
                x = (parseInt(x) - (stepsInput.value * stepSize)).toString()
            }
        } else {
            x = (952 + (123 * ((50 - yardInput.value) / 10))).toString()
            if (inOut === 1){
                //steps inside
                x = (parseInt(x) - (stepsInput.value * stepSize)).toString()
            } else {
                //steps outside
                x = (parseInt(x) + (stepsInput.value * stepSize)).toString()
            }
        }
        circ.style.marginLeft = x.concat('px')
        //find y coordinate
        if (hashVH === 1){
            //position on VH
            y = (383 + (14 * stepSize)).toString()
            if (frontBack === 1){
                y = (parseInt(y) - (hashSteps.value * stepSize)).toString()
            } else {
                y = (parseInt(y) + (hashSteps.value * stepSize)).toString()
            }
        } else {
            //position on HH
            y = (383 - (14 * 7.75)).toString()
            if (frontBack === 1){
                y = (parseInt(y) - (hashSteps.value * stepSize)).toString()
            } else {
                y = (parseInt(y) + (hashSteps.value * stepSize)).toString()
            }
        }
        circ.style.marginTop = y.concat('px')
    }
})