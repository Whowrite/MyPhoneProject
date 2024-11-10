import { useSQLiteContext } from 'expo-sqlite';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const SignUpPage = ({ navigation }) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const db = useSQLiteContext();
  const handleSignUp = async() => {
      if(username.length === 0 || password.length === 0){
        Alert.alert('Attention!', 'Please enter all the fields!');
        return;
      }
      try{
        const existingUsers = await db.getFirstAsync('SELECT * FROM users WHERE username = ?',
        [username]);
        if(existingUsers){
            Alert.alert('Error', 'UserName already exists.');
        }

        await db.runAsync('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
        Alert.alert('Success', 'Registration successful!');
        navigation.navigate('ProfilePage', {user: username});
      } catch(error){
        console.log('Error while Registration!', error);
      }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        placeholder="UserName"
        style={styles.input}
        value={username}
        onChangeText={setUserName}
        keyboardType="userName-address"
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} /> 
      <Text style={styles.link} onPress={() => navigation.navigate('LoginPage')}>
        Already have an account? Login
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

export default SignUpPage;