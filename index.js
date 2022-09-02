
console.clear();
const text=document.querySelector(".text");
const span1=document.querySelector(".span1");
const span2=document.querySelector(".span2");

text.addEventListener("keyup",(event)=>{
   span1.innerHTML= event.target.value.length;

   span2.innerHTML=text.getAttribute("maxlength")-event.target.value.length;
})