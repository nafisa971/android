import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Login' }} />
      <Stack.Screen name="daftar" options={{ title: 'Daftar' }} />
      <Stack.Screen name="(tabs)" options={{ title:'home', headerShown: true }} />

    </Stack>
  );
}
