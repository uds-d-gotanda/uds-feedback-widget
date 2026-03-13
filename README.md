ユーザーフィードバック・リアクション部品 (Feedback Widget)

Google サイトなどの社内ポータル記事に埋め込んで使用する、macOS コントロールセンター風の洗練されたリアクションウィジェットです。

✨ 特徴

モダンなデザイン: macOS の UI に着想を得た、美しく視認性の高いデザイン。

完全なレスポンシブ: スマホ表示でもスクロールバーが出ず、どんな画面サイズにも最適化して表示されます。

簡単導入: GitHub Pages にこの HTML ファイルを1つ置くだけで、iframe 経由でどこにでも設置可能です。

リアルタイム集計: Firebase Firestore をバックエンドに使用し、全ユーザーのクリックがリアルタイムに反映されます。

管理者モード搭載: CSVエクスポートやカウントのリセットができる管理画面を内蔵しています。

🛠 技術スタック

Frontend: React 18, Tailwind CSS, Babel (CDN経由で動作、ビルド不要)

Backend: Firebase (Authentication: 匿名認証, Firestore: リアルタイムデータベース)

Hosting: GitHub Pages (推奨)

🚀 設置方法・使い方

1. 埋め込み方法

環境に合わせて、以下のどちらかの方法で設置してください。（[あなたのGitHubユーザー名]、[リポジトリ名]、[記事固有のID]、[記事のタイトル] の4箇所は書き換えてください）

パターンA: Google サイトの場合（推奨：URL直接埋め込み）

Google サイトでは、二重枠によるレイアウト崩れを防ぐため、以下のURLをそのまま埋め込む方式が最適です。

https://[あなたのGitHubユーザー名].github.io/[リポジトリ名]/?pid=[記事固有のID]&ptitle=[記事のタイトル]


【重要】Googleサイトでの設置のコツ

編集画面の「埋め込み」メニューから 「URL」タブ を選択し、上記のURLを直接貼り付けます。

挿入後、ウィジェットの横幅を PC 画面の 1/3 程度に狭めてください（スマホ表示時に押しつぶされてスクロールバーが出るのを防ぐため）。

縦幅は少し余裕を持って広めにドラッグしておくと安全です。

パターンB: 一般的なWebサイトやHTMLコードを使用する場合（iframe）

HTMLタグを記述して埋め込む場合は、以下の iframe コードをご利用ください。

<iframe 
  src="https://[あなたのGitHubユーザー名].github.io/[リポジトリ名]/?pid=[記事固有のID]&ptitle=[記事のタイトル]" 
  style="width:100%; height:120px; border:none;" 
  scrolling="no">
</iframe>


2. URL パラメータの仕様

ウィジェットを正しく機能させるために、URLの末尾に以下のパラメータを設定してください。

pid (Page ID / 必須): 記事ごとに一意となる半角英数字のID（例: somu_20260313_01）。このIDをキーにしてデータベースにカウントが保存されます。

ptitle (Page Title / 任意だが推奨): 集計画面で表示されるわかりやすい記事のタイトル（例: 総務部通信_セキュリティについて）。記号は含めないでください。

📊 管理者モード（集計・CSV出力）

設置したURLの末尾に &mode=admin （または ?mode=admin）を追加してアクセスすると、管理者専用の集計画面が開きます。

例:

https://[あなたのGitHubユーザー名].github.io/[リポジトリ名]/?mode=admin


管理画面の機能

全ページの集計一覧: これまでリアクションがあったすべてのページ（pid）のカウント一覧を確認できます。

CSV出力: 現在の集計データを CSV 形式でダウンロードできます。

リセット機能: 誤って押されたテストデータなどを、ページ（pid）単位で 0 にリセットできます。

🔒 Firebase セキュリティルール設定（重要）

本番環境で安全に運用するために、Firebase Firestore のセキュリティルールを以下のように設定してください。これにより、不正なデータ改ざんを防ぎます。

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 匿名認証済みのユーザーのみ読み書きを許可
    match /artifacts/[あなたのAPP_ID]/public/data/feedback/{pageId} {
      allow read, write: if request.auth != null;
    }
  }
}


また、Firebase Authentication の 「承認済みドメイン」 に、このウィジェットをホスティングしているドメイン（例: github.io）と、埋め込み先となるドメイン（例: google.com）を必ず追加してください。

📝 ライセンス

This project is licensed under the MIT License.
