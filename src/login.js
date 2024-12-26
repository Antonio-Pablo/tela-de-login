import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import { useState } from "react"; // importando o useState
const Login = () => {
  const [login, setLogin] = useState(); // criando o estado login
  const [senha, setSenha] = useState();
  function Logar() {
    Alert.alert("login", "Login: " + login + " Senha: " + senha);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textoLogin}>TELA LOGIN DO APP </Text>
      <TextInput
        keyboardType="email-address"
        onChangeText={setLogin}
        style={styles.input}
        placeholder="Login"
      ></TextInput>
      <TextInput
        
        onChangeText={setSenha}
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
      ></TextInput>
      <TouchableOpacity onPress={Logar} style={styles.botao}>
        <Text style={styles.text}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  input: {
    width: "80%",
    backgroundColor: "gray",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 18,
  },
  botao: {
    width: "20%",
    backgroundColor: "#3cb371",
    padding: 10,
    fontSize: 18,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Arial-bold",
    textAlign: "center",
  },
  textoLogin: {
    fontSize: 24,
    color: "black",
    marginBottom: 20,
    fontWeight: "bold",
  },
});
export default Login;
