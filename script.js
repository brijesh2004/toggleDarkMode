const circle = document.getElementById("circle");
const box = document.getElementById("box");
const body = document.getElementById("body");

circle.style.backgroundColor="red";
function ToggleMode(){
  
    if(circle.style.backgroundColor=="red"){
        body.style.backgroundColor="gray";
        console.log("red");
        circle.style.backgroundColor="black";
        
        // box.style.justifyContent="right";
        circle.style.translate="70px";
    }
    else{
        circle.style.backgroundColor="red";
        body.style.backgroundColor="black";
        console.log("not red");
        circle.style.translate="0px";
        // box.style.justifyContent="left";
    }
 

}