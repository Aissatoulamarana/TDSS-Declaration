// ----------------------------------------------------------------------

export const hasParams = (url) => {
  if (!url || typeof url !== 'string') {
    console.error('Invalid URL passed to hasParams:', url); // Log the invalid URL
    return false; // Return false if URL is invalid
  }

  const queryString = url.split('?')[1];
  return queryString ? new URLSearchParams(queryString).toString().length > 0 : false;
};

// ----------------------------------------------------------------------

export function removeLastSlash(pathname) {
  /**
   * Remove last slash
   * [1]
   * @input  = '/dashboard/calendar/'
   * @output = '/dashboard/calendar'
   * [2]
   * @input  = '/dashboard/calendar'
   * @output = '/dashboard/calendar'
   */
  if (pathname !== '/' && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

// ----------------------------------------------------------------------

export function removeParams(url) {
  try {
    const urlObj = new URL(url, window.location.origin);

    return removeLastSlash(urlObj.pathname);
  } catch (error) {
    return url;
  }
}

// ----------------------------------------------------------------------

export function isExternalLink(url) {
  // Check if url is defined and is a string
  if (typeof url !== 'string') {
    console.error('Invalid URL:', url); // Log if url is invalid
    return false; // Return false for invalid URLs
  }

  return url.startsWith('http'); // Proceed with the check if valid
}
