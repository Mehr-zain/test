// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Screens/SplashScreen';
import HomeScreen from './Screens/HomeScreen';
import MathChapterScreen from './Screens/MathChapterScreen';
import ExercisesScreen from './Screens/ExercisesScreen';
import PDFViewerScreen from './Screens/PDFViewerScreen'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerStyle:{backgroundColor:'#272727',},headerTintColor:"white",headerTitleAlign:'center'}}>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:true}}/>
        <Stack.Screen name="Chapters" component={MathChapterScreen} options={{headerShown:true}}/>
        <Stack.Screen name="Exercises" component={ExercisesScreen} options={{headerShown:true}}/>
        <Stack.Screen name="PDFViewer" component={PDFViewerScreen} options={{headerShown:true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
