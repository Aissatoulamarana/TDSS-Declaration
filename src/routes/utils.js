// ----------------------------------------------------------------------
// Utility function for common URL validation
const isValidUrl = (url) => {
  try {
    if (!url || typeof url !== 'string') {
      console.warn('Invalid URL passed:', url);
      return false;
    }
    new URL(url); // Check URL format
    return true;
  } catch (error) {
    console.warn('Invalid URL passed:', url);
    return false;
  }
};

// ----------------------------------------------------------------------

export const hasParams = (url) => {
  if (!isValidUrl(url)) return false;

  try {
    const queryString = url.split('?')[1];
    return queryString ? new URLSearchParams(queryString).toString().length > 0 : false;
  } catch (error) {
    console.error('Error parsing URL in hasParams:', error, 'URL:', url);
    return false;
  }
};

// ----------------------------------------------------------------------

export function removeLastSlash(pathname) {
  if (!isValidUrl(pathname)) return pathname;

  // Retirer le dernier slash sauf si c'est la racine
  return pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

// ----------------------------------------------------------------------

export function removeParams(url) {
  if (!isValidUrl(url)) return url;

  try {
    const urlObj = new URL(url, window.location.origin);
    return removeLastSlash(urlObj.pathname);
  } catch (error) {
    console.error('Error processing URL in removeParams:', error, 'URL:', url);
    return url;
  }
}

// ----------------------------------------------------------------------

export function isExternalLink(url) {
  if (!isValidUrl(url)) return false;

  try {
    return url.startsWith('http');
  } catch (error) {
    console.error('Error checking external link in isExternalLink:', error, 'URL:', url);
    return false;
  }
}