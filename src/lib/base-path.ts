const GITHUB_PAGES_BASE = '/My-portfolio';

export function getBasePath(): string {
  if (typeof window !== 'undefined') {
    if (window.location.pathname === GITHUB_PAGES_BASE || window.location.pathname.startsWith(`${GITHUB_PAGES_BASE}/`)) {
      return GITHUB_PAGES_BASE;
    }
  }

  return process.env.NEXT_PUBLIC_BASE_PATH || '';
}

export function assetPath(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${getBasePath()}${normalized}`;
}

export function demoPath(slug: string, fromDetailPage = false): string {
  const prefix = fromDetailPage ? '../../' : '../';
  return `${prefix}demos/${slug}/index.html`;
}
