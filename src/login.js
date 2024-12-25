import { View, TextInput, StyleSheet } from "react-native"

const Login = ()=>{
    return <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Usuario"></TextInput>
    </View>
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
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
    },
});
export default Login;