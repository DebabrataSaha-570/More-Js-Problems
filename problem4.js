/*
৪. [ ফাংশন নেম দিতে হবে perfectFriend]: একটা array র মধ্যে অনেক গুলা friend এর নাম পাঠাইতে হবে। perfectFriend function এ প্যারামিটার হিসেবে array টা পাঠাইতে হবে । 
অনেক গুলা friend এর নামের মধ্যে প্রথম যে ফ্রেন্ড এর নামের মধ্যে যতো character আছে অর্থাৎ  charcter এর সংখ্যা বা যতো টুকু জায়গা নিচ্ছে সেটার পরিমাণ টা যদি ৫ হয় তাহলে তাকে return করে ফেলতে হবে। 
এখন ৫ character এর নাম যদি অনেক গুলা ও থাকে , প্রথম যার টা match খাবে তাকে return করে দিতে হবে। return টা হতে হবে একটা string. 


*/

function perfectFriend(friends) {
    let friendName = ''
    for (const friend of friends) {
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