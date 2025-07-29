import { Stack } from "expo-router";

const TabLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home"></Stack.Screen>
    </Stack>
  );
};

export default TabLayout;
