// ==========================================
// 共通設定ファイル (config.js)
// ==========================================
const CONFIG = {
    // GASのWebアプリURL（ここで1箇所だけ管理する）
    GAS_API_URL: "https://script.google.com/macros/s/AKfycbxwJRr29h2E1pQRWeOA6bogXm50OhJbbnCESS_EWyd-UhKXTc8u_JUht4nYRGESzKVi/exec",
    
    // 【将来の拡張用】GAS側や外部から動的にURLを設定・上書きするメソッド
    setCustomUrl: function(newUrl) {
        if (newUrl) {
            this.GAS_API_URL = newUrl;
            console.log("GAS_API_URLが動的に更新されました: " + newUrl);
        }
    }
};

// 各HTMLファイルからそのまま変数として扱えるようにするためのショートカット
const GAS_API_URL = CONFIG.GAS_API_URL;
