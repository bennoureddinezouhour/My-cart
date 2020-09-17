/****change color */
var like = document.getElementsByClassName('like');
Array.from(like).map(el => {
    el.addEventListener("click",()=>{ 
        if(el.style.color==="red"){
            el.style.color="black";
          
        }
        else{ el.style.color="red";
        var none=el.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.childNodes[1];
        console.log(none);
        none.onclick=null;
        };     
    })
})

/*****remove item *****/
var remove=document.getElementsByClassName('remove');
Array.from(remove).map(el =>{ 
 el.addEventListener("click",function myfunct(){
     el.parentNode.parentNode.previousElementSibling.remove();
 el.parentNode.parentNode.remove();
    })
})
/******adjust quantity */
var plus=document.getElementsByClassName("plus");
var munis=document.getElementsByClassName("munis");
var total=document.getElementsByClassName('total')[0];


Array.from(plus).map(el =>{

    el.addEventListener("click",()=>{
        el.previousElementSibling.value = parseInt(el.previousElementSibling.value)+1;
        var price=el.parentElement.previousElementSibling.childNodes[1].innerHTML;
        var pricef=price.replace("$","");
        total.innerHTML=parseInt(el.previousElementSibling.value) * parseInt(pricef);
    })       
})

/************minus***/
Array.from(munis).map(el =>{
    el.addEventListener("click",()=>{
        if(el.nextElementSibling.value>0){
            var price=el.parentElement.previousElementSibling.childNodes[1].innerHTML;
            var pricef=price.replace("$","");
            total.innerHTML=parseInt(el.nextElementSibling.value) * parseInt(pricef)-pricef;
        el.nextElementSibling.value  = el.nextElementSibling.value -1;
    }})
       
})

