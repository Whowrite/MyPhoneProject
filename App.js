// In App.js in a new project
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomeScreen from "../ProjectOne/screens/HomeScreens";
import Page1 from "../ProjectOne/screens/Page1";
import Page2 from "../ProjectOne/screens/Page2";
import Page3 from "../ProjectOne/screens/Page3";
import Page4 from "../ProjectOne/screens/Page4";
import InfoAboutAnime from "../ProjectOne/screens/InfoAboutAnime";

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Page1" component={Page1}/>
      <Stack.Screen name="Page2" component={Page2}/>
      <Stack.Screen name="Page3" component={Page3}/>
      <Stack.Screen name="Page4" component={Page4}/>
      <Stack.Screen name="InfoAboutAnime" component={InfoAboutAnime}/>
      </Stack.Navigator>
    </NavigationContainer>
    </QueryClientProvider>
  );
}