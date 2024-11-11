import '../global.css';

import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';

import { CONFIG } from '../config-global';
import { primary } from '../theme/core/palette';
import { Snackbar } from '../components/snackbar';
import { LocalizationProvider } from '../locales';
import { detectLanguage } from '../locales/server';
import { schemeConfig } from '../theme/scheme-config';
import { I18nProvider } from '../locales/i18n-provider';
//  import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider } from '../theme/theme-provider';
import { ProgressBar } from '../components/progress-bar';
import { MotionLazy } from '../components/animate/motion-lazy';
import { AuthProvider as JwtAuthProvider } from '../auth/context/jwt';
import { AuthProvider as Auth0AuthProvider } from '../auth/context/auth0';
import { AuthProvider as AmplifyAuthProvider } from '../auth/context/amplify';
import { AuthProvider as SupabaseAuthProvider } from '../auth/context/supabase';
import { AuthProvider as FirebaseAuthProvider } from '../auth/context/firebase';
import { SettingsDrawer, defaultSettings, SettingsProvider } from '../components/settings';


// ----------------------------------------------------------------------

const AuthProvider =
  (CONFIG.auth.method === 'amplify' && AmplifyAuthProvider) ||
  (CONFIG.auth.method === 'firebase' && FirebaseAuthProvider) ||
  (CONFIG.auth.method === 'supabase' && SupabaseAuthProvider) ||
  (CONFIG.auth.method === 'auth0' && Auth0AuthProvider) ||
  JwtAuthProvider;

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: primary.main,
};

export const metadata = {
  icons: [
    {
      rel: 'icon',
      url: `${CONFIG.assetsDir}/favicon.ico`,
    },
  ],
};

export default async function RootLayout({ children }) {
  const lang = CONFIG.isStaticExport ? 'en' : await detectLanguage();

  return (
    <html lang={lang ?? 'en'} suppressHydrationWarning>
      <body>
        <InitColorSchemeScript
          defaultMode={schemeConfig.defaultMode}
          modeStorageKey={schemeConfig.modeStorageKey}
        />

        <I18nProvider lang={CONFIG.isStaticExport ? undefined : lang}>
          <LocalizationProvider>
            <AuthProvider>
              <SettingsProvider settings={defaultSettings}>
                <ThemeProvider>
                  <MotionLazy>
                    <CheckoutProvider>
                      <Snackbar />
                      <ProgressBar />
                      <SettingsDrawer />
                      {children}
                    </CheckoutProvider>
                  </MotionLazy>
                </ThemeProvider>
              </SettingsProvider>
            </AuthProvider>
          </LocalizationProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
