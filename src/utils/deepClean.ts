/* function cleanClass(str?: string): string {
  if (!str) return '';
  return str.replace(/[\u200B-\u200D\uFEFF]/g, '').trim();
}

export default function deepClean<T>(data: T): T {
  if (typeof data === 'string') {
    return cleanClass(data) as unknown as T;
  }
  if (Array.isArray(data)) {
    return data.map(deepClean) as unknown as T;
  }
  if (data && typeof data === 'object') {
    return Object.fromEntries(
      Object.entries(data).map(([k, v]) => [k, deepClean(v)])
    ) as T;
  }
  return data;
}
 */
