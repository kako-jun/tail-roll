import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import AstroPWA from "@vite-pwa/astro";
import { defineConfig } from "astro/config";

// 完全静的・バックエンドレス。状態は将来 Nostr（クライアント側）に乗せる。
// SSR アダプタは持たない（dist/ をそのまま CF Pages に配信）。hanoba と同じ作法。
export default defineConfig({
  site: "https://tail-roll.llll-ll.com",
  output: "static",
  integrations: [
    react(),
    sitemap(),
    AstroPWA({
      registerType: "autoUpdate",
      manifest: {
        name: "tail-roll",
        short_name: "tail-roll",
        description: "里親になった後の、ペットとの幸せな毎日を共有するSNS。映り込む顔も家具も、ブラウザの中で隠してから。",
        id: "/",
        start_url: "/",
        scope: "/",
        theme_color: "#FF6B6B",
        background_color: "#FFFDF9",
        display: "standalone",
        orientation: "portrait",
        lang: "ja",
        categories: ["lifestyle", "photo", "social"],
        // 当面は SVG アイコンのみ。確定マスコット（studio-yokonami#4）から PNG/maskable を後で生成する。
        icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
