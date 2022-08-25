window.onload = function () {
    window.min_menu_opacity = "0";
    window.min_menu_scale = "0.3";
    window.cover_blur = "2px";
    window.cover_color = "rgba(0,0,0,.2)";
    window.cover = document.getElementById("cover");
    window.menu = document.getElementById("menu_box");
    window.menu_top = document.getElementById("menu_top");
    window.menu_bottom = document.getElementById("menu_bottom");
}

function menu_show() {
    if(cover.getAttribute("show")=="false"){
        cover.style.display="inline";
        menu.style.display = "block";
        
        menu_top.style.top="20px";
        menu_bottom .style.bottom="20px";
        menu_top.style.transform="rotate(45deg)";
        menu_bottom .style.transform="rotate(-45deg)";
        setTimeout(menu_animation,20);
    }
    else{
        cover.setAttribute("style", "backdrop-filter:blur(0px)");
        cover.style.backgroundColor = "rgba(0,0,0,.0)";
        cover.style.display = "inline";
        
        menu.style.opacity = min_menu_opacity;
        menu.style.transform="scale("+min_menu_scale+")";
        menu.style.display = "block";
        
        menu_top.style.top="13px";
        menu_bottom .style.bottom="13px";
        menu_top.style.transform="rotate(0deg)";
        menu_bottom .style.transform="rotate(0deg)";
        setTimeout(menu_animation,300);
    }
}(window)
function menu_animation(){
    if(cover.getAttribute("show")=="false"){
        cover.setAttribute("style","backdrop-filter:blur("+cover_blur+")");
        cover.style.backgroundColor = cover_color;
        cover.style.display = "inline";
        
        menu.style.opacity="1";
        menu.style.transform="scale(1)";
        menu.style.display="block";
        cover.setAttribute("show","true");
    }
    else{
        cover.style.display="none";
        menu.style.display="none";
        cover.setAttribute("show","false");
    }
}