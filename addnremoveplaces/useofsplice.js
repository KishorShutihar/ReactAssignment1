document.addEventListener("DOMContentLoaded",()=>{
    function addPlaces(myPlaces,newplace) {
        if (myPlaces.indexOf("Kathmandu")>0) {
            myPlaces.splice(index,1,newplace);
        }else{
        myPlaces.splice(index+1,0,newplace);
        }
        let arrLength = myPlaces.length;
        document.querySelector(".newArray").innerHTML = ' ';
        let html_content2 = ' ';
        myPlaces.forEach((place)=>{
        html_content2 = html_content2 + ` ${place} `
        document.querySelector(".newArray").innerHTML = html_content2;
        });
    document.querySelector(".arrayLength").innerHTML = `New array Length: ${arrLength}`;
    }

    let yourPlaces = ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"];
    let html_content1 =' ';
    yourPlaces.forEach((place)=>{
        html_content1 = html_content1 + ` ${place} `
        document.querySelector(".orgArray").innerHTML = html_content1;
    });
    
    let myPlaces=[];
    for (let i = 0; i < yourPlaces.length; i++) { //copying array
        myPlaces.push(yourPlaces[i]);
    }    

    let index = myPlaces.indexOf("Kathmandu");
    document.querySelector("button").addEventListener("click",()=>{
        let newplace = document.querySelector(".placeAdd").value;
        addPlaces(myPlaces,newplace);
    });
});