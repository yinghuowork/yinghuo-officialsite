function menu_show(){
    var cover = document.getElementById("cover");
    var menu = document.getElementById("menu_box");
    var menu_top = document.getElementById("menu_top");
    var menu_bottom = document.getElementById("menu_bottom");
    if(cover.getAttribute("show")=="false"){
        cover.style.display="inline";
        menu.style.display="block";
        menu_top.style.top="20px";
        menu_bottom .style.bottom="18px";
        menu_top.style.transform="rotate(45deg)";
        menu_bottom .style.transform="rotate(-45deg)";
        setTimeout(menu_animation,30);
    }
    else{
        cover.style.backgroundColor="rgba(0,0,0,.0)";
        cover.setAttribute("style","backdrop-filter:blur(0px)");
        menu.style.opacity="0";
        menu.style.transform="scale(0.3)";
        cover.style.display="inline";
        menu.style.display="block";
        menu_top.style.top="13px";
        menu_bottom .style.bottom="13px";
        menu_top.style.transform="rotate(0deg)";
        menu_bottom .style.transform="rotate(0deg)";
        setTimeout(menu_animation,300);
    }
}
function menu_animation(){
    var cover = document.getElementById("cover");
    var menu = document.getElementById("menu_box");
    if(cover.getAttribute("show")=="false"){
        cover.setAttribute("style","backdrop-filter:blur(2px)");
        cover.style.backgroundColor="rgba(0,0,0,.6)";
        menu.style.opacity="1";
        menu.style.transform="scale(1)";
        cover.style.display="inline";
        menu.style.display="block";
        cover.setAttribute("show","true");
    }
    else{
        cover.style.display="none";
        menu.style.display="none";
        cover.setAttribute("show","false");
    }
}