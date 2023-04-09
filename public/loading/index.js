/**
 * 初始化主题色
 */

function addThemeColorCssVars() {
  const key = '__THEME_COLOR__'
  const defaultColor = '#2376b7'
  const themeColor = window.localStorage.getItem(key) || defaultColor
  const cssVars = `--primary-color: ${themeColor}`
  document.documentElement.style.cssText = cssVars
}

addThemeColorCssVars()
