
// solving_Problem-1: kilometerToMeter_funtion_making
function kilometerToMeter(num) {
    var result = num * 1000;
    return result;
}
/**
    var meter = kilometerToMeter(24);
    console.log(meter);
 */




//  solving_Problem-2: budgetCalculator_funtion_making
function budgetCalculator(gori, phone, laptop) {
    var goriPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    var totalGori = gori * 50;
    var totalPhone = phone * 100;
    var totalLaptop = laptop * 500;
    var totalcost = totalGori + totalPhone + totalLaptop;

    return totalcost;
}
/**
    var amount = budgetCalculator(3, 1, 2);
    console.log(amount);
 */
    
 



// solving_Problem-3: hotelCost_function_making
function hotelCost(days) {
    var cost = 0;
    if (days <= 10) {
        cost = days * 100;

    }
    else if (days <= 20) {
        var first10Days = 10 * 100;
        var reminder = days - 10;
        var second10Days = reminder * 80;
        cost = first10Days + second10Days;
    }
    else {
        first10Days = 10 * 100;
        second10Days = 10 * 80;
        var reminder = days - 20;
        var nextDays = reminder * 50;
        cost = first10Days + second10Days + nextDays;
    }
    return cost;
}
/**
    var totalHotelCost = hotelCost(12);
    console.log(totalHotelCost);
 */




 
// solving_Problem-4: megaFriend_function_making
function megaFriend(n) {
    var longName = n[0];
    for (var i = 0; i < n.length; i++) {
        if (n[i].length > longName.length) {
            longName = n[i];
        }
    }
    return longName;
}
/**
var frindslist = ["mahi", "kamranRahman", "fahadAhmed","tasimAhmed","foysolAmir"];
var outPut = megaFriend(frindslist);
console.log(outPut);
*/


