# tail-roll

里親になった後の、ペットとの幸せな毎日を共有する写真SNS。**映り込む顔も家具も、ブラウザの中で隠してから。**

- 映り込む人の顔は、ブラウザ内で**顔隠しステッカー**で隠す（自動＋手動）。家具は**ぼかす**。**画像はサーバーに送らない。**
- コミュニティの場「**キャットラン**」── 猫が現実で持てない集いの場を、ネットで。
- **猫が基本**・全ペット可。

tail-match（保護犬猫マッチング）の「その後」を受け止める姉妹サービス。エンジンは hanoba（Astro + React + Tailwind + Nostr）を下敷きに、デザインは claude.ai/design 生成のキャンディSNSトーン。

## 開発

```sh
npm install
npm run dev        # http://127.0.0.1:4330
npm run build
npm run typecheck
```

## デザイン

- 仕様: `design/design-system.md`
- トークン: `design/tailwind.tokens.mjs`（実装の正本は `src/styles/global.css` の `@theme`）
- ライブ mockup: claude.ai/design プロジェクト（`design/design-system.md` にリンク）
