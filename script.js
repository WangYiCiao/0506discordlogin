// 等待頁面載入完成後執行
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-button');

    if (loginButton) {
        // 點擊登入時不讓表單自動送出
        loginButton.addEventListener('click', function(event) {
            event.preventDefault();
            alert("登入按鈕被點擊！");
        });
    }
});
