import { useQuery } from "@tanstack/react-query";
import {  View } from "react-native";
import { Button, Text } from "reusables";
function Page() {
  const { data } = useQuery({
    queryKey: ["hello"],
    queryFn: async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json() as any[];
      return data;
    },
  });
  return (
    <View className="gap-2">
      <View className="items-center bg-white p-4">
        <Text className="text-xl font-bold text-blue-500">
          Welcome to Nativewind!
        </Text>
      </View>
      <Button>
        <Text>Click me</Text>
      </Button>
      <View className="flex-col gap-2 px-2">
        {data?.map((post) => <Text key={post.id}>{post.title}</Text>)}
      </View>
    </View>
  );
}

export default Page;
