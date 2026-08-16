# Contributing to dsh-anime-skins

感谢你愿意贡献！

## 开发环境

- Node.js 18+
- Git
- DSH 本地 profile（用于实测）

## 本地开发

```bash
# 克隆仓库
git clone https://github.com/ZRTBdSS/dsh-anime-skins.git
cd dsh-anime-skins

# 运行基础检查
npm run check
```

## 提交前检查

```bash
npm run check
node --check lib/client.js
node --check lib/index.js
```

如果改了 `dsh.plugin.json` 或 `package.json`，确保 JSON 合法。

## 分支与提交

- 从 `main` 创建功能分支：`git checkout -b feat/xxx`
- 提交信息建议使用 Conventional Commits：
  - `feat: ...`
  - `fix: ...`
  - `docs: ...`
  - `refactor: ...`
  - `chore: ...`
- 推送后创建 Pull Request，描述改动内容和测试结果。

## 代码风格

- 保持单文件 `lib/client.js` 的现有风格（ES5 兼容写法，避免构建步骤）
- 不引入运行时依赖
- 不修改 DSH 核心
- DOM 操作必须通过 `ctx.effect()` 注册并在 cleanup 中清理

## Issue / PR 模板

- Bug 请使用 [Bug Report](.github/ISSUE_TEMPLATE/bug_report.md)
- 功能建议请使用 [Feature Request](.github/ISSUE_TEMPLATE/feature_request.md)
- PR 请参考 [Pull Request Template](.github/PULL_REQUEST_TEMPLATE.md)
