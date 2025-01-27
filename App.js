import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import{ LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {

  const[userNumber, setUserNumber]= useState();
  const[gameIsOver, setGameIsOver]= useState(true);

   const [fonstLoaded] = useFonts({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
  });


  if(!fonstLoaded){
    return <AppLoading/>
  }



  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen  onPickedNumber ={pickedNumberHandler}/>

  if(userNumber){
    screen = <GameScreen/>;
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/background.png')} style={styles.rootScreen} imageStyle={styles.backgroundImage}>
       <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
   
      {/* <StartGameScreen /> */}
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen:{
    flex: 1
  }
,
backgroundImage:{
  opacity:0.15
}
});
