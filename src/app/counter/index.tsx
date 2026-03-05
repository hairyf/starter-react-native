import { View } from 'react-native'
import { Button, Text } from 'reusables'
import { useStore } from 'valtio-define'
import { layouts } from '@/layout'
import { store } from '@/store'

function Page() {
  const { count, doubleCount } = useStore(store.counter)
  return (
    <layouts.default title="Counter" back>
      <View className="flex-1 items-center justify-center gap-4 p-4">
        <Text>
          Counter:
          {count}
        </Text>
        <Text>
          Double Count:
          {doubleCount}
        </Text>
        <View className="flex-row gap-2">
          <Button onPress={() => store.counter.increment()}>
            <Text>Increment</Text>
          </Button>
          <Button onPress={() => store.counter.decrement()}>
            <Text>Decrement</Text>
          </Button>
        </View>
      </View>
    </layouts.default>
  )
}

export default Page
