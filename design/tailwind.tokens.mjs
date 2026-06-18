// tail-roll design tokens — claude.ai/design で生成（session674）
// Astro + React + Tailwind の tailwind.config の theme.extend にマージして使う。
// 仕様の全体は design/design-system.md を参照。

export const tailRollTheme = {
  colors: {
    canvas: '#FFFDF9',   // 背景（写真が映える明るいオフホワイト）
    surface: '#FFFFFF',  // カード面
    border: '#F1E9DC',   // 境界線
    ink: { DEFAULT: '#2A2420', soft: '#9A8E80' }, // 文字（温かいニアブラック）/ 補助
    // キャンディ・アクセント（小面積の差し色・顔隠しステッカー兼用）
    candy: { strawberry: '#FF6B6B', sunny: '#FFB23E', mint: '#2DD4BF', lilac: '#A78BFA' },
    // マスコット（巻きずし猫）/ ステッカー素体
    maki: { nori: '#3f5e46', salmon: '#FF8E72', cream: '#FBEFD8' },
  },
  borderRadius: { chip: '12px', card: '22px', panel: '28px', pill: '9999px' },
  fontFamily: { sans: ['Zen Maru Gothic', 'Outfit', 'sans-serif'] }, // hanoba と同一
  boxShadow: {
    soft: '0 4px 14px rgba(42,36,32,.06)',   // 標準カード
    lift: '0 10px 28px rgba(42,36,32,.10)',  // 浮き出し
    candy: '0 8px 18px rgba(255,107,107,.30)', // 主ボタン
  },
  // spacing は Tailwind 既定の 4px スケール（1=4px, 2=8px, 3=12px, 4=16px, 6=24px, 8=32px）でそのまま合致。
  // フォントは hanoba 同一（Zen Maru Gothic + Outfit, Google Fonts）。当初 Nunito+M PLUS Rounded 1c は Windows でジャギ問題が出て変更。
}

export default tailRollTheme
