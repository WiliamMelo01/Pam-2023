import LoadingFonts from "./src/components/LoadingFonts";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  //Carrega as fontes assim que o componente é montado
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
        "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
      });
      setIsLoaded(true);
    }
    loadFonts();
  }, []);
  //Caso as fontes nao tenham sido carregadas renderiza uma tela de loading
  !isLoaded && <LoadingFonts />;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
