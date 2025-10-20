let i = 1000;
let num = "";
console.log("Các số từ 1000 đến 2000 chia hết cho 3 là:");
/*while (i <= 2000) {
    if (i % 3 === 0)
    console.log(i);
    i++;
}*/

while (i <= 2000) {
    if (i % 3 === 0)
    num += i + " ";
    i++;
}
console.log(num);