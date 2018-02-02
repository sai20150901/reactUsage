# reactUsage
React入門勉強

### はじめに
- [node.js](https://nodejs.org/en/download/)をインストールするをインストールする

- [React プラグイン](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)をインストール

- WebStormをインストール

- GitHubのリポジトリをローカルにダウンロード
``https://github.com/sai20150901/reactUsage.git``
ローカルのリポジトリに移動し、下記のコマンドを実行する
``npm install``

### レッスン開始

- サーバを起動する
``npm start``

- Chromeで画面にアクセスする
http://localhost:7777/


### React
#### プロジェクトの基本構造
[+]dist
[+]docs
[+]mock
[+]node_modules
[+]src
[+]tests
　package.json
　server.js
　webpack.config.js
　
 + dist はindex.htmlとコンパイル済みのファイルの置き場
 + docs ドキュメントの置き場
 + mock データのテンプレート置き場
 + node_modules npm installでインストールししたモジュールの置き場
 + src ソースコードの置き場
 + tests　テストケースの置き場
 + package.json プロジェクトの概要、依存するパッケージなどを記述する。
 + server.js サービスを起動する、node.js expressを使ったスクリプト。
 + webpack.config.js コンパイルツールwebpackの設定ファイル(開発用)
 + webpack.config.prod.js コンパイルツールwebpackの設定ファイル(製品用)
 + .babelrc babelの設定ファイル
#### Lesson 1
    Hello World
    Components

#### Lesson 2
    Redux
    React-Router
    [Reduxに関するブログ](http://qiita.com/mgoldchild/items/5be49ea49ebc2e4d9c55)
