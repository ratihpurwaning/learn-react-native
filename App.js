/* eslint-disable no-unused-vars */
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';
// import ChallengeScreen from './src/screens/SecondScreen';
import ThirdScreen from './src/screens/ThirdScreen';
import AddImage from './src/screens/ThirdScreen';
import FourthScreen from './src/screens/FourthScreen';
import DiyMeeting4 from './src/screens/Diy_meet4';
import InstagramHomeScreen from './src/screens/InstagramHomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import GuessTheCountryScreen from './src/screens/GuessTheCountryScreen';
import WinScreen from './src/screens/WinScreen';
import MainNavigator from './src/screens/navigator/MainNavigator';
const App = () => {
  return (
    <SafeAreaProvider>
      {/* <FirstScreen /> */}
      {/* <SecondScreen /> */}
      {/* <ChallengeScreen /> */}
      {/* <ThirdScreen /> */}
      {/* <AddImage /> */}
      <FourthScreen />
      {/* <DiyMeeting4 /> */}
      {/* <InstagramHomeScreen /> */}
      {/* <HomeScreen /> */}
      {/* <GuessTheCountryScreen /> */}
      {/* <WinScreen /> */}
      {/* <MainNavigator /> */}
    </SafeAreaProvider>
  );
};

export default App;
