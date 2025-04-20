function show(){
    document.getElementById("dropDown").style.display = "block";
    document.getElementById("burger").setAttribute("onclick","hide()");
}
function hide(){
    document.getElementById("dropDown").style.display = "none";
    document.getElementById("burger").setAttribute("onclick","show()");
}