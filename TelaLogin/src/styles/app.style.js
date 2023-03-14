import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15151d",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  loginImage: {
    width: 100,
    height: 100,
    marginTop: 100,
    marginBottom: 20,
  },
  heading: {
    color: "#e6e1e4",
    fontFamily: "Poppins-Medium",
    fontSize: 30,
    textAlign: "left",
    width: "100%",
  },
  loginDescription: {
    color: "#645c64",
    fontFamily: "Poppins-Medium",
    textAlign: "left",
    width: "100%",
    marginBottom: 30,
  },
  forgotPassword: {
    width: "100%",
    textAlign: "right",
    color: "#3b79f5",
    fontFamily: "Poppins-Medium",
    marginVertical: 10,
  },
  loginButton: {
    height: 50,
    backgroundColor: "#3b79f5",
    width: 150,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#3b79f5",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.23,
    shadowRadius: 11.78,
    elevation: 15,
    marginVertical: 20,
  },
  loginButtonText: {
    color: "#FFF",
    fontFamily: "Poppins-Bold",
    textTransform: "uppercase",
    letterSpacing: 2,
    fontSize: 16,
  },
  createAccount: {
    color: "#515d71",
    fontSize: 14,
    fontFamily: "Poppins-Medium",
  },
  createAccountSignUp: {
    color: "#3b79f5",
    textTransform: "uppercase",
  },
});
