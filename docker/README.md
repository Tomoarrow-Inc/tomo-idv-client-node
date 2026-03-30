# npm 배포 — Docker 환경

npm에 `tomo-idv-client-node` 패키지를 배포하기 위한 Docker 환경.

## 사전 조건

- Docker Desktop 설치
- [npm](https://www.npmjs.com) 계정
- 패키지 배포 권한 (organization scope인 경우 해당 org의 member 이상)

## 빠른 시작

```bash
cd tomo-idv-client-node
docker compose -f docker/docker-compose.publish.yaml build
docker compose -f docker/docker-compose.publish.yaml up -d
docker compose -f docker/docker-compose.publish.yaml exec publish bash
```

## 컨테이너 내 작업 절차

### 1. npm login

```bash
npm login
# 브라우저 인증 또는 username/password/OTP 입력
```

### 2. 빌드 검증

```bash
npm install && npm run build
```

### 3. npm publish

```bash
# 버전 업데이트 (필요 시)
npm version <patch|minor|major>

# 배포
npm publish
```

배포 후 [npm 패키지 페이지](https://www.npmjs.com/package/tomo-idv-client-node)에서 버전 확인.

## Volume 설명

| Volume | 용도 |
|---|---|
| `npm-cache` | npm 캐시 영속화 (`~/.npm`) — 컨테이너 재시작해도 캐시 유지 |
| `npm-config` | npm 인증 토큰 영속화 (`~/.config`) — 한 번 로그인하면 컨테이너 재시작 후에도 인증 유지 |

## 정리

```bash
# 컨테이너 종료
docker compose -f docker/docker-compose.publish.yaml down

# Volume 포함 완전 삭제 (캐시/인증정보도 삭제됨)
docker compose -f docker/docker-compose.publish.yaml down -v
```

## 트러블슈팅

### npm ERR! 403 Forbidden

- npm 계정에 패키지 배포 권한이 있는지 확인
- scoped 패키지(`@org/pkg`)인 경우 `npm publish --access public` 사용
- 이미 동일 버전이 배포되어 있으면 버전을 올려야 함

### 인증 만료

npm 토큰이 만료된 경우 다시 로그인:

```bash
npm login
```

`npm-config` volume이 `~/.config/`를 영속화하므로, 재로그인 후 컨테이너를 재시작해도 인증이 유지된다.

### npm ERR! 402 Payment Required

scoped 패키지를 public으로 배포하려면:

```bash
npm publish --access public
```

또는 `package.json`에 설정:

```json
{
  "publishConfig": {
    "access": "public"
  }
}
```
