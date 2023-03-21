import { Text, View, StatusBar, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/app.style";
import MyInput from "../components/MyInput";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";

export default function Login() {
  const navigation = useNavigation();
  function handleGoToRegister() {
    navigation.navigate("Register");
  }

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
      <TouchableOpacity
        style={styles.createAccount}
        onPress={handleGoToRegister}
      >
        <Text style={styles.createAccountText}>Dont have an account?</Text>
        <Text style={styles.createAccountSignUp}> Register</Text>
      </TouchableOpacity>
      <Footer />
    </View>
  );
}
