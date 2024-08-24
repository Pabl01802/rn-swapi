import { Stack } from "expo-router"

const RootLayout = () => (
  <Stack>
    <Stack.Screen name='index' options={{
      headerTitle: 'SWAPI Home',
    }} />
  </Stack>
)

export default RootLayout