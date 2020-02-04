function Call_Loop() {
    var Digit = "";
    var Y = 2;
    while (Y < 20) {
        Digit += "<br>" + Y;
        Y += 2;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function string_L () {
    var str = "this is my string.";
    var X = str.length;
    document.getElementById("demo").innerHTML = X;
}

var instruments = ["Trumpet", "Trombone", "Drums", "Piano", "Bass Guitar"];
var Content = "";
var X;
function for_Loop() {
    for (X = 0; X < instruments.length; X++) {
    Content += instruments[X] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function different_moods() {
    let Mood = [];
    Mood[0] = "happy";
    Mood[1] = "excited";
    Mood[2] = "hangry";
    Mood[3] = "calm";
    document.getElementById("Array").innerHTML = "One out of many emotions you can feel is " + Mood[3] + " is one of them.";
}

function constant_function() {
    const Salmon_Fishing = {type:"downriggers", brand:"Digi-Troll", use:"bottom tracking"};
    Salmon_Fishing.boat = "Boulton";
    Salmon_Fishing.reason = "sport and recreation";
    Salmon_Fishing.type = "GPS equiped downriggers";
    document.getElementById("Constant").innerHTML = "The purpose of the " + Salmon_Fishing.type + " is " + Salmon_Fishing.use;
    document.getElementById("Constant2").innerHTML = "My family uses " + Salmon_Fishing.brand + " " + Salmon_Fishing.use + " " + Salmon_Fishing.type + " when we fish for King Salmon in the Columbia River."
}
function cont_BreakLoop(){
    var text = "";
    var i;
    for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
    if (i === 9) {break;}
    document.getElementById("ConBre").innerHTML = text;
}
}