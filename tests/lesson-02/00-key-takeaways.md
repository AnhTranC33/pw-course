**# Nội dung buổi học 2**
1. Version control
2. Git
3. JavaScript basic
**## Version control system**
- Đinh nghĩa: Hệ thống quản lý phiên bản
- Mục tiêu: giúp dễ
* Xem lịch sử thay đổi
* Trở về bản thay đổi trước
- Phân loại: 3 loại:
* Local
* Centralize
* Distributed
Notes: Phổ biến nhất: Distributed => Git: 1 DVCS
**## Git**
- Tên Git có nhiều giả thuyết
- So sánh Git với các VSC khác:
* Tính năng: dễ dùng, nhanh
* Chi phí: free
* Phổ biến: được sử dụng ở nhiều công ty
**### Git & GitHub**
- Git: phần mềm vs GitHub: Dịch vụ web
- Git: cài trên máy vs GitHub: Host trên website
- Git: command line tool vs GitHub: Công cụ có giao diện
- Git: công cụ quản lý phiên bản, đưa file -> Git repository vs GitHub: nơi để upload Git repository
- Git: có các tính năng của VCS vs GitHub: Có các tính năng khác của VCS & một số tính năng: GitHub Actions, GitHub Co-Pilot...
**### Git - three states**
Working Directory - Staging Area - Repository
- Working Directory: file mới/file có thay đổi
- Staging Area: Các file đưa vào vùng chuẩn bị commit
- Repository: Các commit (phiên bản)
* Command init: *git init*
* Commands add:
*git add <filename>*
*git add .*
* Command commit:
*commit -m "message"
**### Git - Cấu hình**
1. Trường hợp 1 repo
*git config --global user.name*
*git config --global user.email*
2. Trường hợp mỗi repo tên khác
Set username, email riêng từng repo (đứng tại terminal của repo đó)
**### Git - Một số câu lệnh**
- Xem trạng thái file
*git status*
* File xanh: staging
* File đỏ: working directory
- Kiểm tra danh sách commit:
*git log*
**### Git - commit convention**
- Convention: <type>: <short_description>
3 types when commit:
chore/feat/fix
**### Git - simple workflow**
1. Không dùng Global config:
init->config->add->commit->push
2. Dùng global config:
init->add->commit->push
**## JavaScript basic**
- JavaScript: ngôn ngữ lập trình
- Giúp browser hoạt động
- Chạy được do browers engine support
Notes: chạy trên máy tính, không có browser engine -> NodesJS
**### JavaScript - Hello World!**
- Syntax:
*console.log("content");*
*console.log('content');*
**#### JavaSCript - Comment**
//ExampleComment
/*ExampleComment2*/
- Biến: var/let/const
**### JavaScript - Data Type**
- Primitive types
- Reference types
* Number: só
* String: chuỗi
* Boolean: logic
- Kiểm tra kiểu dữ liệu: *typeof<variable>*
**### JavaScript - Toán tử so sánh**
- So sánh bằng
== & ===
- So sánh không bằng
!
- So sánh lớn hơn, nhỏ hơn
">, <, <=, >="
**### JavaScript - Toán tử logic**
*&&*
*||*
**### JavaScript - Toán tử một ngôi**
x++;
++x;
x--;
--x;
Prefix: toán tử nằm trước: tăng trước, trả về sau
Postfix: toán tử nằm sau: trả về trước, tăng sau
**### JavaScript - Toán tử toán học**
+, -, *, /
**### JavaScript - Câu điều kiện**
- Các loại câu điều kiện:
*if*
*if...else*
*if...else if...else*
*switch...case*
**### JavaScript - Vòng lặp**
- Các loại vòng lặp:
*for (i)*
*for (of)*
*for (each)*
*for (in)*
*while*
*do...while*
- Syntax:
1. for (i):
for (<điều kiện khởi tạo;<điều kiện lặp>;<cập nhật>){
    //code
}
**###VS Code**
- Format code: Alt + Shift + F