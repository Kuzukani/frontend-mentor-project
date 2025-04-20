function openNav(){
    document.getElementById("mySidenav").style.width = "70%";
    //document.body.style.backgroundColor = "rgba(0,0,0,0.4)" <-- original version remain area menu will click able

    document.getElementById("overlay").style.display = "block"
    document.getElementById("overlay").style.backgroundColor = "rgba(0,0,0,0.4)"
}
function closeNav(){
    document.getElementById("mySidenav").style.width = "0";
    //document.body.style.backgroundColor = "white" <-- original version remain area menu will click able

    document.getElementById("overlay").style.display = "none"
    document.getElementById("overlay").style.backgroundColor = "transparent"
}