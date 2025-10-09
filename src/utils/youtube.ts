export function extractYouTubeId(url: string): string | null {
  const regex = /(?:v=|\/embed\/|\.be\/)([^?&/]+)/;
  const match = url?.match(regex);
  return match ? match[1] : null;
}
