# ユーザーフィードバック・リアクション部品 (Feedback Widget)

Google サイトなどの社内ポータル記事に埋め込んで使用する、macOS コントロールセンター風の洗練されたリアクションウィジェットです。

> **⚠️ Notice / 注意事項**
> 本リポジトリのソースコードはオープンソース（MIT License）として公開していますが、デプロイ済みのエンドポイント（`https://uds-feedback-widget.web.app`）は特定の社内ドメインからの iframe 読み込みのみを許可する CSP (Content-Security-Policy) が設定されています。
> そのため、外部のWebサイトやブログ等に埋め込んでもエラーとなり表示・動作いたしません。ご自身の環境で利用する場合は、本リポジトリをフォークし、ご自身のFirebase環境にデプロイしてご使用ください。

## ✨ 特徴
* **モダンなデザイン**: macOS の UI に着想を得た、美しく視認性の高いデザイン。
* **完全なレスポンシブ**: スマホ表示でもスクロールバーが出ず、どんな画面サイズにも最適化して表示されます。
* **リアルタイム集計**: Firebase Firestore をバックエンドに使用し、全ユーザーのクリックがリアルタイムに反映されます。
* **セキュアな設計**: 指定した社内ドメイン（Google Sites等）以外からの埋め込み（タダ乗り）をネットワークレベルでブロックします。

## 🛠 技術スタック
* **Frontend**: React 18, Tailwind CSS, Babel (CDN経由で動作、ビルド不要)
* **Backend**: Firebase (Authentication: 匿名認証, Firestore: リアルタイムデータベース)
* **Hosting**: Firebase Hosting (マルチサイト構成)

## 🚀 社内での設置方法（管理者向け）

### 埋め込み方法
Google サイトの編集画面にて、以下のURLを直接埋め込んでください。（`[記事固有のID]`、`[記事のタイトル]` を書き換えます）

```text
https://uds-feedback-widget.web.app/?pid=[記事固有のID]&ptitle=[記事のタイトル]
```

### 【重要】Googleサイトでの設置のコツ
* 編集画面の「埋め込み」メニューから **「URL」タブ** を選択し、上記のURLを直接貼り付けます。
* 挿入後、ウィジェットの**横幅を PC 画面の 1/3 程度**に狭めてください（スマホ表示時に押しつぶされてスクロールバーが出るのを防ぐため）。
* 縦幅は少し余裕を持って広めにドラッグしておくと安全です。

## 📊 管理者モード（集計・CSV出力）
設置したURLの末尾に `&mode=admin` （または `?mode=admin`）を追加してアクセスすると、管理者専用の集計画面が開きます。

**例:**
`https://uds-feedback-widget.web.app/?mode=admin`

## 🔒 セキュリティ設定の備忘録
本アプリを安全に運用するため、以下の設定を行っています。

1. **Firestore セキュリティルール**
   匿名認証済みのユーザーのみ、指定のコレクションへの読み書きを許可。
2. **Firebase Authentication 承認済みドメイン**
   埋め込み先となるドメイン（`sites.google.com` 等）のみを許可。
3. **Firebase Hosting ヘッダー設定 (CSP)**
   `firebase.json` にて `frame-ancestors` を指定し、社内ドメイン以外での iframe 展開をブロック。

## 📝 ライセンス
This project is licensed under the MIT License.