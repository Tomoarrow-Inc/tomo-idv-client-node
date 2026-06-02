# tomo-idv-client-node

npm SDK for OAuth2 client-assertion (ES256/P-256). Provides Node.js clients for idv-server API authentication.

## Codex Submodule Agent Role

The Codex agent for this repository is the Node SDK submodule agent. Its job is to keep the npm package consumable, buildable, publishable, and aligned with the idv-server OpenAPI contract.

Concrete capabilities:

- Maintain the OAuth2 client assertion helper that signs JWT assertions with ES256/P-256.
- Maintain public package exports for both ESM and CommonJS consumers.
- Maintain the generated TypeScript `fetch` client surfaced from `src/generated/`.
- Maintain npm package metadata, build scripts, TypeScript configuration, README examples, and npm publishing readiness.
- Add or update tests for any non-documentation behavior change, especially crypto, JWT claim, export, and generated-client integration behavior.
- Diagnose SDK build or publishing failures and report whether the failure belongs in this SDK, the root contract pipeline, or idv-server.

The agent does not own the upstream API contract. If a generated model, endpoint, or wire shape is wrong, report the contract issue and regenerate from the root pipeline after the contract is corrected.

## Work Location and Write Scope

Work in the checkout chosen by the user. Do not create or require a worktree unless the user explicitly chooses one.

Allowed write scope:

- `AGENTS.md`, `README.md`, `docker/README.md`, and SDK documentation.
- `package.json`, package lock files if present, `tsconfig*.json`, build scripts, and npm publishing metadata.
- `src/ClientAssertionHelper.ts`, `src/index.ts`, and other hand-written SDK source files outside generated output.
- Tests when present or when added for behavior changes.
- `scripts/` files used by this SDK.
- `src/generated/` only when it is produced by the approved OpenAPI generation pipeline.
- `dist/` only when it is produced by the TypeScript build and the package policy requires committing build output.

Forbidden scope:

- Do not edit the root project, sibling submodules, root `ci/`, or idv-server from this agent.
- Do not commit `.env*`, credentials, private keys, npm tokens, or local caches.
- Do not weaken OAuth2 client assertion security: keep ES256, P-256 private keys, base64url/JWK handling, issuer/subject/audience semantics, and short assertion lifetime behavior unless a security owner approves a protocol change.
- Do not change package name, public exports, module format, Node engine floor, or npm publishing behavior without explicit release-owner approval.
- Do not publish, tag, or bump a release version unless the user explicitly requests that release action.
- Do not hand-edit generated OpenAPI client files to fix API shape problems.

## Generated-Code Policy

Generated TypeScript client files are contract outputs, not source-of-truth files.

Generated paths include:

- `src/generated/`
- `src/generated/apis/`
- `src/generated/models/`
- `src/generated/docs/`
- `src/generated/.openapi-generator/`
- Generated files copied into `dist/` by `npm run build`

Rules:

- Never manually patch generated files to change request names, response fields, endpoint paths, serialization, or API behavior.
- Regenerate generated files from the root project contract pipeline: `source ./dcp` then `dcp ci up`.
- Keep generated source and generated docs from the same OpenAPI spec revision together.
- If generator output does not compile, identify whether the fix belongs in idv-server contract definitions, root `ci/` generator configuration, or this SDK's non-generated wrapper code. Report the boundary clearly.
- Manual edits are allowed only in hand-written helper/export code and generator support files that belong to this repository.

## Compatibility and Versioning Duties

- Preserve npm package name `tomo-idv-client-node`.
- Preserve public exports from `src/index.ts` for both ESM `import` and CommonJS `require` consumers.
- Preserve the Node engine floor unless there is an explicit release decision to raise it.
- For the `1.2.x` line, treat releases as patch-compatible: no intentional removal or rename of exported SDK APIs, no module-format break, no package entrypoint break, and no OAuth2 claim/signature behavior change unless approved as a security or contract requirement.
- When generated OpenAPI types change during a `1.2.x` release, call out whether the change is additive, source-compatible, or breaking.
- Keep crypto implementation changes conservative. For client assertion work, verify ES256/P-256 signing, JWT claims, base64url encoding, token request body construction, and audience/resource defaults.
- Keep generated TypeScript fetch client exports aligned with `sdk.openapi.json`; do not invent local request/response wrappers that change wire semantics.

## Verification Commands

Use the smallest verification that proves the change. For documentation-only edits, a diff is enough:

```bash
git diff -- AGENTS.md
```

For Node source or generated client changes inside this repository:

```bash
npm run build
```

If behavior tests are added, make `npm test` meaningful and run it:

```bash
npm test
```

For npm package verification:

```bash
npm pack --dry-run
npm publish --dry-run
```

Root-level verification commands, when the user explicitly asks for contract generation or SDK release packaging:

```bash
source ./dcp
dcp ci up
dcp local sdk node
dcp publish node 1.2.x
```

Do not run publish commands against external registries without explicit user approval and required credentials.

## Final Report Expectations

Every final report must include:

- Changed files.
- Short summary of the SDK behavior or documentation updated.
- Verification commands run and their results.
- Whether generated files were changed, and if so, which contract pipeline produced them.
- Any compatibility or `1.2.x` release impact.
- Any remaining errors, skipped checks, or release blockers.

## Agent 워크트리 원칙

사용자가 워크트리를 선택한 경우에는 아래 원칙을 따른다:

- `dev`, `main` 등 보호 브랜치에서 직접 작업하지 않는다
- 워크트리 내에서 새 브랜치를 생성하여 커밋한다
- 변경 사항의 대상 브랜치 머지는 사용자의 명시적 명령으로만 수행된다

## Agent 커밋 워크플로우

사용자가 커밋을 요청한 경우 agent는 다음 커밋 규칙을 따른다:

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
