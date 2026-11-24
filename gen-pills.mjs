import { mkdirSync, writeFileSync } from "node:fs";

const pills = { portfolio: "Portfolio", projects: "All projects", wiki: "Wiki", store: "Store", email: "Email" };
const themes = {
  dark:  { bg: "#14181f", border: "#2a313b", text: "#ece6dc", accent: "#e07b53" },
  light: { bg: "#f6f2ea", border: "#d8d0c2", text: "#1c1f24", accent: "#c9582e" },
};

mkdirSync("assets", { recursive: true });

for (const [key, label] of Object.entries(pills)) {
  const tw = Math.round(label.length * 9.2);
  const w = 26 + tw + 14 + 12 + 24;
  const ax = 26 + tw + 14;
  for (const [mode, c] of Object.entries(themes)) {
    writeFileSync(`assets/link-${key}-${mode}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="44" viewBox="0 0 ${w} 44" role="img" aria-label="${label}">
  <rect x="0.5" y="0.5" width="${w - 1}" height="43" rx="21.5" fill="${c.bg}" stroke="${c.border}"/>
  <text x="26" y="28.5" font-family="-apple-system,'Segoe UI',Helvetica,Arial,sans-serif" font-size="16" font-weight="600" fill="${c.text}" textLength="${tw}" lengthAdjust="spacingAndGlyphs">${label}</text>
  <path d="M${ax} 29 L${ax + 10} 19 M${ax + 2} 19 H${ax + 10} V27" fill="none" stroke="${c.accent}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`);
  }
}
