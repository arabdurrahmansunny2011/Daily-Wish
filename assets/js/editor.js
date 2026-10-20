export function createShareLinkRecord({ creationId, type, title }) {
  const token = crypto.randomUUID().replace(/-/g, '').slice(0, 28);
  const url = `${window.location.origin}/s/${token}`;

  return {
    id: crypto.randomUUID(),
    creationId,
    type,
    title,
    token,
    url,
    active: true,
    createdAt: new Date().toISOString()
  };
}

export function resolveShareLink(token) {
  const allLinks = JSON.parse(localStorage.getItem('lovecraft_share_links') || '[]');
  return allLinks.find((link) => link.token === token && link.active !== false) || null;
}

export function revokeShareLink(token) {
  const allLinks = JSON.parse(localStorage.getItem('lovecraft_share_links') || '[]');
  const next = allLinks.map((link) => link.token === token ? { ...link, active: false, revokedAt: new Date().toISOString() } : link);
  localStorage.setItem('lovecraft_share_links', JSON.stringify(next));
  return true;
}
