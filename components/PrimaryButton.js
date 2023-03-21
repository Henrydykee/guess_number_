import { View, Text, Pressable,StyleSheet } from "react-native";
import Colors from "../util/colors";

function PrimaryButton({ children , onPress}) {

    // function pressHandler(){
    //     onPress();
    // }

    return (
        <Pressable onPress={onPress} >
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