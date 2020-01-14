function fave_DJs () {
    var Genre = {
        House: "Tchami",
        Riddim: "He$h",
        Dubstep: "Virtual Riot",
    }
    delete Genre.Dubstep;
    document.getElementById("Dictionary").innerHTML = Genre.Dubstep;
}