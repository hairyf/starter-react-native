import { useQuery } from '@tanstack/react-query'
import { View } from 'react-native'
import { Button, Text } from 'reusables'
import { useStore } from 'valtio-define'
import { store } from '@/store'

function Page() {
  const { data } = useQuery({
    queryKey: ['hello'],
    queryFn: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json() as any[]
      return data
    },
  })

  const { count, increment } = useStore(store.user)
  return (
    <View className="gap-2">
      <View className="items-center bg-white p-4">
        <Text className="text-xl font-bold text-blue-500">
          Welcome to Nativewind!
        </Text>
      </View>
      <View className="flex-col items-center gap-2 px-2">
        <Text>{count}</Text>
        <Button onPress={increment}>
          <Text>Click me</Text>
        </Button>
      </View>
      <View className="flex-col gap-2 px-2">
        {data?.map(post => <Text key={post.id}>{post.title}</Text>)}
      </View>
    </View>
  )
}

export default Page
