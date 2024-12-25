import { View,Text, StyleSheet } from "react-native";
import Login from "./src/login";
export default function App(){
  return <Login></Login>
}

const styles = StyleSheet.create({
    
    container: {
        justifyContent: "center",
        flex: 1,       
        alignItems: "center",
    },
});