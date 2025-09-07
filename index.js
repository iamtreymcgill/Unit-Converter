/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convert-btn")
const input = document.getElementById("input")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

convertBtn.addEventListener("click", function(){
        lengthConverter()
        volumeConverter()
        massConverter()
})

function lengthConverter (){
    let meter = Number(input.value) / 3.28084
    let feet = Number(input.value) * 3.28084
    length.textContent = `${input.value} meters = ${feet.toFixed(3)} feet | ${input.value} feet = ${meter.toFixed(3)} meters`
    // console.log(`${feet.toFixed(3)} ft ${meter.toFixed(3)} m`)
}
function volumeConverter (){
    let liter = Number(input.value) / 0.264172
    let gallon = Number(input.value) * 0.264172
    volume.textContent = `${input.value} liters = ${gallon.toFixed(3)} gallons | ${input.value} gallons = ${liter.toFixed(3)} liters`
    // console.log(`${liter.toFixed(3)} liters ${gallon.toFixed(3)} gallons`)
}
function massConverter (){
    let kg = Number(input.value) / 2.20462
    let lb = Number(input.value) * 2.20462
    mass.textContent = `${input.value} kilos = ${lb.toFixed(3)} pounds | ${input.value} pounds = ${kg.toFixed(3)} kilos`
    // console.log(`${kg.toFixed(3)} kilos ${lb.toFixed(3)} pounds`)
}

