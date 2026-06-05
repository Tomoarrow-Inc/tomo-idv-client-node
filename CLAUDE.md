# tomo-idv-client-node

npm SDK for OAuth2 client-assertion (ES256/P-256). Provides Node.js clients for idv-server API authentication.

## 이름 안정성 원칙

외부에서 관측될 수 있는 이름 변경은 단순 정리가 아니라 고위험 호환성 변경으로 취급한다. public 예제의 변수명, request/response field, OpenAPI property, generated type name, enum value, endpoint path/name, SDK public API name, DB table/column name, OAuth/JWT claim, env/config name, 기타 contract-derived name은 보수적으로 유지한다.

모듈 또는 서비스 경계를 넘는 이름은 단독으로 변경하지 않는다. 필요한 rename은 승인된 cross-module contract, migration, codegen, compatibility plan이 있을 때만 수행한다. 외부 호출자, generated client, 저장 데이터, package consumer가 기존 이름에 의존할 수 있으면 replacement보다 additive alias, compatibility shim, deprecation path를 우선한다.

이 npm SDK에서는 특히 npm exports, generated client names, OAuth/JWT claim names, package entrypoints, public helper APIs(client assertion helper 등)를 안정적인 public surface로 취급한다.

## Agent 워크트리 원칙

이 서브모듈에서 작업하는 agent는 반드시 워크트리(격리된 작업 공간)에서 실행된다.

- `dev`, `main` 등 보호 브랜치에서 직접 작업하지 않는다
- 워크트리 내에서 새 브랜치를 생성하여 커밋한다
- 변경 사항의 대상 브랜치 머지는 사용자의 명시적 명령으로만 수행된다

## Agent 커밋 워크플로우

agent는 작업 시 다음 커밋 규칙을 따른다:

- todo list의 각 항목을 수행할 때마다 관련 테스트를 실행한다
- 테스트 통과 시 즉시 커밋하고 다음 항목으로 진행한다
- 테스트 실패 시 수정 후 재테스트 → 통과 시 커밋

### 커밋 메시지 포맷

```
<prefix>: <한줄 요약>

## 문제
<해결해야 할 문제>

## 해결책
<문제의 해결책>

## 작업 내용
<구체적으로 수행한 작업>

## 검증
<작업이 올바른지 확인한 방법>

## 테스트
<실행한 테스트 설명>

## 테스트 코드
<실행한 테스트 코드 또는 명령어>

## 테스트 결과
<테스트 입출력 내용>
```
