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
    const articles = [
      { title: 'Các thành phố Mỹ đang ứng dụng robot thế nào', content: 'Robot đang tham gia chữa cháy, cắt cỏ, dọn dẹp bãi biển và nhiều việc khác tại một số thành phố trên khắp nước Mỹ.' },
      { title: 'Đường hầm gió chuyên thử nghiệm máy bay', content: 'Đường hầm gió ở tổ hợp NFAC của NASA tại California lớn đến mức có thể chứa vừa máy bay Boeing 737 và nhiều thiết bị thử nghiệm.' },
      { title: 'Lý giải cảm giác sợ hãi phía sau những ngôi nhà "ma ám"', content: 'Từ hành lang sâu hun hút tới cầu thang bộ vang vọng tiếng bước chân, một số kiến trúc thường gặp ở những ngôi nhà "ma ám" có thể khuấy động nỗi sợ hãi ở con người.' },
      { title: 'Soundcore AeroFit 2 - tai nghe "mở" giá 2,5 triệu đồng', content: 'Soundcore AeroFit 2 có thiết kế dạng mở phù hợp với người chạy bộ hoặc không muốn "bí" tai, nhưng chất lượng âm thanh không quá nổi trội.' },
      { title: 'Ngôi trường có khuôn viên như "resort châu Âu" giữa Sài Gòn', content: 'EIS mang đến không gian "boutique " cùng lộ trình IB từ mẫu giáo đến lớp 12.' },
      { title: 'Siêu trăng tháng 11 sẽ lớn và sáng nhất năm', content: 'Siêu trăng ngày 5/11 sẽ lớn hơn 7% và sáng hơn 16% so với trăng tròn thông thường, đủ để tạo ra bóng mờ hiếm thấy trên mặt đất.' },
      { title: 'Elon Musk "khẩu chiến" Sam Altman vì đơn hàng xe Tesla', content: 'Sam Altman bất ngờ chia sẻ việc ông vừa hủy đơn đặt hàng Tesla Roadster năm 2018 nhưng chưa được hoàn tiền, còn Elon Musk phủ nhận.' },
      { title: 'Trí tuệ nhân tạo "cứu" kính viễn vọng không gian 10 tỷ USD', content: 'Các nhà khoa học phát triển phần mềm AI giúp sửa vấn đề ảnh mờ do biến dạng điện tử của Kính viễn vọng không gian James Webb từ Trái Đất.' },
      { title: '"Thuyền bay" cách mạng hóa giao thông đường thủy', content: 'Thiết kế cánh ngầm đang trở thành giải pháp tiềm năng cho tàu thuyền chở khách trên mặt nước nhanh và hiệu quả hơn, đồng thời giảm khí thải gây ô nhiễm.' },
      { title: 'AI tác động đến làn sóng sa thải nhân sự công nghệ thế nào', content: 'Trong 10 tháng của năm 2025, hầu hết công ty công nghệ gọi tên AI khi tuyên bố điều chỉnh nhân sự, thay vì dẫn những lý do khác như những năm trước.' }
    ];

    for (let i = 0; i < articles.length; i++) {
      await page.locator('//input[@id="note-title"]').fill(articles[i].title);
      await page.locator('//textarea[@id="note-content"]').fill(articles[i].content);
      await page.locator('//button[@id="add-note"]').click();
    }

    await page.locator('//input[@id="search"]').fill(`Trí tuệ nhân tạo`);

  });
});