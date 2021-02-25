//Initalizing mathematical equations 
function formatMoney(value) {
    value = Math.ceil(value * 100) / 100;
    value = value.toFixed(2);
    return value;
}

function formatSplit(value) {

    if(value === "1") return value + " person";
    return value + " people";
}
//Initalizing bill values
function update() {
    let  bill = Number(document.getElementById('myBill').value);
    if (bill<0){bill=bill*-1;};
    let  tipPercent = document.getElementById('tipEnter').value;
    let  split = document.getElementById('splitInput').value;
    let tipValue = bill * (tipPercent/100);
    if (tipValue<0){tipValue=tipValue*-1;};
    let tipEach = tipValue / split;
    let newBillEach = (bill + tipValue) / split
    
//displaying the calculated values
    document.getElementById("tipPercent").innerHTML = tipPercent + "%";
    document.getElementById("tipValue").innerHTML = "₹ " +   formatMoney(tipValue);
    document.getElementById("totalWithTip").innerHTML ="₹ " + formatMoney(bill + tipValue);
    
    document.getElementById("splitValue").innerHTML = formatSplit(split);
    document.getElementById("billEach").innerHTML = "₹ " + formatMoney(newBillEach);
    document.getElementById("tipEach").innerHTML ="₹ " + formatMoney(tipEach);
}

let container = document.getElementById('value');
container.addEventListener('input', update);