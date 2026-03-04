import { Uniwind, useUniwind } from 'uniwind'

export function useTheme() {
  const { theme } = useUniwind() as { theme: 'light' | 'dark' }
  function setTheme(theme: 'light' | 'dark') {
    Uniwind.setTheme(theme)
  }
  return { theme, setTheme }
}
