import { View, Text, Pressable,StyleSheet } from "react-native";

function PrimaryButton({ children }) {
    return (
        <Pressable >
            <View style={style.buttonContainer}>
                <Text style={style.buttonText}>{children}</Text>
            </View>
        </Pressable>
    )
}

export default PrimaryButton;

const style = StyleSheet.create({
    buttonContainer:{
        backgroundColor: '#ddb52f',
        borderRadius : 28,
        paddingVertical : 8,
        paddingHorizontal : 16,
        margin: 4,
    },
    buttonText:{
        color :'white',
        textAlign: 'center',
    }
})