//1. Viết hàm nhân hai số và in kết quả
function multiply(a, b) {
    return a * b;
}

let result1 = multiply(100, 5);
let result2 = multiply(25, 8);

//Print multiplication with 2 pairs of numbers
console.log(`100 x 5 = ${result1}`);
console.log(`25 x 8 = ${result2}`);

//2. Viết hàm tìm số nhỏ nhất trong 3 số
function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    return min;
}

let min1 = findMin(10, 5, 8);
let min2 = findMin(-3, -7, -1);
console.log(`Min of (10, 5, 8) is: ${min1}`);
console.log(`Min of (-3, -7, -1) is: ${min2}`);

//3. Viết hàm getTopStudents để trả về mảng tên học sinh có điểm >= 8
function getTopStudents(students,threshold) {
    const topStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].grade >= threshold) {
            topStudents.push(students[i].name);
            //topStudents.push(students[i]);
        }

    }
    return topStudents;
}
const studentArr = [
    { name: 'An', grade: 9 },
    { name: 'Binh', grade: 7 },
    { name: 'Chi', grade: 8 },
    { name: 'Dung', grade: 6 }
];

// Define grade threshold
const gradethreshold = 8;
const topStudents = getTopStudents(studentArr, gradethreshold);

//Print list of top students with grade >= threshold
console.log(`Học sinh có điểm >= ${gradethreshold}: `, topStudents);

//4.Viết hàm tính tiền lãi
function calculateInterest(principal, rate, years) {
    const totalReceive = principal + principal * rate * years / 100;
    return totalReceive;
}

const principalAmount = 5000;
const annualRate = 5;
const investmentYears = 3;
const total = calculateInterest(principalAmount, annualRate, investmentYears);

//Print total amount received after interest
console.log(`Tổng số tiền nhận được ${investmentYears} năm với lãi ${annualRate}% là: $${total}`);