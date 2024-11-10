import React from 'react';
import { View, Text, Image, Button, StyleSheet, Alert } from 'react-native';

const ProfilePage = ({navigation, route}) => {
    const { UserName } = route.params;
    return (
        <View style={styles.container}>
            <Image style={styles.profileImage} source={{ uri: 'https://images.squarespace-cdn.com/content/v1/569591ff0ab3771dba3f1ec6/1650383193773-4E38HIVJMG16Q5MHD80A/JD+Solo+by+Todd+V+Wolfson.jpg?format=2500w' }} />
            <Text style={styles.name}>{UserName}</Text>
            <Button title="Logout" onPress={() => navigation.navigate('LoginPage')} />
            <Button title="Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16, backgroundColor: 'beige', },
    profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
    name: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
    email: { fontSize: 16, color: '#888', marginBottom: 20 },
});

export default ProfilePage;