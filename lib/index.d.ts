/**
 * dsh-anime-skins — host-side entry types.
 * The plugin is intentionally host-empty; all behavior lives in the browser client.
 */
export const name: string;
export const inject: string[];
export function apply(ctx: unknown): void;