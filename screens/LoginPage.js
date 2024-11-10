import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';

const LoginPage = ({ navigation }) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const db = useSQLiteContext();
  const handleLogin = async () => {
    if(username.length === 0 || password.length === 0){
        Alert.alert('Attention!', 'Please enter all the fields!');
        return;
      }
      try{
        const User = await db.getFirstAsync('SELECT * FROM users WHERE username = ?',
            [username]);
        if(!User){
            Alert.alert('Error', 'User does not exist!');
        }
        const validUser = await db.getFirstAsync('SELECT * FROM users WHERE username = ? and password = ?', [username, password]);
        if(validUser){
            Alert.alert('Success', 'Login successful!');
            navigation.navigate('ProfilePage', {user: username});
        }
        else{
            Alert.alert('Error', 'Incorrect password!');
        }
      } catch(error){
        console.log('Error while Login!', error);
      }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput 
        placeholder="UserName" 
        style={styles.input} 
        value={username} 
        onChangeText={setUserName} 
        keyboardType="username-address" 
      />
      <TextInput 
        placeholder="Password" 
        style={styles.input} 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry 
      />
      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.link} onPress={() => navigation.navigate('SignUpPage')}>
        Don't have an account? Sign Up
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'beige'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  link: {
    color: '#1e90ff',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default LoginPage;