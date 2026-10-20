import { sanitizeText, validateTextLength, readJsonSafely } from './security-validation.js';

const STORAGE_KEY = 'lovecraft_creations';

function safeLocalStorage() {
  try {
    const key = '__lovecraft_test__';
    localStorage.setItem(key, '1');
    localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
}

export function listLocalCreations() {
  if (!safeLocalStorage()) return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveLocalCreation(data) {
  if (!safeLocalStorage()) return null;
  const current = listLocalCreations();
  const item = {
    id: crypto.randomUUID(),
    title: sanitizeText(data.title || 'Untitled creation'),
    type: data.type || 'love-letter',
    content: readJsonSafely(data.content) || {},
    status: data.status || 'draft',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  current.push(item);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  return item;
}

export function publishLocalCreation(payload) {
  if (!validateTextLength(payload.title || '', 200)) {
    throw new Error('Title is too long.');
  }

  const saved = saveLocalCreation({
    title: payload.title,
    type: payload.type,
    content: payload.content,
    status: 'published'
  });

  if (!saved) throw new Error('Could not save creation locally.');

  const token = crypto.randomUUID().replace(/-/g, '').slice(0, 24);
  const shareUrl = `${window.location.origin}/s/${token}`;

  return {
    id: saved.id,
    token,
    url: shareUrl,
    publication: { status: 'published', publishedAt: new Date().toISOString() }
  };
}

export function generateShareUrl() {
  const token = crypto.randomUUID().replace(/-/g, '').slice(0, 24);
  return `${window.location.origin}/s/${token}`;
}

export function copyText(value) {
  if (!navigator?.clipboard) {
    return false;
  }

  navigator.clipboard.writeText(value).catch(() => false);
  return true;
}
