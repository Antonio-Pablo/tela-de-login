import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import { useState } from "react"; // importando o useState
import Titulo from "./components/titulo/index.js";
const Login = () => {
  const [login, setLogin] = useState(); // criando o estado login
  const [senha, setSenha] = useState();
  function Logar() {
    Alert.alert("login", "Login: " + login + " Senha: " + senha);
  }
  return (
    <View style={styles.container}>
  
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
    marginBottom: 4,
    fontWeight: "bold",
  },
  subTitulo: {
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
  },
});
export default Login;
