# Nội dung buổi học 5
1. Function Advanced
2. DOM
3. Selector
4. Playwright basic syntax

## Function Advanced
* Function expression
* Lambda function
* Anonymous function

### Function expression
* Định nghĩa function bằng cách gán cho nó một biến
// Function Declaration (khai báo hàm)

function add(a, b) {
    return a + b;
}
// Function Expression (biểu thức hàm)
const add = function(a, b) {
    return a + b;
};
// So sánh cách gọi
console.log(add(2, 3)); // 5 - cả hai đều giống nhau

### Lambda function (Arrow Function)
* Cách viết ngắn gọn hơn cho function
* Sử dụng =>

// Function truyền thống
function add(a, b) {
    return a + b;
}
// Function expression
const add = function(a, b) {
    return a + b;
};
// Arrow function (Lambda)
const add = (a, b) => {
   return a + b;
}

Nếu chỉ có 1 dòng code => rút gọn {}
//cú pháp
const add = (a,b) => a + b;
**Không có tham số**
// Phải có dấu ngoặc tròn rỗng
const greet = () => console.log("Hello!");
const getRandom = () => Math.random();
**Một tham số**
// Có thể bỏ ()
const double = x => x * 2;
const square = x => x * x;

// Hoặc giữ ()
const triple = (x) => x * 3;
### Anonymous function
* function không có tên
* được sử dụng khi function chỉ cần dùng một lần hoặc làm callback.
// Named function (có tên)
function namedFunction() {
    console.log("I have a name!");
}
// Anonymous function (không tên)
function() {  // SyntaxError! Không thể đứng một mình
    console.log("I'm anonymous!");
}
// Anonymous function phải được sử dụng ngay
// 1. Gán cho biến
const anonymousFunc = function() {
    console.log("I'm anonymous but stored in a variable!");
};
// 2. Dùng làm callback
setTimeout(function() {
    console.log("Anonymous callback!");
}, 1000);

## DOM
* Máy tính nhìn website ở dạng cây có cấu trúc
* DOM = Document Object Model
<option>United States</option>
* Thẻ mở/Thẻ đóng
* Thẻ tự đóng
<option value="usa">United States</option>
- Có nhiều loại thẻ khác nhau:
* Thẻ tiêu chuẩn
* Thẻ tự định nghĩa

Các thẻ tiêu chuẩn thường gặp
**Thẻ cấu trúc cơ bản**
* <html>: Thẻ gốc của trang
* <head>: Chứa metadata: tiêu đề website, hiển thị Google
* <body>: Nội dung của cả website hiển thị
* <div>: Khối/container chung
* <span>: Inline container
* <header>, <footer>, <nav>, <section>: Thẻ ngữ nghĩa

**Thẻ nội dung**
* <h1> đến <h6>: Tiêu đề
* <p>: Đoạn văn
* <a>: Liên kết
* <img>: Hình ảnh
* <ul>, <ol>, <li>: Danh sách

**Thẻ form**
* <form>: Biểu mẫu
* <input>: Ô nhập liệu (text, password, checkbox, radio, etc.)
* <button>: Nút bấm
* <select> và <option>: Dropdown
* <textarea>: Vùng văn bản nhiều dòng

Demo tất cả các thẻ:
[Tất cả thẻ](https://material.playwrightvn.com/035-DOM-elements.html)

## Selector
Automation = tương tác với các phần tử trên trang web
* Input
* Fill
* Click
*...
Để tương tác được, cần tìm được các phần tử này
Selector là công cụ giúp tìm

3 loại selector thường dùng:
* XPath
- Dùng được trong hầu hết trường hợp (99.99%)
- Đa dạng, có khả năng tìm các phần tử khó
- Hơi dài
- VD: //button[normalize-space() = ‘Add to cart’]

* CSS selector
- Ngắn gọn, performance cao
- Dùng cho các trường hợp dễ tìm
- Không linh hoạt bằng XPath
- VD: .add-to-cart

* Playwright selector
- Chỉ dùng riêng cho Playwright
- Cú pháp ngắn gọn, không phụ thuộc cấu trúc DOM
- Hướng tới "giống người dùng đang nhìn thấy gì"
- VD: page.getByText("Add to cart");

Sử dụng: Playwright selector > CSS selector > XPath
* Cần học hiểu cả 3 loại
* Tùy theo dự án dùng loại gì để theo

### XPath selector
* Xpath = XML Path
* 2 loại:
-Tuyệt đối: đi dọc theo cây DOM
 - bắt đầu bởi 1 /
-Tương đối: tìm dựa vào đặc tính
 - bắt đầu bởi 2 //
 - //tenthe[@thuoctinh="giatri"]
* Nên dùng Xpath tương đối

## Playwright basic syntax
Automation = tương tác + verify
**test:** đơn vị cơ bản khai báo 1 test
import { test } from '@playwright/test';
test('<tên test>', async ({ page }) => {
  // Code của test
});
**step:** đơn vị nhỏ hơn test, để khai báo từng step của test case
* Lưu ý: step nên được map 1-1 với test case để dễ maintain
await test.step('Tên step', async () => {
   // Code here
});

test('<tên test>', async ({ page }) => {
  await test.step('Tên step', async () => {
    // Code here
  });
});

**Navigate**
await page.goto('https://pw-practice.playwrightvn.com/');

**Locate**
Sử dụng page.locator("<selector>") để chọn phần tử trên trang
VD:
page.locator("//input[@id='email']);

**Click**
Single click
await page.locator("//button").click();
Double click
await page.locator("//button").dblclick();
Click chuột phải
page.locator("//button").click({
    button: 'right'
})
Click chuột kèm bấm phím khác
page.locator("").click({
    modifiers: ['Shift'],
})

**Input**
Fill: Giống paste content vào input:
page.locator("//input").fill('Playwright Viet Nam');

pressSequentially: Giống gõ từng chữ cái vào input:
page.locator("//input").pressSequentially('Playwright Viet Nam', {delay: 100,});

**Radio/Checkbox**
Lấy giá trị hiện tại đang là check hay không:
const isChecked = 
page.locator("//input").isChecked();
Check/ uncheck
page.locator("//input").check();
page.locator("//input").setChecked(false);

**Select**
await page.locator('//select[@id=”country”]').selectOption({ label: 'USA' })

**Upload file**
await page.locator("//input[@id='profile']").setInputFiles("<file-path>");
