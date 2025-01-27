import { StyleSheet, TextInput, View, Alert, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Title from "../components/title"
import Colors from "../util/colors";
import Card from "../components/card";
import InstructionText from "../components/instruction_text";

function StartGameScreen({ onPickedNumber }) {

    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHnadeler(enteredText) {
        setEnteredNumber(enteredText)
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confrimInputHandler(enteredText) {
        const chooseNumber = parseInt(enteredNumber);
        if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
            Alert.alert('Invalid Nuber', 'Number has to be between 1 and 99', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]);
            return;
        }
        onPickedNumber(chooseNumber);
    }

    return (
        <View style = {styles.rootContainer}>
            <Title>Guess My Number</Title>
            
            <Card> 
                <InstructionText >
                    Enter a number
                </InstructionText>
                <TextInput style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    onChangeText={numberInputHnadeler}
                    value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confrimInputHandler}>Confrim</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>

    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
 

    buttonsContainer: {
        flexDirection: 'row',
    },

    buttonContainer: {
        flex: 1
    },

    rootContainer : {
        flex : 1,
        marginTop : 100,
        alignItems : "center"
    },

    numberInput: {
        height: 50,
        fontSize: 32,
        width: 50,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        borderColor: Colors.accent500,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})