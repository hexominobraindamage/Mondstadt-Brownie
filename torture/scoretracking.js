const grade = 
{
"SSS+": 1,
"SSS": 2,
"SS+": 3,
"SS": 4,
"S+": 5,
"S": 6,
"AAA+": 7,
"AAA": 8,
"AA+": 9,
"AA": 10,
"A+": 11,
"A": 12,
"B": 13,
"C": 14,
"D": 15,
"F": 16,
};

const color = {
"SSS+": "#00E3FF", 
"SSS": "#00E3FF", 
"SS+": "#FFC900",
"SS": "#FFC900",
"S+": "#FFC900",
"S": "#FFC900",
"AAA+": "#AFAFAF",
"AAA": "#AFAFAF",
"AA+": "#844400",
"AA": "#844400",
"A+": "#844400",
"A": "#844400",
"B": "#00FF90",
"C": "#00FF90",
"D": "#00FF90",
"F": "#00FF90",
};

const cleartype= {
    "Perfect Game": 1,
    "Ultimate Game": 2,
    "Extreme Game": 3,
    "Superb Game": 4,
    "Marvelous Game": 5,
    "Talented Game": 6,
    "Fair Game": 7,
    "Rough Game": 8,
};

let perfectCount = parseInt(document.getElementById("pf").value);
let greatCount = parseInt(document.getElementById("gr").value);
let goodCount = parseInt(document.getElementById("gd").value);
let badCount = parseInt(document.getElementById("bd").value);
let missCount = parseInt(document.getElementById("ms").value);
let maxcombo = parseInt(document.getElementById("mc").value);
let notecount = parseInt(document.getElementById("nc").value); // TODO: get this automatically from a specific chart

function updateValue(){
let inputs = [
document.getElementById("pf"),
document.getElementById("gr"),
document.getElementById("gd"),
document.getElementById("bd"),
document.getElementById("ms"),
document.getElementById("mc"),
document.getElementById("nc"),
];
inputs.forEach((input) => {
    input.value = input.value.replace(/[^0-9]/g, "");
})
}


