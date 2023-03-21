import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Title from "../components/title";

function GameScreen() {
    return (
        <View style={styles.screen}>
            <Title> Opponent's Guess</Title>
            <View>
                <Text>  Higher or lower  </Text>
            </View>
            <View></View>
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
    screen: {
        flex: 1,
        padding: 20,
    }
});