document.addEventListener("DOMContentLoaded", function() { 
const calCircumference = (radius)=>{
    const pi = Math.PI;
    document.querySelector("div").innerHTML=" ";
    console.log("hi");
    document.querySelector("div").innerHTML=`The circumference is ${2*pi.toFixed(4)*radius}`;  
}

document.querySelector("button").addEventListener("click",()=>{
    let radius = document.querySelector("input").value;
    calCircumference(radius);
    });
});