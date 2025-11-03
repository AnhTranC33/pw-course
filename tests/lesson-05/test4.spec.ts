import { test } from '@playwright/test';

test('register with full information', async ({ page }) => {
  // Go to Material Playwright home page.
  await test.step('1. Access Material Playwright page', async () => {
    await page.goto('https://material.playwrightvn.com/');
  });

  // Click "Bài học 4: Personal notes".
  await test.step('2. Go to Bài học 4: Personal notes', async () => {
    await page.getByRole('link', { name: /Bài học 4: Personal notes/i }).click();
  });


  // Add 10 notes that has title and a short description (3 lines) at: https://vnexpress.net/khoa-hoc

  await test.step('3. Add 10 notes that has title and a short description (3 lines) at https://vnexress.net/khoa-hoc', async () => {


    await page.locator('//input[@id="note-title"]').fill(`Các thành phố Mỹ đang ứng dụng robot thế nào`);
    await page.locator('//textarea[@id="note-content"]').fill(`Robot đang tham gia chữa cháy, cắt cỏ, dọn dẹp bãi biển và nhiều việc khác tại một số thành phố trên khắp nước Mỹ.`);
    await page.locator('//button[@id="add-note"]').click();

    await page.locator('//input[@id="note-title"]').fill(`Đường hầm gió chuyên thử nghiệm máy bay`);
    await page.locator('//textarea[@id="note-content"]').fill(`Đường hầm gió ở tổ hợp NFAC của NASA tại California lớn đến mức có thể chứa vừa máy bay Boeing 737 và nhiều thiết bị thử nghiệm.`);
    await page.locator('//button[@id="add-note"]').click();

    await page.locator('//input[@id="note-title"]').fill(`Lý giải cảm giác sợ hãi phía sau những ngôi nhà 'ma ám'`);
    await page.locator('//textarea[@id="note-content"]').fill(`Từ hành lang sâu hun hút tới cầu thang bộ vang vọng tiếng bước chân, một số kiến trúc thường gặp ở những ngôi nhà "ma ám" có thể khuấy động nỗi sợ hãi ở con người.`);
    await page.locator('//button[@id="add-note"]').click();

    await page.locator('//input[@id="note-title"]').fill(`Soundcore AeroFit 2 - tai nghe 'mở' giá 2,5 triệu đồng`);
    await page.locator('//textarea[@id="note-content"]').fill(`Soundcore AeroFit 2 có thiết kế dạng mở phù hợp với người chạy bộ hoặc không muốn "bí" tai, nhưng chất lượng âm thanh không quá nổi trội.`);
    await page.locator('//button[@id="add-note"]').click();

    await page.locator('//input[@id="note-title"]').fill(`Ngôi trường có khuôn viên như 'resort châu Âu' giữa Sài Gòn`);
    await page.locator('//textarea[@id="note-content"]').fill(`EIS mang đến không gian "boutique " cùng lộ trình IB từ mẫu giáo đến lớp 12.`);
    await page.locator('//button[@id="add-note"]').click();

    await page.locator('//input[@id="note-title"]').fill(`Siêu trăng tháng 11 sẽ lớn và sáng nhất năm`);
    await page.locator('//textarea[@id="note-content"]').fill(`Siêu trăng ngày 5/11 sẽ lớn hơn 7% và sáng hơn 16% so với trăng tròn thông thường, đủ để tạo ra bóng mờ hiếm thấy trên mặt đất.`);
    await page.locator('//button[@id="add-note"]').click();

    await page.locator('//input[@id="note-title"]').fill(`Elon Musk 'khẩu chiến' Sam Altman vì đơn hàng xe Tesla`);
    await page.locator('//textarea[@id="note-content"]').fill(`Sam Altman bất ngờ chia sẻ việc ông vừa hủy đơn đặt hàng Tesla Roadster năm 2018 nhưng chưa được hoàn tiền, còn Elon Musk phủ nhận.`);
    await page.locator('//button[@id="add-note"]').click();

    await page.locator('//input[@id="note-title"]').fill(`Trí tuệ nhân tạo 'cứu' kính viễn vọng không gian 10 tỷ USD`);
    await page.locator('//textarea[@id="note-content"]').fill(`Các nhà khoa học phát triển phần mềm AI giúp sửa vấn đề ảnh mờ do biến dạng điện tử của Kính viễn vọng không gian James Webb từ Trái Đất.`);
    await page.locator('//button[@id="add-note"]').click();

    await page.locator('//input[@id="note-title"]').fill(`'Thuyền bay' cách mạng hóa giao thông đường thủy`);
    await page.locator('//textarea[@id="note-content"]').fill(`Thiết kế cánh ngầm đang trở thành giải pháp tiềm năng cho tàu thuyền chở khách trên mặt nước nhanh và hiệu quả hơn, đồng thời giảm khí thải gây ô nhiễm.`);
    await page.locator('//button[@id="add-note"]').click();

    await page.locator('//input[@id="note-title"]').fill(`AI tác động đến làn sóng sa thải nhân sự công nghệ thế nào`);
    await page.locator('//textarea[@id="note-content"]').fill(`Trong 10 tháng của năm 2025, hầu hết công ty công nghệ gọi tên AI khi tuyên bố điều chỉnh nhân sự, thay vì dẫn những lý do khác như những năm trước.`);
    await page.locator('//button[@id="add-note"]').click();


    await page.locator('//input[@id="search"]').fill(`Trí tuệ nhân tạo`);

  });
});