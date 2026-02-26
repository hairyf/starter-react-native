import { ThemeProvider } from '@react-navigation/native'
import { QueryClientProvider } from '@tanstack/react-query'
import { useColorScheme } from 'react-native'
import { NAV_THEME } from 'reusables/lib/theme'
import { queryClient } from '@/config/client'

export function Provider({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme()

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={NAV_THEME[colorScheme ?? 'light']}>
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  )
}
