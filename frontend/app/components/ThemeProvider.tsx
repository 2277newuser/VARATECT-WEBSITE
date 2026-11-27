"use client";

import {
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type SiteTheme = "dark" | "light";

type SiteThemeContextValue = {
  theme: SiteTheme;
  toggleTheme: () => void;
};

const THEME_STORAGE_KEY = "varatect-theme";
const LEGACY_THEME_STORAGE_KEY = "varatect-home-theme";
const THEME_CHANGE_EVENT = "varatect-theme-change";
const SiteThemeContext = createContext<SiteThemeContextValue | null>(null);

function subscribeToTheme(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(THEME_CHANGE_EVENT, onChange);

  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(THEME_CHANGE_EVENT, onChange);
  };
}

function getThemeSnapshot(): SiteTheme {
  const savedTheme =
    window.localStorage.getItem(THEME_STORAGE_KEY) ??
    window.localStorage.getItem(LEGACY_THEME_STORAGE_KEY);
  return savedTheme === "light" ? "light" : "dark";
}

function getServerThemeSnapshot(): SiteTheme {
  return "dark";
}

function saveTheme(theme: SiteTheme) {
  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );
  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => saveTheme(theme === "dark" ? "light" : "dark"),
    }),
    [theme],
  );

  return (
    <SiteThemeContext.Provider value={value}>
      <div
        className="flex min-h-full flex-1 flex-col"
        data-site-theme={theme}
      >
        {children}
      </div>
    </SiteThemeContext.Provider>
  );
}

export function useSiteTheme() {
  const context = useContext(SiteThemeContext);

  if (!context) {
    throw new Error("useSiteTheme must be used within a ThemeProvider.");
  }

  return context;
}
