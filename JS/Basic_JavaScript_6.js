function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short " : "You are tall enough ";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride";
}

function subtract_One() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Subtract_From = 100;
        function Minus_five() {Subtract_From -= 5;}
    Minus_five();
        return Subtract_From;
    }
}