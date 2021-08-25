/* ২. [ ফাংশন নেম দিতে হবে totalSales]: তিনটা প্যারামিটার লাগবে। shirt, pant, shoes.
----১ টি শার্টের দাম – ১০০ টাকা
----- ১ টি প্যান্টের দাম – ২০০ টাকা
----১ টি জুতার দাম – ৫০০ টাকা
----এখন সে যদি বিভিন্ন সংখ্যার শার্ট, প্যান্ট বা জুতা বিক্রি করে তাহলে টোটাল কত বিক্রি হলো সেই সংখ্যা রিটার্ন করতে হবে।
*/

function totalSales(shirt, pant, shoes) {
    const singleShirtPrice = 100;
    const singlePantPrice = 200;
    const singleShoePrice = 500;
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

console.log(totalSales(7, 3, 4))
console.log(totalSales('1', '1', '1'))
console.log(totalSales('1', 'amar khuda lagche shopping pore age hotel e jamu', 1))
console.log(totalSales(false, [1, 2, 3, 4], 1))
console.log(totalSales(2, -5, 0))