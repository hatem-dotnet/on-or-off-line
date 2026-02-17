let title=document.querySelector(".title");
let ul=document.querySelector("ul");
let reload=document.querySelector(".reload");


window.onload=function(){
    if(window.navigator.onLine){
         online()
    }else{
        offline()
    }
}
window.addEventListener("online",function(){
 online()
});

window.addEventListener("offline",function(){
 offline()
});

reload.onclick=function(){
    window.location.reload();
}

function online(){
  title.innerHTML="on line new";
  title.style
  ul.classList.add("hide");
  reload.classList.add("hide");
 
 
}

function offline(){
  title.innerHTML=" off line new";
  
  ul.classList.remove("hide");
  reload.classList.remove("hide");
 
}


