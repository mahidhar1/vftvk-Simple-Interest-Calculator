function compute(){
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    if(principal <=0){
        alert("Please enter a positive number for principal amount")
        document.getElementById("principal").focus()
    } else {
        var principalEl = `<span id="yellowElement">${principal}</span>`
        var rateEl = `<span id="yellowElement">${rate}</span>`
        var yearEl = `<span id="yellowElement">${year}</span>`
        var amountEl = `<span id="yellowElement">${amount}</span>`
        document.getElementById("result").innerHTML=`If you deposit ${principalEl}, \<br\>at an interest rate of ${rateEl}%,\<br\>You will receive an amount of ${amountEl},\<br\>in the year ${yearEl}.\<br\>`

    }
    
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + " %";
}
        
