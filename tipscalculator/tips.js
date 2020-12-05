document.addEventListener("DOMContentLoaded",()=>{
    const calculateTips = ()=>{
    let amount = document.querySelector("#totalAmount").value;
    let tipsPercent = document.querySelector("#tipsPercent").value;
    let totalAmount= (1+tipsPercent/100)*amount;
    document.querySelector(".tipsAmount").innerHTML=" ";
    document.querySelector(".tipsAmount").append(`Total amount (Rs.): ${Math.floor(totalAmount)}`);
    }
    document.querySelector("#calculateBtn").addEventListener("click",()=>{
        calculateTips();
    })

});