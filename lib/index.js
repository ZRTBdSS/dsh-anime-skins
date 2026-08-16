/**
 * dsh-anime-skins — 动漫角色主题皮肤（客户端插件）。
 * host 侧无需任何逻辑：皮肤的配色覆盖在浏览器端通过 ThemeRuntime
 * 的 overrideTokens 完成，这里只提供空插件入口让 cordis 挂载。
 * @module dsh-anime-skins
 */

export const name = 'dsh-anime-skins'

export const inject = []

export function apply(ctx) {
  // 皮肤只在客户端（浏览器）生效，host 侧无需逻辑。
}