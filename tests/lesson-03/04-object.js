//1. In năm sản xuất xe
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021
}

//Print year of production
console.log(`Year of car production: ${car.year}`);

//2. In tên đường của object person
const person = {
    name: 'An',
    address: {
        street: '123 LTK St',
        city: 'HCM',
        country: 'VN'
    }
}

//Print street name
console.log(`Person's street name: ${person.address.street}`);

//3. Tạo object student và truy cập đến điểm môn toán
const student = {
    name: 'Linh',
    grades: {
        math: 9,
        english: 8
    }
};

// Print math grade
console.log(`Student's math grade: ${student["grades"]["math"]}`);

//4. Tạo object settings, thay đổi volume và in ra object mới
const settings = {
    volume: 30,
    brightness: 60
};

// Update value of volume
settings.volume = 70;

// Print updated settings
console.log(`Updated settings: `, settings);

//5. Tạo object bike, thêm thuộc tính color và in ra object mới
const bike = {};

// Add color property
bike.color = 'Green';

// Print updated bike object
console.log(`Updated bike object: `, bike);

//6. Tạo object employee, xóa thuộc tính age và in ra object mới
const employee = {
    name: 'Hai',
    age: 28
};

// Delete age property
delete employee.age;

// Print updated employee object
console.log(`Updated employee object: `, employee);

//7. Tạo object book, kiểm tra thuộc tính author và in ra kết quả
const school = {
    classA: ['An', 'Binh', 'Chau'],
    classB: ['Dao', 'Huong', 'Giang ']
};

// Print students in classA
console.log(`Students in classA: `, school.classA);
console.log(`Students in classB: `, school.classB);