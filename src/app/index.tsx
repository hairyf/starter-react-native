import { Link } from 'expo-router'
import { StarIcon } from 'lucide-react-native'
import { Image, View } from 'react-native'
import { Button, Icon, Text, useTheme } from 'reusables'
import { layouts } from '@/layout'

const LOGO = {
  light: require('@/assets/react-native-reusables-light.png'),
  dark: require('@/assets/react-native-reusables-dark.png'),
}

export default function Screen() {
  const { theme } = useTheme()

  return (
    <layouts.default>
      <View className="flex-1 items-center justify-center gap-8 p-4">
        <Image source={LOGO[theme]} style={{ height: 76, width: 76 }} resizeMode="contain" />
        <View className="gap-2 p-4">
          <Text className="ios:text-foreground text-muted-foreground font-mono text-sm">
            1. Edit
            {' '}
            <Text variant="code">app/index.tsx</Text>
            {' '}
            to get started.
          </Text>
          <Text className="ios:text-foreground text-muted-foreground font-mono text-sm">
            2. Save to see your changes instantly.
          </Text>
        </View>
        <View className="flex-row gap-2">
          <Link href="https://reactnativereusables.com" asChild>
            <Button>
              <Text>Browse the Docs</Text>
            </Button>
          </Link>
          <Link href="https://github.com/founded-labs/react-native-reusables" asChild>
            <Button variant="ghost">
              <Text>Star the Repo</Text>
              <Icon as={StarIcon} />
            </Button>
          </Link>
        </View>
      </View>
    </layouts.default>
  )
}
