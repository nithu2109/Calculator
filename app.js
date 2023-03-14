const buttons=document.querySelectorAll("button");
const display=document.querySelector("#disp input");
console.log(display);
Array.from(buttons).forEach(bun=>{
    bun.addEventListener("click",e=>{
        if(e.target.classList.contains('fa-delete-left') || e.target.value=='delete'){
          display.value=display.value.slice(0,-1);
        }
        else if(e.target.value=="clear"){
            display.value="";
        }
        else if(e.target.value=="="){
            const res=eval(display.value);
            display.value=res;
        }
        else{
            display.value+=e.target.value;
        }
    });
});
