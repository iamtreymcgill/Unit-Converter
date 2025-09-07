/*
1 meter = 3.28084 feet
1 liter = 0.264172 gallon
1 kilogram = 2.20462 pound
*/
const FACTORS = { // create an object that holds the units and their conversion rate
    length: 3.28084,
    volume: 0.264172, 
    mass: 2.20462
}

const convertBtn = document.getElementById("convert-btn") // grabbing the convert button
const input = document.getElementById("input") // grabbing the input value

const lengthEl = document.getElementById("length") // length element <p>
const volumeEl = document.getElementById("volume") // volume element <p>
const massEl = document.getElementById("mass") // mass element <p>

convertBtn.addEventListener("click", function(){ // click button function
       render()
})

function convert(value, factor){ // converts the units 
    return {        // return an object that can be called 
        aToB: value * factor, // eg. meters to feet
        bToA: value / factor // eg. feet to meters
    }
}

function render(){
    let str = input.value // save input value, it's a string
    let num = Number(str) // convert string to a number
    
    let sections = [ // an array with objects of each unit
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

    for (let i = 0; i < sections.length; i++){ // loop between the sections array
        let section = sections[i] // save each section in the array
        let conversion = convert(num, section.factor) // call the convert function (saved number value, calls the factor key in sections with the FACTORS object value)
        section.el.innerHTML = `${num} ${section.units[0]} = ${conversion.aToB.toFixed(3)} ${section.units[1]} | ` + `${num} ${section.units[1]} = ${conversion.bToA.toFixed(3)} ${section.units[0]}` // renders the conversion
    }
}