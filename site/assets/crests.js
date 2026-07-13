/* ARENA TOWN — team crest system (inline SVG, inherits page fonts) */
(function(){
const BG = '#151616', VOLT = '#F3FF3D', INK = '#0c0d0c';

/* shared shapes */
const SHIELD  = 'M256 30 L442 88 V262 C442 380 362 450 256 486 C150 450 70 380 70 262 V88 Z';
const SHIELD_IN = 'M256 62 L412 110 V258 C412 362 344 422 256 454 C168 422 100 362 100 258 V110 Z';
const HEX  = 'M256 34 L446 96 V300 L256 482 L66 300 V96 Z';
const HEX_IN = 'M256 66 L416 118 V288 L256 446 L96 288 V118 Z';

function ball(cx, cy, r, line, fill){
  fill = fill || '#fcfcf7';
  const p = r*0.42;
  return `
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${line}" stroke-width="${r*0.09}"/>
  <polygon points="${cx},${cy-p} ${cx+p*0.95},${cy-p*0.31} ${cx+p*0.59},${cy+p*0.81} ${cx-p*0.59},${cy+p*0.81} ${cx-p*0.95},${cy-p*0.31}" fill="${line}"/>
  ${[[0,-1],[0.95,-0.31],[0.59,0.81],[-0.59,0.81],[-0.95,-0.31]].map(([x,y])=>
    `<line x1="${cx+p*x}" y1="${cy+p*y}" x2="${cx+p*x*1.95}" y2="${cy+p*y*1.95}" stroke="${line}" stroke-width="${r*0.07}"/>`).join('')}`;
}
function tickerText(label, y, color, size){
  return `<text x="256" y="${y}" text-anchor="middle" font-family="'Bebas Neue','Noto Sans KR',Impact,sans-serif" font-size="${size||64}" letter-spacing="6" fill="${color}">${label}</text>`;
}
const svgo = inner => `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

const C = {};

/* ─── EAGLES FC — golden eagle, Dagestan ─── */
C.EAGL = svgo(`
  <path d="${SHIELD}" fill="#D9B64A"/>
  <path d="${SHIELD_IN}" fill="${BG}"/>
  <path d="${SHIELD_IN}" fill="none" stroke="${VOLT}" stroke-width="3" opacity=".55"/>
  <defs>
    <polygon id="eaglWing" points="248,182 112,142 148,170 104,178 150,200 116,214 164,226 148,250 198,240 240,216"/>
  </defs>
  <g fill="#D9B64A">
    <use href="#eaglWing"/>
    <use href="#eaglWing" transform="translate(512,0) scale(-1,1)"/>
    <!-- head with hooked beak -->
    <circle cx="256" cy="146" r="24"/>
    <path d="M274 138 C290 142 292 152 278 158 L264 154 Z" fill="#D9B64A"/>
    <!-- body -->
    <path d="M240 178 L272 178 L266 258 L246 258 Z"/>
    <!-- tail fan -->
    <path d="M240 258 L272 258 L292 306 L256 290 L220 306 Z"/>
  </g>
  <circle cx="262" cy="142" r="4.5" fill="${BG}"/>
  <path d="M176 332 H336" stroke="#D9B64A" stroke-width="4"/>
  ${tickerText('EAGLES FC', 394, '#D9B64A', 54)}
  ${tickerText('DAGESTAN', 428, '#8a8a8a', 22)}
`);

/* ─── FC IRON 10 — forged steel, Munich ─── */
C.IRON = svgo(`
  <path d="${HEX}" fill="#9AA5B1"/>
  <path d="${HEX_IN}" fill="${BG}"/>
  <path d="${HEX_IN}" fill="none" stroke="${VOLT}" stroke-width="3" opacity=".5"/>
  <!-- rivets -->
  <circle cx="256" cy="88" r="8" fill="${BG}"/>
  <circle cx="122" cy="132" r="8" fill="${BG}"/><circle cx="390" cy="132" r="8" fill="${BG}"/>
  <circle cx="96"  cy="286" r="8" fill="${BG}"/><circle cx="416" cy="286" r="8" fill="${BG}"/>
  <!-- big 10 -->
  <text x="256" y="272" text-anchor="middle" font-family="'Bebas Neue',Impact,sans-serif" font-size="190" letter-spacing="2" fill="#C4CDD6">10</text>
  <!-- chevrons -->
  <path d="M200 300 L256 330 L312 300" fill="none" stroke="${VOLT}" stroke-width="12"/>
  <path d="M214 326 L256 349 L298 326" fill="none" stroke="#9AA5B1" stroke-width="8"/>
  ${tickerText('FC IRON 10', 408, '#C4CDD6', 44)}
`);

/* ─── OCTA FC — the octagon cage, Manchester ─── */
(function(){
  function octo(r){ const pts=[]; for(let i=0;i<8;i++){ const a=Math.PI/8 + i*Math.PI/4; pts.push(`${(256+r*Math.cos(a)).toFixed(1)},${(256+r*Math.sin(a)).toFixed(1)}`);} return pts.join(' '); }
  C.OCTA = svgo(`
    <polygon points="${octo(218)}" fill="#73d2d0"/>
    <polygon points="${octo(192)}" fill="${BG}"/>
    <polygon points="${octo(192)}" fill="none" stroke="${VOLT}" stroke-width="3" opacity=".55"/>
    <polygon points="${octo(150)}" fill="none" stroke="#73d2d0" stroke-width="5" opacity=".7"/>
    <!-- cage mesh (kept above the text zone) -->
    <g stroke="#2e4d4c" stroke-width="3">
      <line x1="136" y1="136" x2="330" y2="330"/><line x1="376" y1="136" x2="182" y2="330"/>
      <line x1="256" y1="76" x2="256" y2="330"/><line x1="86" y1="256" x2="426" y2="256"/>
    </g>
    ${ball(256, 220, 74, '#0c0d0c')}
    <!-- solid band behind ticker -->
    <rect x="106" y="342" width="300" height="96" fill="${BG}"/>
    <path d="M170 342 H342" stroke="#73d2d0" stroke-width="4"/>
    ${tickerText('OCTA FC', 398, '#73d2d0', 56)}
    ${tickerText('MANCHESTER', 432, '#8a8a8a', 22)}
  `);
})();

/* ─── LOVE THIS GAME FC — heart × ball, Paris ─── */
C.LOVE = svgo(`
  <path d="M256 470 C120 366 60 284 60 192 C60 118 116 66 186 66 C216 66 244 82 256 108 C268 82 296 66 326 66 C396 66 452 118 452 192 C452 284 392 366 256 470 Z" fill="#ff6b6b"/>
  <path d="M256 440 C136 346 86 274 86 194 C86 134 130 92 186 92 C222 92 248 112 256 140 C264 112 290 92 326 92 C382 92 426 134 426 194 C426 274 376 346 256 440 Z" fill="${BG}"/>
  <path d="M256 440 C136 346 86 274 86 194 C86 134 130 92 186 92 C222 92 248 112 256 140 C264 112 290 92 326 92 C382 92 426 134 426 194 C426 274 376 346 256 440 Z" fill="none" stroke="${VOLT}" stroke-width="3" opacity=".5"/>
  ${ball(256, 208, 72, '#a33')}
  ${tickerText('LOVE THIS', 332, '#ff6b6b', 46)}
  ${tickerText('GAME FC', 376, '#ff6b6b', 46)}
  <text x="256" y="410" text-anchor="middle" font-family="'Bebas Neue',Impact,sans-serif" font-size="22" letter-spacing="6" fill="#8a8a8a">PARIS</text>
`);

/* ─── DOKKAEBI FC — horned mask, Seoul ─── */
C.DKB = svgo(`
  <!-- horns breaking out above the shield -->
  <path d="M164 104 C132 54 142 18 168 -2 C178 40 202 62 228 78 Z" fill="${VOLT}"/>
  <path d="M348 104 C380 54 370 18 344 -2 C334 40 310 62 284 78 Z" fill="${VOLT}"/>
  <path d="${SHIELD}" fill="#4a90e2"/>
  <path d="${SHIELD_IN}" fill="${BG}"/>
  <path d="${SHIELD_IN}" fill="none" stroke="${VOLT}" stroke-width="3" opacity=".55"/>
  <g fill="#4a90e2">
    <!-- mask brow -->
    <path d="M148 158 L256 128 L364 158 L352 190 L256 164 L160 190 Z"/>
    <!-- eyes: angled slits -->
    <path d="M172 216 L240 200 L236 232 L180 240 Z" fill="${VOLT}"/>
    <path d="M340 216 L272 200 L276 232 L332 240 Z" fill="${VOLT}"/>
    <!-- nose -->
    <path d="M248 240 L264 240 L272 276 L240 276 Z"/>
    <!-- grin with fangs -->
    <path d="M170 292 C210 322 302 322 342 292 L330 330 C296 352 216 352 182 330 Z"/>
    <path d="M206 305 L222 301 L216 336 Z" fill="#fcfcf7"/>
    <path d="M306 305 L290 301 L296 336 Z" fill="#fcfcf7"/>
  </g>
  ${tickerText('DOKKAEBI FC', 400, '#7fb3f0', 52)}
  ${tickerText('SEOUL', 436, '#8a8a8a', 24)}
`);

/* ─── ATLÉTICO SAMBA — diagonal samba roundel, Rio ─── */
C.SMBA = svgo(`
  <polygon points="256,10 268,44 304,44 275,66 286,100 256,80 226,100 237,66 208,44 244,44" fill="${VOLT}"/>
  <circle cx="256" cy="278" r="204" fill="#58C972"/>
  <circle cx="256" cy="278" r="178" fill="${BG}"/>
  <circle cx="256" cy="278" r="178" fill="none" stroke="${VOLT}" stroke-width="3" opacity=".5"/>
  <defs><clipPath id="smbaClip"><circle cx="256" cy="278" r="178"/></clipPath></defs>
  <g clip-path="url(#smbaClip)">
    <path d="M60 320 L380 60 L436 116 L116 376 Z" fill="#58C972" opacity=".28"/>
    <path d="M120 420 L456 148 L488 196 L160 460 Z" fill="${VOLT}" opacity=".2"/>
  </g>
  ${ball(256, 236, 76, '#1d5a33')}
  <path d="M168 348 H344" stroke="#58C972" stroke-width="4"/>
  ${tickerText('ATLÉTICO', 400, '#58C972', 44)}
  ${tickerText('SAMBA · RIO', 442, '#8fdca6', 30)}
`);

/* ─── CLUB AMÉRICA — cream & navy roundel, Mexico City ─── */
C.AME = svgo(`
  <circle cx="256" cy="256" r="222" fill="#00369C"/>
  <circle cx="256" cy="256" r="198" fill="#F6ECCB"/>
  <circle cx="256" cy="256" r="198" fill="none" stroke="#C8102E" stroke-width="6"/>
  <!-- navy central band -->
  <path d="M58 210 H454 V302 H58 Z" fill="#00369C"/>
  <path d="M58 198 H454 V210 H58 Z" fill="#C8102E"/>
  <path d="M58 302 H454 V314 H58 Z" fill="#C8102E"/>
  <text x="256" y="290" text-anchor="middle" font-family="'Bebas Neue',Impact,sans-serif" font-size="96" letter-spacing="10" fill="#F6ECCB">AME</text>
  ${ball(256, 130, 46, '#00369C', '#F6ECCB')}
  ${tickerText('CLUB AMÉRICA', 372, '#00369C', 40)}
  <text x="256" y="410" text-anchor="middle" font-family="'Bebas Neue',Impact,sans-serif" font-size="24" letter-spacing="5" fill="#C8102E">MEXICO CITY</text>
`);

window.CRESTS = C; /* hand-drawn fallback set */

/* OFFICIAL Arena Two team badges (crawled from arenatwo.com/assets/team-badges/) */
window.CREST_SRC = {
  EAGL: 'assets/team-badges/the-eagle.svg',
  IRON: 'assets/team-badges/iron-fc.png',
  OCTA: 'assets/team-badges/octa-fc.svg',
  LOVE: 'assets/team-badges/love-this-game-fc.svg',
  DKB:  'assets/team-badges/dokkaebi-fc.svg',
  SMBA: 'assets/team-badges/atletico-samba.svg',
  AME:  'assets/team-badges/club-america.svg'
};

/* helper: crest badge — official badge <img>, falls back to hand-drawn SVG, then initials */
window.crest = function(id, px){
  px = px || 34;
  const src = window.CREST_SRC[id];
  if(src) return `<span class="crest crest-img" style="width:${px}px;height:${px}px;background:transparent"><img src="${src}" alt="${id}"></span>`;
  const svg = C[id];
  if(svg) return `<span class="crest crest-svg" style="width:${px}px;height:${px}px;background:transparent">${svg}</span>`;
  return `<span class="crest" style="width:${px}px;height:${px}px;background:#3a3a3a">${(id||'?').slice(0,3)}</span>`;
};
})();
