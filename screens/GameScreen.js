import { View, Text, StyleSheet, SafeAreaView , Alert} from "react-native";
import Title from "../components/title";
import PrimaryButton from "../components/PrimaryButton";
import InstructionText from "../components/instruction_text";
import Card from "../components/card";
import NumberContainer from "../components/number_container";
import { Ionicons } from '@expo/vector-icons'




function generateRandomBetween(min, max, exclude) {
    const rndNumber = Math.floor(Math.random() * (max - min)) + min;
    if (rndNumber === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNumber;
    }
}
let minBoundary = 1;
let currentGuess = 1

const nextGuessHandler = direction => {
    if (
        (direction === 'lower' && currentGuess < props.userChoice) ||
        (direction === 'greater' && currentGuess > props.userChoice)
    ) {
        Alert.alert("Don't lie!", 'You know that this is wrong...', [
            { text: 'Sorry!', style: 'cancel' }
        ]);
        return;
    }
    if (direction === 'lower') {
        currentHigh.current = currentGuess;
    } else {
        currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
        currentLow.current,
        currentHigh.current,
        currentGuess
    );
    setCurrentGuess(nextNumber);

    setPastGuesses(curPastGuesses => [
        nextNumber.toString(),
        ...curPastGuesses
    ]);
};

function GameScreen() {
    return (
        <View style={styles.screen}>
            <Title> Opponent's Guess</Title>
            <NumberContainer> 8</NumberContainer>

            <Card>

                <InstructionText prop={styles.InstructionText}>  Higher or lower  </InstructionText>
                <View style={styles.buttonsContainer}>

                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name= "md-remove" size={24} color= "white"/>
                        </PrimaryButton>
                    </View>


                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}> 
                    <Ionicons  name= "md-add" size={24} color= "white"/>        
                    </PrimaryButton>
                    </View>





                </View>
            </Card>

        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderColor: '#ddb52f',
        borderWidth: 2,
        padding: 12
    },

    InstructionText: {
        marginBottom: 12

    },

    buttonsContainer: {
        flexDirection: 'row',
    },

    buttonContainer: {
        flex: 1
    },
    screen: {
        flex: 1,
        padding: 20,
    }
});