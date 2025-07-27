import LoginUI from "@/components/authentication/LoginUI";
import authStyle from "@/styles/auth.styles";
import { Text, View } from "react-native";

const Login = () => {
  return (
    <View style={authStyle.mainContainer}>
      <Text>Please Login</Text>
      <LoginUI />
    </View>
  );
};

export default Login;
