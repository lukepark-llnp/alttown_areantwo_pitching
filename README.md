# Arena Two × Alt.town — Pitching & Demo

Arena Two(Omar Rahim)에게 Alt.town의 web 2.5 트레이딩 엔진 기반 확장을 제안하는 **제안서 + 인터랙티브 데모**입니다.

- **배포 주소**: https://arenatwo.radarax.io (제안서) · https://arenatwo.radarax.io/demo.html (데모)
- 빌드 과정 없는 100% 정적 HTML — 파일을 고치고 push하면 끝입니다.

## 구조

```
site/                     ← 배포되는 전부 (이 폴더만 서빙됩니다)
├─ index.html             제안서 (EN/KR 토글)
├─ demo.html              [엔진 · Web 3.0] 인터랙티브 데모 — 7팀 토큰 마켓/프리세일/매치데이 투표/스테이킹/UP ONLY/거버넌스/지갑
├─ demo-fan.html          [팬 · Web 2.5] 같은 제품의 팬 화면 — 크립토 용어를 전부 숨긴 소비자 앱 뷰
│                         (상단 스위치로 두 버전 비교 · "뒤에서 보기" 토글로 밑에서 도는 온체인 동작 노출)
├─ assets/
│  ├─ team-badges/        공식 팀 크레스트 (arenatwo.com 원본)
│  ├─ crests.js           크레스트 로더 (공용)
│  └─ landing/, ...       arenatwo.com 크롤링 에셋
└─ README.md              상세 설명
```

## 수정 방법 (비개발자용)

1. GitHub에서 파일을 직접 열어 ✏️(Edit) 버튼으로 수정 → Commit 하거나, 로컬에서 수정 후 push 합니다.
2. **문구 수정**: `site/index.html`(제안서), `site/demo.html`(데모)에서 해당 텍스트를 검색해 바꿉니다.
   - 한국어/영어가 분리되어 있습니다: 영어는 HTML 본문에, 한국어는 각 파일 하단 `<script>` 안의 `KR = { ... }` 사전에 있습니다. **같은 키를 양쪽 다 수정해야** 두 언어 모두 반영됩니다.
3. push 후 배포 반영은 Luke에게 요청 (서버에서 `deploy.sh` 1회 실행).

## 로컬 미리보기

```bash
cd site && python3 -m http.server 8000
# http://localhost:8000
```

---
문의: Luke Park
