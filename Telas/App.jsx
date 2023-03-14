import { useEffect, useState } from "react";
import { Text, View, StatusBar, Image, TouchableOpacity } from "react-native";
import * as Font from "expo-font";
import MyInput from "./src/components/MyInput";
import LoadingFonts from "./src/components/LoadingFonts";
import { styles } from "./src/styles/app.style";

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
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/6681/6681204.png",
        }}
        style={styles.loginImage}
      />
      <Text style={styles.heading}>Login</Text>
      <Text style={styles.loginDescription}>Please login to continue</Text>
      <MyInput icon="email" placeholder="Enter your Email" />
      <MyInput icon="lock" placeholder="Enter your password" />
      <Text style={styles.forgotPassword}>Forgot password?</Text>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.createAccount}>
        Dont have an account?{" "}
        <Text style={styles.createAccountSignUp}>Sign up</Text>
      </Text>
    </View>
  );
}
