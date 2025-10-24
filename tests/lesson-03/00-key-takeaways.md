**# Nội dung buổi học 3**
1. Git
* Undo actions
* Branching model
2. JavaScript basic
* Logical operator
* Object and array
* Function

**## Git**
**### Git & Undo things**
1.  Commit message
* Change commit message
git commit --amend -m "message"

2. File Staging -> working directory
- Restore 1 file
git restore --staged <file_name>

- Restore toàn bộ file
git restore --stage .

3. File Repository -> working directory (un-commit)
- Reset 1 commit
git reset HEAD~1

- Reset N commit
get reset HEAD~N

* Notes: commit đầu không thể bị reset. Reset: Xóa folder .git rồi init lại

**### Git - Branching**
**### Git - pull code**
- Lấy code từ server:
git pull origin main

**### Git - branch**
- Khởi tạo mặc định ỏ nhánh main:
git config --global init.defaultBranch main
- Xem danh sách nhánh:
git branch
* Notes: cần ít nhất 1 commit mới hiện danh sách nhánh
- Tạo nhánh mới:
git branch <branch_name>
- Chuyển sang nhánh mới:
git checkout <branch_name>
- Vừa tạo, vừa chuyển sang nhánh mới:
git checkout -b <branch_name>
- Xóa branch:
git branch -D <branch_name>
* Notes: -cần đứng ở nhánh khác trước khi xóa
         -luôn pull code về trước khi tạo nhánh mới

**### Git - Ignore file**
.gitignore: không cần thiết đưa vào repository
- File tạm
- Thư mục dependencies
- File build và artifacts
- File cấu hình cá nhân
- File nhạy cảm
- File log & database local

**### Cú pháp .gitignore**
# Comment - Ghi chú
secret.txt
*.log
nodes_modules/
build/
**/*.tmp
!important.log
/TODO
doc/**/*.txt

**## JavaScript basic**

**### JavaScript - Convention**
Convention phổ biến:
* snake_case (tạm không dùng)
* kebab-case (tên file, folder)
* camelCase (tên biến, hàm)
* PascalCase (tên class)

**### JavaSCript - console.log**
console.log(‘I am Mark’);
console.log(“I am Inn”);
console.log(`${variable_name}`)
let name = “Nga”;
console.log(`Toi la ${name}`);
console.log(“Toi ten la” + name + “”)

**### JavaScript - Object**
- Khai báo
const/let <variable_name> = {
    key1: value1,
    key2: value2,
…
}

Examples:
* let user = {“name”: “Alex”, “age”: 10,
“email”: “alex@gmail.com”}

* const product = {
name”: “Laptop”,
price”: 500,
“isWindow”: true,
“manufacturer”:{
“name”:“Acer”,
“year”:2024
}

- Sử dụng:
console.log("manufacturer name = " +
product.manufacturer.name);
* Gán lại:
user.age = 28;
product[“manufacturer”][“year”] = 2025

**### JavaScript - Logical Operator**
&&: cả 2 đều đúng
||: 1 trong 2 đúng
!: đảo ngược giá trị mệnh đề

**### JavaScript - Array**
* Tạo mảng:
- Khai báo
- Sử dụng
* Truy xuất mảng:
- Độ dài mảng: length
- Lấy phần tử theo index: [0], [1], [2]

**### JavaScript - Function**
* Khai báo:
function <nameFunction>() {
// code
}