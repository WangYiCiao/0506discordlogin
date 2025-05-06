// script.js

// 等待整個網頁的 HTML 結構都載入完成
document.addEventListener('DOMContentLoaded', function() {
    // 透過 ID 找到頁面上的登入按鈕元素
    const loginButton = document.getElementById('login-button');

    // 檢查按鈕是否存在 (確保程式碼不會因為找不到按鈕而出錯)
    if (loginButton) {
        // 為登入按鈕添加一個「點擊」事件的監聽器
        loginButton.addEventListener('click', function(event) {
            // 當按鈕被點擊時，執行這裡面的程式碼

            // event.preventDefault() 會阻止事件的預設行為。
            // 對於表單內的 submit 按鈕，預設行為是提交表單並刷新頁面。
            // 這裡阻止了這個行為，所以點擊按鈕頁面不會刷新。
            event.preventDefault();

            // 如果這是實際的登入頁面，你可能會在這裡寫程式碼來：
            // 1. 獲取使用者輸入的帳號密碼
            // 2. 檢查輸入是否符合格式 (前端驗證)
            // 3. 發送登入請求到伺服器 (使用 fetch 或 XMLHttpRequest)
            // 4. 根據伺服器回應的結果，導向新頁面或顯示錯誤訊息
        });
    }
});