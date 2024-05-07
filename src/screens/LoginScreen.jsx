import { View } from "react-native";
import { styles } from "../config/styles";
import { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [err, setErr] = useState("");

    const handleLogin = () => {
        if (email.trim() === ""){
            setErr("Por favor, digite seu email.");
            return;
        }
        if (senha.trim() === ""){
            setErr("Por favor, digite seu senha.");
            return;
        }
        navigation.navigate("HomeScreen");
    };
            
    return (
        <View style={styles.container}>
            <Text>Página de Login!</Text>
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
                {err ? <Text style={styles.error}>{err}</Text> : null}
                <Button mode="contained"
                    onPress={handleLogin}
                    style={styles.button}
                >Login</Button>
                <Button
                    onPress={() => navigation.navigate("RegisterScreen")}
                >Fazer Cadastro</Button>
            </View>
        </View>
    );
}