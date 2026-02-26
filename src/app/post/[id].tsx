import { useQuery } from '@tanstack/react-query'
import { Link, useLocalSearchParams } from 'expo-router'
import { ActivityIndicator, ScrollView, View } from 'react-native'
import { Button, Text } from 'reusables'

interface Post {
  id: number
  userId: number
  title: string
  body: string
}

function Page() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const { data, isLoading } = useQuery({
    queryKey: ['post', id],
    queryFn: async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      )
      return await res.json() as Post
    },
    enabled: !!id,
  })

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center p-4">
        <ActivityIndicator size="large" />
        <Text variant="muted" className="mt-2">
          加载中…
        </Text>
      </View>
    )
  }

  return (
    <ScrollView className="flex-1" contentContainerClassName="p-4 pb-8">
      <View className="mb-4">
        <Link href="/" asChild>
          <Button variant="ghost" size="sm">
            <Text variant="muted">← 返回</Text>
          </Button>
        </Link>
      </View>
      <Text variant="h2" className="mb-2">
        {data?.title}
      </Text>
      <Text variant="muted" className="mb-4">
        Post #
        {data?.id}
        {' '}
        · User
        {' '}
        {data?.userId}
      </Text>
      <Text variant="p" className="leading-7">
        {data?.body}
      </Text>
    </ScrollView>
  )
}

export default Page
