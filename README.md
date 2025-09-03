# Cloudflare Sample

Cloudflare Workersにデプロイするための実験場。
React + Vite + Tanstack Routerで問題な区デプロイできるところまで確認

## 技術スタック

- **フレームワーク**: React 19 + TypeScript 5.8
- **ビルドツール**: Vite 7
- **ルーティング**: TanStack Router
- **スタイリング**: Tailwind CSS v4
- **コード品質**: Biome (ESLint + Prettierの代替)
- **テスト**: Vitest + Playwright
- **コンポーネント開発**: Storybook 9
- **デプロイ**: Cloudflare Workers

## セットアップ

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev

# ビルド
pnpm build

# 型チェック
pnpm typecheck

# リンター実行
pnpm lint

# Storybook起動
pnpm storybook

# Cloudflare Workersでのプレビュー
pnpm preview

# デプロイ
pnpm deploy
```

## プロジェクト構成

```
src/
├── assets/          # 静的アセット
├── pages/           # ページコンポーネント
├── routes/          # ルーティング設定
├── stories/         # Storybookストーリー
└── styles/          # グローバルスタイル
```

## 主要な設定ファイル

- `vite.config.ts` - Vite設定（Cloudflare、Tailwind、TanStack Router統合）
- `biome.json` - Biome設定（コード品質・フォーマット）
- `wrangler.jsonc` - Cloudflare Workers設定
- `tsconfig.json` - TypeScript設定

## 特徴

- **Tailwind CSS v4**: 最新のTailwind CSSを使用（設定ファイル不要）
- **TanStack Router**: 型安全なルーティング
- **Biome**: 高速なコード品質ツール
- **Storybook**: コンポーネント駆動開発
- **Cloudflare Workers**: エッジでのデプロイ
- **Playwright**: ブラウザテスト

## 開発

このプロジェクトは以下のコマンドで開発できます：

- `pnpm dev` - 開発サーバー起動
- `pnpm storybook` - Storybook起動
- `pnpm preview` - Cloudflare Workersでのプレビュー
- `pnpm deploy` - 本番環境へのデプロイ
