# これは開発者用のドキュメントです

# Project Files

* `atcoder-math-and-algorithm-extension/`
  - プロジェクトフォルダ
* `atcoder-math-and-algorithm-extension/dst/`
  - Chrome拡張で公開するフォルダ
* `atcoder-math-and-algorithm-extension/src/`
  - ソースファイルフォルダ

# Development Environment Installation
## node.js
10.16.0 LTS

* Download for Windows: https://nodejs.org/ja/

## Install Development Environment

`atcoder-math-and-algorithm-extension/`フォルダへ移動し、以下を実行してください。

```
> npm ci
```

`node_modules` がローカルに作成されたら成功です。

以下のコマンドでTypeScriptファイルをビルドします。

```
# 開発用ビルド
> npm run build-dev

# 製品版ビルド
> npm run build
```

## How to develop
 `content_scripts.ts` にプログラムのエントリポイントがあります。

ビルドされたすべての ts ファイルは js にトランスパイルされ、`atcoder-math-and-algorithm-extension/dst/bin`に出力されます。

# Publish (and Update)

最終的に公開するファイルは `atcoder-math-and-algorithm-extension/dst/` 以下のすべてのファイルになります。

`dst`フォルダをzip化し、Chrome Web Storeに公開します。

更新する際は、`manifest.json` の `version` を忘れずに上げてください。