import { Stack, Link } from "expo-router"
import { colors } from "../utils/utils"

const RootLayout = () => (
  <Stack screenOptions={{
    headerRight: () => (
      <Link style={{ backgroundColor: colors.primary, padding: 5, color: colors.secondary }} href='/watchList'>
        Watch List
      </Link>
    )
  }}>
    <Stack.Screen name='index' options={{
      headerTitle: 'SWAPI Home',
    }} />
    <Stack.Screen name='movies/[id]' options={{
      headerTitle: 'Movie info',
    }} />
    <Stack.Screen name='watchList/index' options={{
      headerTitle: 'Watch List',
    }} />
  </Stack>
)

export default RootLayout