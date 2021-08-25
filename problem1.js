// ১. [ ফাংশন নেম দিতে হবে seerToMon]: একটা ফাংশন এ প্যারামিটার হিসেবে নিবে সের। তারপর সেটাকে মন এ কনভার্ট করে কত মন হয় সেই সংখ্যা রিটার্ন করবে। শুধু সংখ্যাটা রিটার্ন করবে।

// seer to Mon 

function seerToMon(seer) {
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
console.log(seerToMon('amar khuda lagche'))
console.log(seerToMon(80))
