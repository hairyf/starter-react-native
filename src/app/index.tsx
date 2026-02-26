import { useQuery } from '@tanstack/react-query'
import { Link } from 'expo-router'
import { View } from 'react-native'
import { Button, Text } from 'reusables'
import { useStore } from 'valtio-define'
import { Icon } from '@/components/icon'
import { Rating } from '@/components/icons'
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
      <View className="items-center justify-center bg-white p-4 flex-row gap-2">
        <Text className="text-xl font-bold text-blue-500">
          Welcome to Nativewind!
        </Text>
      </View>
      <View className="flex-col items-center gap-2 px-2">
        <View className="flex-row items-center gap-2">
          <Icon as={Rating} size={16} className="text-yellow-500" />
          <Text>{count}</Text>
        </View>
        <Button onPress={increment}>
          <Text>Star</Text>
        </Button>
      </View>
      <View className="flex-col gap-2 px-2">
        {data?.map(post => (
          <Link key={post.id} href={{ pathname: '/post/[id]', params: { id: String(post.id) } }} asChild>
            <Text className="text-left">{post.title}</Text>
          </Link>
        ))}
      </View>
    </View>
  )
}

export default Page
