// script.js

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

            // 顯示一個簡單的提示框
            alert('登入按鈕被點擊了！ (這是一個樣式範例，沒有實際登入功能)');

            // 在實際應用中，你可能會在這裡獲取輸入框的值，
            // 進行前端驗證，或者使用 fetch/XMLHttpRequest 發送登入請求到後端。
            // const emailValue = document.getElementById('email').value;
            // const passwordValue = document.getElementById('password').value;
            // console.log('Email:', emailValue, 'Password:', passwordValue);
        });
    }
});