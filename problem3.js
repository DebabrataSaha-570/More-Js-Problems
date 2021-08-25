/*
৩. [ ফাংশন নেম দিতে হবে deliveryCost]: প্যারামিটার হিসাবে নিবে কয়টা টি-শার্ট ডেলিভারি করবে।
যদি ১০০ বা তার কম টি-শার্ট পাঠাও তাহলে প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে।
যদি ১০০ এর বেশি কিন্তু ২০০ এর কম টি শার্ট পাঠাও। তাহলে প্রথম ১০০ টা টি-শার্ট এর প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যেগুলা আছে সেগুলা প্রতিটার জন্য ৮০ টাকা করে দিতে হবে।
যদি ২০০ এর বেশি টি-শার্ট পাঠাও। তাহলে প্রথম ১০০ টা টি-শার্ট এর প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে দিতে হবে। আর ১০১ থেকে ২০০ পর্যন্ত যেগুলা আছে সেগুলা প্রতিটার জন্য ৮০ টাকা করে দিতে হবে। ২০০ এর বেশি যতগুলা আছে সেগুলার সবগুলা প্রতিটা ৫০ টাকা করে দিতে হবে।

এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে কতটাকা ডেলিভার খরচ হবে।
আমার ইনপুট প্যারামিটার সংখ্যাটা ১০০ এর কম হতে পারে। ১০০ থেকে ২০০ এর মধ্যে হতে পারে। আবার ২০০ এর বেশিও হতে পারে। তাই সব কেইস ভালো করে টেস্ট করে নিবে।
*/

function deliveryCost(shirt) {
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