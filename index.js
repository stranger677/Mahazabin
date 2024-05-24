const menuIcon =document.getElementById
("menuIcon");
const navmenu = document.getElementById
("menu");

menuIcon.addEventListener("click", ()=>{
    if(navmenu.className==="hidden"){
        navmenu.classList.remove("hidden");

    }else{
        navmenu.classList.add("hidden");

    }

});