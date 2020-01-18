function Voting_Function() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value
    Can_Vote = (Age < 18) ? "You are too young ":"You are old enough ";
    document.getElementById("Vote").innerHTML = Can_Vote + "to vote."
}