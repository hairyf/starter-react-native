import { Stack } from 'expo-router'
import { Provider } from '@/components/provider'
import 'reusables/theme'
import '@/style/index.css'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export default function RootLayout() {
  return (
    <Provider>
      <Stack />
    </Provider>
  )
}
