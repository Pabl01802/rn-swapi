import { Stack } from "expo-router"

const RootLayout = () => (
  <Stack>
    <Stack.Screen name='index' options={{
      headerTitle: 'SWAPI Home',
    }} />
    <Stack.Screen name='movies/[id]' options={{
      headerTitle: 'Movie info',
    }} />
  </Stack>
)

export default RootLayout