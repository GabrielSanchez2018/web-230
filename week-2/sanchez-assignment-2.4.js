function fullName(fisrtName, lastName){
    var fisrtName = 'Gabriel';
    var lastName = 'Sanchez';
    return fisrtName +''+ lastName

}

console.log(fullName());




function dateWriter(year, month){
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDay();
    


    return ''+ year + '-'+ month +'-'+ day

}

console.log(dateWriter());

let n = 5.599;
let place = 2;

function formatNumber(number, numOfFixedPositions){
    return number.toFixed(numOfFixedPositions)
}

console.log('Formatte number:' + formatNumber(n, place));