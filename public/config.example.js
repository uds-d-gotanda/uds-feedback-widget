// config.example.js
// このファイルは設定のテンプレートです。
// 実際にローカル環境やサーバーで動かす際は、このファイルをコピーして「config.js」という名前に変更し、
// YOUR_*** の部分を実際のFirebase/reCAPTCHAのキーに書き換えてください。
// ※ config.js は .gitignore で除外されているため、Gitにはコミットされません。

window.WIDGET_CONFIG = {
    firebaseConfig: {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
        messagingSenderId: "YOUR_SENDER_ID",
        appId: "YOUR_APP_ID"
    },
    appId: "YOUR_PROJECT_ID",
    recaptchaSiteKey: "YOUR_RECAPTCHA_SITE_KEY" // reCAPTCHA v3 のサイトキー（公開キー）
};