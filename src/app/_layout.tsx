// import { useColorScheme } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Provider } from "@/components/provider";

import "../styles.css";

// This is the main layout of the app
// It wraps your pages with the providers they need
export default function RootLayout() {
  // const colorScheme = useColorScheme();
  return (
    <Provider>
      {/*
          The Stack component displays the current page.
          It also allows you to configure your screens 
        */}
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            // backgroundColor: colorScheme == "dark" ? "#09090B" : "#FFFFFF",
          },
        }}
      />
      <StatusBar />
    </Provider>
  );
}
