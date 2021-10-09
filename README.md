# THE NUEYE
## 포스트 추가

### 메인 카드
`src/index.tsx`의 `POSTS` 배열에 추가

### 페이지
`post/[path]/index.tsx` 파일 생성(`post/sample` 참고)

## 실행

```bash
npm run dev
```

## 배포

1. `master` 브랜치에 push 되면 자동 배포
2. actions에서 수동으로 배포 가능 (Github - Actions - deploy - Run workflow)