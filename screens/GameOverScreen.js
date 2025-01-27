
import { Text, View , Image } from "react-native";
import Title from "../components/title";

function GameOverScreen(){

    return <View>
        <Title>
            GAME OVER !
        </Title>
        <Image source={require('../assets/images/sucess.jpg')}/>
    </View>
}


export default  GameOverScreen;