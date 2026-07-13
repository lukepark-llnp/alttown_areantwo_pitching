# ARENA TOWN — Arena Two × Alt.town 제안 + 데모

Arena Two(Omar Rahim)에게 Alt.town 인수를 제안하는 자료입니다. 100% 정적 HTML — 빌드 과정 없이 이 폴더(`site/`)를 그대로 배포하면 됩니다.

## 구성

| 파일 | 내용 |
|---|---|
| `index.html` | 제안서 — 기회 / Alt.town 소개 / 토큰 모델 / 7개 구단 / 로드맵(Phase 0–3) / 딜 근거 |
| `demo.html` | 인터랙티브 데모 — Town(오더북 거래) · Presale($AME 3라운드) · Matchday(라이브 투표) · Staking · UP ONLY · Governance · Wallet |
| `assets/`, `team/` | arenatwo.com에서 크롤링한 공식 에셋 (로고, 프레지던트 사진, 도시 이미지 등) |
| `assets/team-badges/` | **공식 팀 크레스트 SVG 7종** (arenatwo.com/assets/team-badges/ 원본). the-eagle · iron-fc · octa-fc · love-this-game-fc · dokkaebi-fc · atletico-samba · club-america. 3종은 배경 rect만 제거해 투명화함 |
| `assets/crests.js` | 크레스트 로더 (공식 배지 `CREST_SRC` + 수제 SVG 폴백 `CRESTS`) — 두 페이지 공용 |

## 특징

- **EN ↔ KR 토글**: 우측 상단 버튼. 선택은 localStorage로 두 페이지에 공유·유지됩니다.
- **폰트**: Bebas Neue + Metrophobic (arenatwo.com과 동일) + Noto Sans KR — Google Fonts CDN 로드이므로 온라인 환경에서 배포하세요.
- **데모 데이터**: 모든 가격/잔액/거래는 브라우저 내 시뮬레이션(외부 API 없음). 로드맵의 모든 항목이 데모 탭과 딥링크(`demo.html#staking` 등)로 연결됩니다.

## 로컬 미리보기

```bash
cd site && python3 -m http.server 8734
# http://localhost:8734
```

`file://`로 직접 열어도 동작하지만, 폰트/이미지 로딩을 위해 HTTP 서버 사용을 권장합니다.

## 배포

Netlify / Vercel / GitHub Pages / S3 등 아무 정적 호스팅에 `site/` 폴더째 업로드. 별도 설정 불필요.
