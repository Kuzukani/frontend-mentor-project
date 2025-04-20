function toggle(button){
    let x = document.getElementById(button);
    if(x.hasAttribute("class")){
        x.removeAttribute("class");
    }else{ 
        var body = document.getElementsByClassName("active-button");
        if(body.length==0){
            x.setAttribute("class","active-button");
        }else{
            body[0].removeAttribute("class");
            x.setAttribute("class","active-button");
        }
    }
}
//i dont know anymore what am i doing just drag and drop some line of code and it works!! wow!!! such a miracle haha