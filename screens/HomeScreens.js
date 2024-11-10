import { View, Text, StyleSheet, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useCallback, useEffect, useMemo } from 'react';

export default function HomeScreen( {navigation}) {
    const buttons = [
        { title: 'Драма', screen: 'Page1' },
        { title: 'Комедія', screen: 'Page2' },
        { title: 'Вампіри', screen: 'Page3' },
        { title: 'Романтика', screen: 'Page4' }
      ];
    return (      
        <View style={styles.container}>
          <TouchableOpacity
                            onPress={() => {
                              navigation.navigate('SignUpPage');
                            }} style={styles.button}>
            <Image style={styles2.profileImage} source={{ uri: 'https://images.squarespace-cdn.com/content/v1/569591ff0ab3771dba3f1ec6/1650383193773-4E38HIVJMG16Q5MHD80A/JD+Solo+by+Todd+V+Wolfson.jpg?format=2500w' }} />
          </TouchableOpacity>
        <Text style={styles.text}>Жанри аніме</Text>
        <FlatList
          data={buttons}
          keyExtractor={(item) => item.screen}
          renderItem={({ item }) => (
            <View style={styles.buttonContainer}>
              <Button
                title={item.title}
                onPress={() => navigation.navigate(item.screen)}/>
            </View>
          )}
        />
      </View>
    );
  }

  const styles2 = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16, backgroundColor: '#f5f5f5' },
    profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
    name: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
    email: { fontSize: 16, color: '#888', marginBottom: 20 },
});

  const styles = StyleSheet.create({
        container:{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: 'beige',
        },
        text:{
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 16,
        },
        buttonContainer: {
            marginVertical: 8,
            width: 200, // ширина для кожної кнопки
          },
    }
  );