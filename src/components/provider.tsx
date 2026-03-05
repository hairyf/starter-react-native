import { ThemeProvider } from '@react-navigation/native'
import { PortalHost } from '@rn-primitives/portal'
import { QueryClientProvider } from '@tanstack/react-query'
import { StatusBar } from 'expo-status-bar'
import { useMount } from 'react-use'
import { NAV_THEME, useTheme } from 'reusables'
import { queryClient } from '@/config/client'
import { store } from '@/store'
import 'reusables/theme'
import '@/style/index.css'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export function Provider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()

  useMount(store.counter.persist.mount)

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={NAV_THEME[theme ?? 'light']}>
        <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
        {children}
        <PortalHost />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
