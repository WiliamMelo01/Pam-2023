import { Text, View, StatusBar, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/app.style";
import MyInput from "../components/MyInput";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
export default function Register() {
  const navigation = useNavigation();

  function handleBackToLogin() {
    navigation.navigate("Login");
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
      <Text style={styles.heading}>Register</Text>
      <Text style={styles.loginDescription}>Create your account here.</Text>
      <MyInput icon="email" placeholder="Enter your Email" />
      <MyInput icon="lock" placeholder="Enter your password" />
      <MyInput icon="face" placeholder="Enter your username" />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.createAccount}
        onPress={handleBackToLogin}
      >
        <Text style={styles.createAccountText}>Already have an account?</Text>
        <Text style={styles.createAccountSignUp}> Login</Text>
      </TouchableOpacity>
      <Footer />
    </View>
  );
}
