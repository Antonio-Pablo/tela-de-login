import { Text, StyleSheet } from "react-native";
const Titulo = (props) => {
  
  return (
    <>
      <Text style={styles.textoLogin}>props.texto2 </Text>
      <Text style={styles.subTitulo}>{props.texto} </Text>
    </>
  );
};

export default Titulo;

const styles = StyleSheet.create({
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
