import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textoLogin} >TELA LOGIN DO APP </Text>
      <TextInput style={styles.input} placeholder="Usuário"></TextInput>
      <TextInput style={styles.input} placeholder="Senha"></TextInput>
      <TouchableOpacity style={styles.botao}>
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
    backgroundColor: "#d3d3d3",
    padding: 10,
    fontSize: 18,
    borderRadius: 10,
    marginBottom: 10,
    
  },
  text: {
    color: "white",
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
