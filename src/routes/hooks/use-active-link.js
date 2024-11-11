import { usePathname } from './use-pathname';
import { hasParams, removeParams, isExternalLink, removeLastSlash } from '../utils';

// ----------------------------------------------------------------------

export function useActiveLink(itemPath, deep = true) {
  // Appel du hook en dehors de toute condition
  const pathname = removeLastSlash(usePathname());

  // Vérification précoce pour `itemPath` afin de le rendre sûr
  if (typeof itemPath !== 'string') {
    console.error('Invalid itemPath:', itemPath);
    return false;
  }

  const pathHasParams = hasParams(itemPath);

  // Vérification de validité déplacée après l'appel du hook
  const notValid = itemPath.startsWith('#') || isExternalLink(itemPath);
  if (notValid) {
    return false;
  }

  // Application de la logique de profondeur
  const isDeep = deep || pathHasParams;

  if (isDeep) {
    const defaultActive = pathname.includes(itemPath);

    const originItemPath = removeParams(itemPath);
    const hasParamsActive = pathHasParams && originItemPath === pathname;

    return defaultActive || hasParamsActive;
  }

  // Comparaison simple si la logique de profondeur n'est pas appliquée
  return pathname === itemPath;
}
