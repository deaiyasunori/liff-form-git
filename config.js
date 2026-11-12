// ==========================================
// 共通設定ファイル (config.js)
// ==========================================
const CONFIG = {
    // GASのWebアプリURL（ここで1箇所だけ管理する）
    GAS_API_URL: "https://script.google.com/macros/s/AKfycbyTzBUsZsFf6nkEp5oWE7qUabAhS2rrK411Jgz9506-N6373hoiBfA_QsLGMcnU5fqG/exec",
    
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
