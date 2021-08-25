// ............seer to Mon function............

function seerToMon(seer) {
    // condition 
    if (typeof seer == 'number' && seer > 0) {
        const mon = seer / 40;
        return mon;
    }
    else {
        return 'input is not acceptable. Please provide a positive number'
    }

}

console.log(seerToMon(-5))
console.log(seerToMon(true))
console.log(seerToMon([1, 2, 4]))
console.log(seerToMon('khuda lagche'))
console.log(seerToMon(80))

//................total Sales function.............

function totalSales(shirt, pant, shoes) {
    const singleShirtPrice = 100;
    const singlePantPrice = 200;
    const singleShoePrice = 500;
    // condition 
    if (typeof shirt == 'number' && shirt > 0 && typeof pant == 'number' && pant > 0 && typeof shoes == 'number' && shoes > 0) {
        const totalShirtPrice = singleShirtPrice * shirt;
        // console.log('total shirt price', totalShirtPrice)
        const totalPantPrice = singlePantPrice * pant;
        // console.log('total pant price ', totalPantPrice)
        const totalShoePrice = singleShoePrice * shoes;
        // console.log('total shoe price', totalShoePrice)
        const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;
        return totalPrice;
    }
    else {
        return 'input is not acceptable. Please provide a positive number'
    }
}

console.log(totalSales(2, 2, 2))
console.log(totalSales('1', '1', '1'))
console.log(totalSales('1', 'amar khuda lagche shopping pore age hotel e jamu', 1))
console.log(totalSales(false, [1, 2, 3, 4], 1))
console.log(totalSales(2, -5, 0))



//....................delivery cost function....................

function deliveryCost(shirt) {
    // condition 
    if (typeof shirt == 'number' && shirt > 0 && shirt <= 100) {
        const deliveryChargeOf100 = 100;
        const totalDeliveryChargeOf100 = deliveryChargeOf100 * shirt;
        return totalDeliveryChargeOf100;
    }
    else if (typeof shirt == 'number' && shirt > 100 && shirt <= 200) {
        const deliveryChargeOf100 = 100;
        const firstHundredDelivery = deliveryChargeOf100 * 100;

        const deliveryChargeOf200 = 80;
        const remainingShirt = shirt - 100;
        const secondHundredDelivery = deliveryChargeOf200 * remainingShirt;

        const totalDeliveryChargeOf200 = firstHundredDelivery + secondHundredDelivery;
        return totalDeliveryChargeOf200;
    }
    else if (typeof shirt == 'number' && shirt > 200) {
        const deliveryChargeOf100 = 100;
        const firstHundredDelivery = deliveryChargeOf100 * 100;

        const deliveryChargeOf200 = 80;
        const secondHundredDelivery = deliveryChargeOf200 * 100;

        const deliveryChargeUpper200 = 50;
        const thirdRemainingShirt = shirt - 200;
        const moreThanSecondHundredDelivery = deliveryChargeUpper200 * thirdRemainingShirt;

        const totalDeliveryCharge = firstHundredDelivery + secondHundredDelivery + moreThanSecondHundredDelivery;
        return totalDeliveryCharge;
    }
    else {
        return 'input is not valid. Please Provide a Positive Number'
    }
}

console.log(deliveryCost(210))

console.log(deliveryCost(true))
console.log(deliveryCost([1, 2, 4]))
console.log(deliveryCost('amar khuda lagche'))
console.log(deliveryCost('80'))


// ................perfect friend function........

function perfectFriend(friends) {
    let friendName = ''
    // for loop 
    for (const friend of friends) {
        // condition 
        if (typeof friend == 'string' && friend.length == 5) {
            friendName = friend;
            break;
        }

        else {

            continue;
        }
    }
    return friendName;
}

console.log(perfectFriend(['abc', 'shuvo', 'programming-community', 'abcde']))

console.log(perfectFriend(['shuvo', 100, 102, 10345]))
console.log(perfectFriend(['abc', 'def', 'xyz', 'bappi']))