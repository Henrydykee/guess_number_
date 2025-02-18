import { Text , StyleSheet } from "react-native";
import Colors from "../util/colors";

function Title({children}) { 
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontFamily : "open-sans-bold",
        fontSize: 24,
        color: Colors.accent500,
        textAlign: 'center',
        borderColor : Colors.accent500,
        borderWidth: 2,
        padding: 12
    },
});