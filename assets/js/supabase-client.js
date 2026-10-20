export function sanitizeText(value = '') {
  return String(value)
    .replace(/[<>]/g, '')
    .trim();
}

export function validateTextLength(value, maxLength = 5000) {
  if (typeof value !== 'string') return false;
  return value.length <= maxLength;
}

export function validateUpload(file, options = {}) {
  const { maxSizeMB = 10, allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'audio/mpeg', 'audio/mp3', 'video/mp4'] } = options;

  if (!file) return { valid: false, error: 'File missing.' };

  const sizeLimit = maxSizeMB * 1024 * 1024;
  if (file.size > sizeLimit) {
    return { valid: false, error: `File exceeds ${maxSizeMB}MB.` };
  }

  if (!allowedTypes.includes(file.type)) {
    return { valid: false, error: 'Unsupported file type.' };
  }

  return { valid: true };
}

export function readJsonSafely(value) {
  try {
    if (typeof value === 'string') return JSON.parse(value);
    return value;
  } catch {
    return null;
  }
}

export function getSafeUrlToken(token) {
  if (!token || !/^[A-Za-z0-9_-]{16,}$/.test(token)) return null;
  return token;
}

export function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
