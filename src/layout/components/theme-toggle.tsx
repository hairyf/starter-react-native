import { Button, Icon, MoonStarIcon, SunIcon, useTheme } from 'reusables'

const THEME_ICONS = {
  light: SunIcon,
  dark: MoonStarIcon,
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button
      onPressIn={toggleTheme}
      size="icon"
      variant="ghost"
      className="ios:size-9 web:mx-4 rounded-full"
    >
      <Icon as={THEME_ICONS[theme ?? 'light']} className="size-5" />
    </Button>
  )
}
