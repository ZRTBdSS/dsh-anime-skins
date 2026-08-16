# dsh-anime-skins

DSH 动漫皮肤管理器（v1.0.0）：一套客户端插件，提供 6 种皮肤（经典 / 亚丝娜 / 明日香 / 加藤惠 / 远坂凛 / 阿尔托莉雅），并实现预览 HTML 的完整 UI 布局：浮动 ☰ 菜单、会话列表分组子菜单、皮肤切换弹窗、主题化输入区/下载面板/命令菜单等。

> ⚠️ 这是一个 **plain cordis 插件（非 bundle）**，不是 `dsh.bundle` 插件。
> 请使用 `dsh plugin --profile ... add` 安装为普通 cordis 依赖 + `cordis.patch.yml` 插入行；
> **不要**把它加入 `dsh.profile.bundles`，bundle 方式曾导致 DSH 启动失败（`code=1`）。

## 功能

- 6 套皮肤：经典 / 亚丝娜 / 明日香 / 加藤惠 / 远坂凛 / 阿尔托莉雅
- 浮动 `☰` 菜单：会话列表（按工作区分组）、皮肤切换、打开原生设置
- 会话列表支持工作区展开/折叠，会话行右侧 `⋯` 四层菜单（打开/重命名/归档/删除）
- 回到底部主题按钮（按实际滚动容器定位）
- 皮肤选择持久化：cookie（host 级，跨随机端口重启恢复） + localStorage 兜底
- 主题适配：顶栏、输入条、下载胶囊/面板、加号命令菜单、触发按钮、模式标签、统计行等

## 安装

推荐通过 `dsh plugin add` 安装为普通 cordis 插件：

```bash
# 从本地目录
dsh plugin --profile web add ./dsh-anime-skins

# 从 npm 包（发布后）
dsh plugin --profile web add dsh-anime-skins

# 从 GitHub（发布后，建议 pin commit）
dsh plugin --profile web add "github:your-name/dsh-anime-skins#<commit-sha>"
```

安装后配置 HMR 应自动生效；若没有即时生效，重启一次 DSH Web 端。

## 手动 patch 安装（备选）

如果你希望直接写 `cordis.patch.yml`：

```yaml
insert:
  - id: dsh-anime-skins
    name: dsh-anime-skins
    disabled: false
```

并确保 `dsh-anime-skins` 已安装到 profile 的 `node_modules`。

## 兼容性

- 皮肤激活时会隐藏原生侧栏、详情列和 better-sidebar，并重排主消息区。
- 已适配 `dsh-usage-stats`、`dsh-better-sidebar`、`dsh-smooth-stream`、`dsh-annotation` 等常见 UI 插件的视觉冲突。
- 若与其它 UI 插件冲突，优先停用对应插件；单个 UI 插件停用不会破坏 DSH 启动。

## 开发

```bash
npm run check    # node --check lib/index.js 与 lib/client.js
```

- `lib/index.js`：host 侧空插件入口
- `lib/client.js`：浏览器侧皮肤逻辑
- `dsh.plugin.json`：marketplace/hub 描述信息
- `package.json`：不声明 `dsh.bundle`，保持 plain cordis 安装通道

## License

MIT