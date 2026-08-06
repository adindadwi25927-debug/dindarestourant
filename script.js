const reveal=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveal.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<window.innerHeight-100){

item.classList.add("active");

}

});

});
