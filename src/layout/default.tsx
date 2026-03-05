import { Stack, useRouter } from 'expo-router'
import * as React from 'react'
import { ArrowLeftIcon, Button, Icon } from 'reusables'
import { ThemeToggle } from './components/theme-toggle'

export interface DefaultLayoutProps {
  title?: string
  children: React.ReactNode
  back?: boolean
}

export function DefaultLayout({ title, children, back }: DefaultLayoutProps) {
  const router = useRouter()
  const SCREEN_OPTIONS = {
    title: title || 'React Native Reusables',
    headerTransparent: true,
    headerRight: () => <ThemeToggle />,
    headerLeft: () => back
      ? (
          <Button
            size="icon"
            variant="ghost"
            onPress={() => router.back()}
          >
            <Icon as={ArrowLeftIcon} />
          </Button>
        )
      : undefined,
  }
  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS} />
      {children}
    </>
  )
}
