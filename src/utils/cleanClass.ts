export function cleanClass(str?: string): string {
  if (!str) return '';
  return str.replace(/[\u200B-\u200D\uFEFF]/g, '').trim();
}
