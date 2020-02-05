function Dinner_choices() {
    var dinner;
    var Dinners = document.getElementById("dinner_Choices").value;
    var dinner_string = " sounds delicious!";
    switch(Foods) {
        case "Spaghetti":
        dinner = "Spaghetti" + dinner_string;
        break;
        case "Tacos":
        dinner = "Tacos" + dinner_string;
        break;
        case "Steak":
        dinner = "Steak" + dinner_string;
        break;
        case "French Toast":
        dinner = "French Toast" + dinner_string;
        break;
        default:
        dinner = "Type your choice exactly";
    }
    document.getElementById("output").innerHTML = dinner;
}

function Random_func() {
    var Z = document.getElementsByClassName("random");
    Z[0].innerHTML = "Goodbye";
}

    var c = document.getElementsById("canvas");
    var ctx = c.getContext("2d");
    var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
    grd.addColorStop(0, "pink");
    grd.addColorStop(1, "chartreuse");
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80)
