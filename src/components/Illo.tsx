import type { ReactElement } from 'react';
// MallO's own illustrated icons: bold ink outlines with warm, flat fills.
const K = '#17171C';
const Y = '#FFB300';
const R = '#FF6B5E';
const B = '#7CC4FF';
const G = '#5FD0A0';
const P = '#B9A6FF';
const W = '#FFFFFF';
const s = { stroke: K, strokeWidth: 2.6, strokeLinejoin: 'round' as const, strokeLinecap: 'round' as const };

const ART = {
  store: (
    <>
      <rect x="12" y="30" width="40" height="24" rx="2" fill={W} {...s} />
      <path d="M8 30h48l-4-14H12z" fill={W} {...s} />
      <path d="M12 16l-4 14h8l2-14zM26 16l-2 14h8V16zM38 16l2 14h8l-4-14z" fill={R} {...s} />
      <path d="M8 30a4 4 0 0 0 8 0a4 4 0 0 0 8 0a4 4 0 0 0 8 0a4 4 0 0 0 8 0a4 4 0 0 0 8 0a4 4 0 0 0 8 0" fill="none" {...s} />
      <rect x="27" y="40" width="10" height="14" fill={Y} {...s} />
      <rect x="15" y="39" width="8" height="7" rx="1" fill={B} {...s} />
      <rect x="41" y="39" width="8" height="7" rx="1" fill={B} {...s} />
    </>
  ),
  food: (
    <>
      <path d="M8 34h48a24 18 0 0 1-48 0z" fill={W} {...s} />
      <path d="M14 34c2-8 8-12 18-12s16 4 18 12" fill={Y} {...s} />
      <circle cx="24" cy="28" r="2.4" fill={R} {...s} />
      <circle cx="36" cy="26" r="2.4" fill={G} {...s} />
      <circle cx="42" cy="30" r="2" fill={R} {...s} />
      <path d="M24 14c0-3 3-3 3-6M32 13c0-3 3-3 3-6M40 14c0-3 3-3 3-6" fill="none" {...s} />
    </>
  ),
  offer: (
    <>
      <path d="M30 8h18a4 4 0 0 1 4 4v18L28 54a3 3 0 0 1-4 0L10 40a3 3 0 0 1 0-4z" fill={B} {...s} />
      <circle cx="43" cy="17" r="3.5" fill={W} {...s} />
      <path d="M24 38l12-12" {...s} fill="none" />
      <circle cx="25" cy="29" r="3" fill={W} {...s} />
      <circle cx="35" cy="37" r="3" fill={W} {...s} />
      <path d="M54 6l1.5 3.5L59 11l-3.5 1.5L54 16l-1.5-3.5L49 11l3.5-1.5z" fill={Y} {...s} strokeWidth={1.8} />
    </>
  ),
  kids: (
    <>
      <path d="M22 8c-7 0-12 5-12 12 0 8 8 14 12 16 4-2 12-8 12-16 0-7-5-12-12-12z" fill={R} {...s} />
      <path d="M44 14c-6 0-10 4-10 10 0 7 6 11 10 13 4-2 10-6 10-13 0-6-4-10-10-10z" fill={Y} {...s} />
      <path d="M22 36l-2 3h4zM44 37l-2 3h4z" fill={K} {...s} />
      <path d="M22 39c-2 6 4 8 2 16M44 40c2 6-4 8-2 15" fill="none" {...s} />
      <path d="M16 16c1-3 3-4 5-4M38 20c1-2 2-3 4-3" fill="none" stroke={W} strokeWidth={2.4} strokeLinecap="round" />
    </>
  ),
  games: (
    <>
      <path d="M14 22h36c6 0 10 6 10 16s-3 14-7 14c-5 0-7-8-11-8H22c-4 0-6 8-11 8-4 0-7-4-7-14s4-16 10-16z" fill={P} {...s} />
      <path d="M18 31v10M13 36h10" fill="none" {...s} />
      <circle cx="44" cy="33" r="3" fill={Y} {...s} />
      <circle cx="50" cy="39" r="3" fill={R} {...s} />
      <path d="M32 22v-8a4 4 0 0 1 4-4h4" fill="none" {...s} />
    </>
  ),
  washroom: (
    <>
      <rect x="8" y="10" width="48" height="44" rx="10" fill={B} {...s} />
      <circle cx="22" cy="20" r="4" fill={W} {...s} />
      <circle cx="42" cy="20" r="4" fill={W} {...s} />
      <path d="M18 28h8v12h-2v8h-4v-8h-2z" fill={W} {...s} />
      <path d="M42 27l-7 14h4v7h6v-7h4z" fill={W} {...s} />
      <path d="M32 14v36" fill="none" {...s} />
    </>
  ),
  parking: (
    <>
      <rect x="10" y="8" width="44" height="44" rx="12" fill={B} {...s} />
      <path d="M25 42V18h9a7 7 0 0 1 0 14h-9" fill="none" stroke={W} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 56h44" fill="none" {...s} />
    </>
  ),
  map: (
    <>
      <path d="M8 16l14-6 20 6 14-6v38l-14 6-20-6-14 6z" fill={G} {...s} />
      <path d="M22 10v38M42 16v38" fill="none" {...s} />
      <path d="M32 40s-9-8-9-15a9 9 0 0 1 18 0c0 7-9 15-9 15z" fill={R} {...s} />
      <circle cx="32" cy="25" r="3.4" fill={W} {...s} />
    </>
  ),
  gift: (
    <>
      <rect x="10" y="26" width="44" height="28" rx="3" fill={R} {...s} />
      <rect x="7" y="18" width="50" height="10" rx="3" fill={R} {...s} />
      <path d="M32 18v36" fill="none" stroke={Y} strokeWidth={7} />
      <path d="M32 18v36" fill="none" {...s} />
      <path d="M32 18c-4-10-16-10-14-2 1 3 8 2 14 2zM32 18c4-10 16-10 14-2-1 3-8 2-14 2z" fill={Y} {...s} />
    </>
  ),
  ai: (
    <>
      <path d="M10 14a6 6 0 0 1 6-6h32a6 6 0 0 1 6 6v22a6 6 0 0 1-6 6H26l-10 9v-9a6 6 0 0 1-6-6z" fill={Y} {...s} />
      <path d="M32 16l2.4 6.6L41 25l-6.6 2.4L32 34l-2.4-6.6L23 25l6.6-2.4z" fill={W} {...s} strokeWidth={2} />
    </>
  ),
  friends: (
    <>
      <circle cx="22" cy="22" r="8" fill={Y} {...s} />
      <circle cx="42" cy="22" r="8" fill={B} {...s} />
      <path d="M8 52c0-9 6-15 14-15s14 6 14 15z" fill={Y} {...s} />
      <path d="M28 52c0-9 6-15 14-15s14 6 14 15z" fill={B} {...s} />
    </>
  ),
  points: (
    <>
      <circle cx="32" cy="32" r="22" fill={Y} {...s} />
      <circle cx="32" cy="32" r="14" fill="none" {...s} />
      <path d="M32 24l2.4 5 5.6.8-4 4 1 5.6-5-2.7-5 2.7 1-5.6-4-4 5.6-.8z" fill={W} {...s} strokeWidth={2} />
    </>
  ),
  bill: (
    <>
      <path d="M16 8h32v48l-5-4-5 4-6-4-6 4-5-4-5 4z" fill={W} {...s} />
      <path d="M23 20h18M23 28h18M23 36h10" fill="none" {...s} />
      <circle cx="44" cy="44" r="9" fill={G} {...s} />
      <path d="M40 44l3 3 5-6" fill="none" {...s} />
    </>
  ),
  phone: (
    <>
      <rect x="18" y="6" width="28" height="52" rx="6" fill={W} {...s} />
      <rect x="22" y="14" width="20" height="30" rx="2" fill={Y} {...s} />
      <path d="M29 51h6" fill="none" {...s} />
      <path d="M27 29l4 4 7-8" fill="none" {...s} />
    </>
  ),
} satisfies Record<string, ReactElement>;

export type IlloName = keyof typeof ART;

export function Illo({ name, size = 64, className = '' }: { name: IlloName; size?: number; className?: string }) {
  return (
    <svg className={`illo ${className}`} width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      {ART[name]}
    </svg>
  );
}
