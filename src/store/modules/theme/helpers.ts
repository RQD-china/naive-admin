import themeSetting from '../../../../settings/theme.json'

/** 初始化主题配置 */
export function initThemeSettings(): Theme.Setting {
    const isMobile = themeSetting.isMobile || false
    const darkMode = themeSetting.darkMode || false
    const sider = themeSetting.sider || { width: 220, collapsedWidth: 64, collapsed: false }
    const header = themeSetting.header || { visible: true, height: 60 }
    const tab = themeSetting.tab || { visible: true, height: 50 }
    const primaryColor = themeSetting.primaryColor || '#2376b7'
    const otherColor = themeSetting.otherColor || {
        info: '#0099ad',
        success: '#52c41a',
        warning: '#faad14',
        error: '#f5222d',
    }
    return { isMobile, darkMode, sider, header, tab, primaryColor, otherColor }
}
