

//onclick event
function calculate() {
    //variables from user inputs and price difference
    var price = document.getElementById("salePrice").value;
    var givenAmount = document.getElementById("givenPrice").value;
    var difference = (givenAmount - price).toFixed(2);
    //text inside html <p id="change"> </p>
    document.getElementById("change").innerHTML = "Your change is $" + difference;

    //total dollars output
    var totalDollars = parseInt(difference);
    document.getElementById("Dollars").innerHTML = totalDollars;

    //how to get the coin amount
    var coinValue = (difference - totalDollars).toFixed(2);
    console.log(coinValue)
        // document.getElementById("coinTotal").innerHTML = coinValue;

    //change value of coins to whole number
    var wholeNumberCoins = coinValue * 100;

    //quarters output
    var remainder1 = wholeNumberCoins % 25;
    var quarterAmount = wholeNumberCoins - remainder1;
    var quarterTotal = quarterAmount / 25;
    document.getElementById("quarters").innerHTML = quarterTotal;

    //dimes output
    var remainder2 = remainder1 % 10;
    var dimeAmount = remainder1 - remainder2;
    var dimeTotal = dimeAmount / 10;
    document.getElementById("dimes").innerHTML = dimeTotal;

    //nickel output
    var remainder3 = remainder2 % 5;
    var nickelAmount = remainder2 - remainder3;
    var nickelTotal = nickelAmount / 5;
    document.getElementById("nickels").innerHTML = nickelTotal;

    //penny output
    var remainder4 = remainder3 % 1;
    var pennyAmount = remainder3 - remainder4;
    var pennyTotal = pennyAmount / 1;
    document.getElementById("pennies").innerHTML = pennyTotal;

}


