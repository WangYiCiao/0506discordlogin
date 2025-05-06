// 等待頁面 DOM 完全載入
document.addEventListener('DOMContentLoaded', function() {
    // 獲取登入按鈕元素
    const loginButton = document.getElementById('login-button');

    // 檢查按鈕是否存在
    if (loginButton) {
        // 為按鈕添加點擊事件監聽器
        loginButton.addEventListener('click', function(event) {
            // 阻止表單的預設提交行為 (這樣頁面就不會刷新)
            event.preventDefault();
        });
    }
});