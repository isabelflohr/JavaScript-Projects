var R = 2
function multiply_num() {
    document.write(90 * R +"<br>");
}
multiply_num()

function sub_num() {
    var X = 17
    document.write(22 - X +"<br>");
    document.write(6 - R +"<br>");
}
sub_num()

function current_time() {
    if (new Date().getHours() < 23) {
        document.getElementById("all_day").innerHTML= "Hello There!";
    }
}

if (77 <222) {
    document.write("Numbers are not equal");
}

function Use_internet() {
    Age = document.getElementById("Age").value;
    if (Age >= 13) {
        Log_on = "Thank you! You can continue your research online.";
    }
    else {
        Log_on = "Sorry, you need to get a parent or guardian's consent before you log on. When You have it, have them enter their age in the space.";
    }
    document.getElementById("continue").innerHTML = Log_on;
}