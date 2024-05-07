import { View } from "react-native";
import { styles } from "../config/styles";
import { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function RegisterScreen( {navigation} ) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");
  const [err, setErr] = useState("");

  const handleRegister = () => {
    if (email.trim() === ""){
        setErr("Por favor, digite seu email.");
        return;
    }
    if (senha.trim() === ""){
        setErr("Por favor, digite seu senha.");
        return;
    }
    if (repetirSenha.trim() === ""){
      setErr("Por favor, repita sua senha.");
      return;
  }
    navigation.navigate("HomeScreen");
};



  return (
    <View style={styles.container}>
       <Text>Página de Registro!</Text>
      <View style={styles.container_inner}>
       
        <TextInput
          label={"Email"}
          placeholder={"Digite seu e-mail"}
          value={email}
          onChangeText={setEmail}
          style={styles.textInput}
        />
        <TextInput
          label={"Senha"}
          placeholder={"Digite sua Senha"}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry // Para esconder a senha
          style={styles.textInput}
        />
        <TextInput
          label={"Repetir senha"}
          placeholder={"Repita sua senha"}
          value={repetirSenha}
          onChangeText={setRepetirSenha}
          secureTextEntry // Para esconder a senha
          style={styles.textInput}
        />
         {err ? <Text style={styles.error}>{err}</Text> : null}
        <Button mode="contained" onPress={handleRegister} style={styles.button}>Cadastre-se</Button>
      </View>
    </View>
  );
}