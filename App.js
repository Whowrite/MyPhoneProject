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
import ProfilePage from "../ProjectOne/screens/ProfilePage";
import LoginPage from "../ProjectOne/screens/LoginPage";
import SignUpPage from "../ProjectOne/screens/SignUpPage";
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

const initializeDatabase = async(db) => {
  try{
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE, password TEXT);
      `);
      console.log('Database initialized !');
  } catch(error){
    console.log('Error while initialize database!', error);
  }
};

export default function App() {
  return (
    <SQLiteProvider databaseName='auth.db' onInit={initializeDatabase}>
    <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Page1" component={Page1}/>
          <Stack.Screen name="Page2" component={Page2}/>
          <Stack.Screen name="Page3" component={Page3}/>
          <Stack.Screen name="Page4" component={Page4}/>
          <Stack.Screen name="InfoAboutAnime" component={InfoAboutAnime}/>
          <Stack.Screen name="ProfilePage" component={ProfilePage}/>
          <Stack.Screen name="LoginPage" component={LoginPage}/>
          <Stack.Screen name="SignUpPage" component={SignUpPage}/>
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
    </SQLiteProvider>
  );
}