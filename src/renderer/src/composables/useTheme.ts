import { darkTheme, type GlobalThemeOverrides, type GlobalTheme } from 'naive-ui'
import { type Ref } from 'vue'
type ThemeType = {
  Theme: Ref<GlobalTheme | null>
  themeOverrides: Ref<GlobalThemeOverrides>
  changeTheme: typeof changeTheme
}

// darkTheme.common.bodyColor = '#000'
const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#87CEEB',
    primaryColorHover: '#87CEdA',
    primaryColorPressed: '#87CEEB',
    primaryColorSuppl: '#87CEFA',
    bodyColor: '#F5F5F5'
  }
}

const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#87CEEB',
    primaryColorHover: '#87CEdA',
    primaryColorPressed: '#87CEEB',
    primaryColorSuppl: '#666',
    bodyColor: '#101014'
  }
}
const themeOverrides = ref(lightThemeOverrides)
const Theme = ref<GlobalTheme | null>(null)
function changeTheme(t: 'dark' | 'light') {
  if (t === 'dark') {
    Theme.value = darkTheme
    themeOverrides.value = darkThemeOverrides
  } else {
    Theme.value = null
    themeOverrides.value = lightThemeOverrides
  }
}
export default function useTheme(): ThemeType {
  return {
    Theme,
    themeOverrides,
    changeTheme
  }
}
