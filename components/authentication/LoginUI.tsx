import { supabase } from "@/lib/supabase";
import authStyle from "@/styles/auth.styles";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

const LoginUI = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loading, setLoading] = useState<boolean>();

  const signInWithEmail = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email ?? "",
      password: password ?? "",
    });
    setLoading(false);
    if (error)
      Alert.alert(`Error with Logging In: ${email} ${password} ${error}`);
    else router.push("/(tabs)/home");
  };

  return (
    <View style={authStyle.secondaryContainer}>
      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        inputMode="email"
        placeholder="email@domain.com"
        style={authStyle.textInput}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="password"
        secureTextEntry={true}
        style={authStyle.textInput}
      />
      <TouchableOpacity onPress={async () => await signInWithEmail()}>
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
        <Text>No account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginUI;
