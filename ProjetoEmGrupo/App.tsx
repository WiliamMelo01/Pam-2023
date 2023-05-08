import { NativeBaseProvider } from "native-base";
import Home from "./src/pages/Home";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./src/pages/Details";

export type RootStackParamList = {
  Home: undefined;
  Details: {
    name: string;
    description: string;
    rating: number;
    ratingCount: number;
    imagePath: string;
    calories: number;
    amount: string;
    distance: number;
    delivery: "Express" | "Standard";
    price: number;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
