import type { Corners } from '../types/sanityTypes';

export function getCornerClasses(corners: Corners = {}): string {
  if (corners.allCorners) {
    return 'rounded-2xl';
  }

  return [
    corners.topLeft ? 'rounded-tl-2xl' : 'rounded-tl-none',
    corners.topRight ? 'rounded-tr-2xl' : 'rounded-tr-none',
    corners.bottomLeft ? 'rounded-bl-2xl' : 'rounded-bl-none',
    corners.bottomRight ? 'rounded-br-2xl' : 'rounded-br-none',
  ].join(' ');
}
