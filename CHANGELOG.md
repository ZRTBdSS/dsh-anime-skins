# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-08-16

### Added

- 6 套皮肤：经典 / 亚丝娜 / 明日香 / 加藤惠 / 远坂凛 / 阿尔托莉雅
- 浮动 `☰` 菜单与皮肤选择弹窗
- 会话列表按工作区分组，支持展开/折叠
- 会话行 `⋯` 四层菜单（打开/重命名/归档/删除）
- 主题化“回到底部”按钮
- 皮肤选择持久化（cookie + localStorage）
- 顶栏、输入条、下载面板、命令菜单、触发按钮、模式标签等主题适配

### Fixed

- 卸载时不再残留被内联隐藏的原生按钮
- 启动时不再先写默认皮肤覆盖已保存值
- 清理设置弹窗轮询与一次性计时器
- 修复异步子菜单在菜单关闭后重新弹出的问题
- 修复展开原生会话列表时误关闭浮动菜单的问题
