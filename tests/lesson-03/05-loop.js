//1. Tính tổng từ 1 đén 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
};

// Print sum of 1 to 100
console.log(`Tổng từ 1 đến 100: ${sum}`);

//2. In bảng cửu chương từ 2 đến 9
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        let m = i * j;
        console.log(`${i} x ${j} = ${m}`);
    }
}

//3. Tạo mảng chứa các số lẻ từ 1 đến 99
const oddArr = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 === 1) {
        oddArr.push(i); 
    }
}

// Print array of odd numbers from 1 to 99
console.log(`Mảng số lẻ từ 1 đến 99: `,oddArr);

//4. In 10 email dựa theo tên người dùng và số thứ tự
const numArr = [1,2,3,4,5,6,7,8,9,10];
const userName = "user";
for (let i = 0; i < numArr.length; i++) {
    console.log(`${userName}${numArr[i]}@example.com`);
}

//5. In tổng doanh thu 12 tháng trong năm
const monRevArr = [
    { month: 1, total: 80 },
    { month: 2, total: 100 },
    { month: 3, total: 65 },
    { month: 4, total: 90 },
    { month: 5, total: 120 },
    { month: 6, total: 75 },
    { month: 7, total: 60 },
    { month: 8, total: 90 },
    { month: 9, total: 95 },
    { month: 10, total: 150 },
    { month: 11, total: 110 },
    { month: 12, total: 120 }
];

let totalRevenue = 0;

for (let i = 0; i < monRevArr.length; i++) {
    //totalRevenue += monRevArr[i].total;
    totalRevenue = totalRevenue + monRevArr[i].total;
}

//Print total revenue in the year
console.log(`Tổng doanh thu trong năm: ${totalRevenue}k`);