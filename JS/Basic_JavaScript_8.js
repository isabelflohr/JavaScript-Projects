function concan_sentence() {
    var half_one = "This is a";
    var half_two = " very short sentence.";
    var finished_sen = half_one.concat(half_two);
    document.getElementById("concanate").innerHTML = finished_sen;
}

function Slice() {
    var Sentence = "My favorite season is summertime.";
    var Section = Sentence.slice(22,32);
    document.getElementById("Sect_of_Sen").innerHTML = Section;
}

function words() {
    var F = 999
    document.getElementById("number_method").innerHTML = F.toString();
}

function Precision_M() {
    var K = 78965412.3567;
    document.getElementById("Pre_M").innerHTML = K.toPrecision(9);
}

function demo_func() {
    var num = 7.369158;
    var n = num.toFixed(3);
    document.getElementById("fixed").innerHTML = n;
}

function myFunction() {
    var num = 8945;
    var res = num.valueOf();
    document.getElementById("value").innerHTML = res;
}