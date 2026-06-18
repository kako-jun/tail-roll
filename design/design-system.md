# tail-roll Design System

claude.ai/design で生成（session674）。**生のビジュアルモックアップ（ライブ・編集可）は Claude Design プロジェクト側が正本**。このドキュメントと `tailwind.tokens.mjs` が**コード側の正本**で、実装はこれを Astro + React + Tailwind（hanoba フォーク）に wire する。

- Claude Design プロジェクト: https://claude.ai/design/p/afa9bb02-88ae-42ab-8c04-3e672b246cb3
- プロジェクト内の画面モックアップ（必要時に `design/` へ再 pull 可）: `tail-roll Feed.dc.html` / `tail-roll Post Editor.dc.html` / `tail-roll Cat Run.dc.html` / `tail-roll Profile.dc.html` / `tail-roll Design System.dc.html`
- トークン: `design/tailwind.tokens.mjs`

## トーン
明るい今風SNS（ステッカー文化＋写真ファースト＋masonry 発見のいいとこ取り）。**猫が基本**・全ペット可。ヒーロー見出し「**人も部屋も隠して、ペットだけ。**」（「猫に、初めてのランを」は猫を外で走らせると誤読され不採用）

## カラー
- 背景 `canvas #FFFDF9` / `surface #FFFFFF` / `border #F1E9DC`
- 文字 `ink #2A2420` / `ink-soft #9A8E80`
- キャンディ（小面積の差し色・ステッカー兼用）: `strawberry #FF6B6B` / `sunny #FFB23E` / `mint #2DD4BF` / `lilac #A78BFA`
- マスコット補助: 海苔グリーン `#3f5e46` / サーモン `#FF8E72` / クリーム（耳・尻尾）`#FBEFD8`

## タイポ
hanoba と同一：和文 **Zen Maru Gothic** ＋ 英字 **Outfit**（Google Fonts）。Display 900/48・H2 800/30・H3 700/20・Body 400/16・Caption 800/13。（当初案の Nunito+M PLUS Rounded 1c は Windows でジャギ問題が出たため hanoba 準拠に変更）

## シェイプ
- 角丸: `chip 12` / `card 22` / `panel 28` / `pill 9999`
- 余白: 4の倍数（8/12/16/24/32）。フィードは詰め、詳細・投稿は広く。
- 陰影: `soft 0 4px 14px rgba(42,36,32,.06)` / `lift 0 10px 28px rgba(42,36,32,.10)` / `candy 0 8px 18px rgba(255,107,107,.30)` / 暖色ボーダー `1.5px #FFD9B0`

## コンポーネント
- **ボタン（pill）**: 主＝strawberry 塗り＋candy 影／副＝白＋border／follow＝mint／heart＝薄赤地に赤／dark＝ink 地／disabled＝`#F4ECDF`。
- **品種 chip**: 絵文字＋淡色地の pill。**猫を先頭**（🐱三毛/キジトラ/サビ/白黒）→🐶柴→🐰うさぎ→🐦文鳥→「＋タグ」（破線）。
- **写真カード3案**: A＝オーバーレイ（上に品種chip／下にグラデ＋名前＋♥）／ B＝キャプション下置き（名前＋品種chip＋♥💬）／ C＝ミニマル（正方形＋右下♥FAB＋下にアバター＋名前）。**フィードは masonry**（高さ可変）。
- **ボトムタブ**: 🏠フィード / 🐾キャットラン / ＋（中央 FAB＝strawberry・浮き出し）/ 🔔おしらせ / 😺うちの子。
- **空状態**: マキ猫マスコット（wiggle）＋「まだ、なにもないみたい」＋「＋投稿してみる」。

## マスコット（巻きずし猫）
海苔グリーン円（`#3f5e46`）＝巻きの外側、白リング＝米、サーモン円（`#FF8E72`）＝中の猫（**後ろ向き・顔なし**）、クリーム三角の耳×2、クリームの尻尾が右下へ飛び出す（rotate 28deg・先端に黒点）。`tr-float`/`tr-wiggle`/`tr-pop` アニメ。→ 確定意匠は **studio-yokonami#4** で清書。

## 顔隠しステッカー（オリジナル意匠・攻殻の笑い男は不使用）
丸い顔覆い・白 4px 枠・candy 影。5種: **maki**（マスコット縮約）/ **berry**（赤地＋白目2点＋口）/ **paw**（mint 地＋白肉球）/ **bloom**（lilac 地＋✺）/ **dots**（sunny 地＋白3点）。投稿エディタで顔に自動配置 → 手動 修正/追加/削除（→ **tail-roll#1**）。
- プライバシー安心バッジ（mint 系・絵文字なし）: 「**隠してから、公開する。／顔も部屋もブラウザの中で隠す。隠す前の写真は、端末の外に出ません。**」（※「サーバーに送られません」は Nostr 公開と矛盾する嘘なので不可。世に出るのは隠した後の版だけ）

## アニメ
`tr-pop`（貼る）/ `tr-wiggle`（揺れ）/ `tr-float`（浮遊）。「ステッカーを貼る/剥がす」ポップな動き。
