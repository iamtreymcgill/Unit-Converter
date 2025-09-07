/*
1 meter = 3.28084 feet
1 liter = 0.264172 gallon
1 kilogram = 2.20462 pound
*/
const FACTORS = {
    length: 3.28084,
    volume: 0.264172, 
    mass: 2.20462
}

const convertBtn = document.getElementById("convert-btn")
const input = document.getElementById("input")

const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

convertBtn.addEventListener("click", function(){
       render()
})

function convert(value, factor){
    return {
        aToB: value * factor, 
        bToA: value / factor
    }
}

function render(){
    let str = input.value
    let num = Number(str)
    
    let sections = [
        {
            el: lengthEl, 
            factor: FACTORS.length,
            units: ["meters","feet"]
        },
        {
            el: volumeEl,
            factor: FACTORS.volume, 
            units: ["liters", "gallons"]
        },
        {
            el: massEl,
            factor: FACTORS.mass, 
            units: ["kilos", "pounds"]
        }
    ]

    for (let i = 0; i < sections.length; i++){
        let section = sections[i]
        let conversion = convert(num, section.factor)
        //20 meters = 65.616 feet | 20 feet = 6.096 meters
        section.el.innerHTML = `${num} ${section.units[0]} = ${conversion.aToB.toFixed(3)} ${section.units[1]} | ` + `${num} ${section.units[1]} = ${conversion.bToA.toFixed(3)} ${section.units[0]}`
    }
}