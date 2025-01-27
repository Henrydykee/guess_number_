import { Text , StyleSheet } from "react-native";
import Colors from "../util/colors";
function InstructionText({ children, prop }) {
    return <Text style={[styles.instructionText,prop]}>{children}</Text>
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24
    },

})