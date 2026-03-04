import { Stack } from 'expo-router'
import * as React from 'react'
import { ThemeToggle } from './components/theme-toggle'

const SCREEN_OPTIONS = {
  title: 'React Native Reusables',
  headerTransparent: true,
  headerRight: () => <ThemeToggle />,
}

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      {children}
    </>
  )
}
