// utils.js
export function formatTemperature(temp) {
  return `${temp.toFixed(1)} °C`;
}

export function toggleTheme(theme) {
  const themeLink = document.getElementById("theme-style");
  themeLink.setAttribute("href", `themes/${theme}.css`);
  document.body.setAttribute("data-theme", theme);
}
