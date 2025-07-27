import authStyle from "@/styles/auth.styles";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

import { supabase } from "@/lib/supabase";

const SignUpUI = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loading, setLoading] = useState<boolean>();

  const signUpWithEmail = async () => {
    setLoading(true);
    const {
      error,
      data: { session },
    } = await supabase.auth.signUp({
      email: email ?? "",
      password: password ?? "",
    });
    if (error) Alert.alert(`Error with Logging In: ${error}`);
    if (!session)
      Alert.alert("Please Check your inbox for email verification!");
    setLoading(false);
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
      <TouchableOpacity onPress={async () => await signUpWithEmail()}>
        <Text>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpUI;
