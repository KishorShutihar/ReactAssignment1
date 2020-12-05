setInterval(() => {
    let vardate = new Date();
    let timeObj = [
        {   id:1,
            value: vardate.getHours() % 12
        },
        {   id:2,
            value: vardate.getMinutes()
        },
        {   id:3,
            value: vardate.getSeconds()
        }
    ];
    let addedZeroTime = minTwoDigits(timeObj);
    let varTime =  addedZeroTime[0] + ':' + addedZeroTime[1] + ':' + addedZeroTime[2] +(vardate.getHours()>12?' PM':' AM') ;
    document.querySelector("#clock").innerHTML = " "
    document.querySelector("#clock").append(varTime);
}, 1000)

function minTwoDigits(array) {
  return array.map((n) => (n.value < 10 ? '0' : '') + n.value);
}
