/* Persistent dark-first theme controls. */
const KEY = 'nexus-theme';

export function currentTheme() {
  return document.documentElement.dataset.theme || 'dark';
}

export function setTheme(theme) {
  const safeTheme = theme === 'light' ? 'light' : 'dark';
  document.documentElement.dataset.theme = safeTheme;
  document.documentElement.style.colorScheme = safeTheme;
  document.querySelector('meta[name="theme-color"]').content = safeTheme === 'dark' ? '#000000' : '#FFFFFF';
  localStorage.setItem(KEY, safeTheme);
  return safeTheme;
}

export function toggleTheme() {
  return setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
}
