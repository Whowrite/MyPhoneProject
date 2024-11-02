import { View, Text, StyleSheet, Button, ScrollView, Image, } from 'react-native';
import React from 'react';

export default function InfoAboutAnime({navigation, route}) {
    const { title, img, page, desc, clicks} = route.params;
    // Масив з інформацією про аніме
    return (
        <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <Image 
          source={{ uri: img }} // URL зображення для кнопки
          style={styles.Image} // Стилі для зображення кнопки
        />
        <ScrollView>
        <Text style={styles.text2}>Опис:</Text>
        <Text style={styles.text3}>{desc}</Text>
        </ScrollView>
        <Text style={styles.text3}>Кількість переглядів сторінки: {clicks}</Text>
        <Button title='Return' onPress={() => navigation.navigate(page)} />
      </View>
    );
  }

  const styles = StyleSheet.create({
        container:{
            flex: 1,
            alignItems: "center",
            justifyContent: "top",
            backgroundColor: 'beige',
        },
        text:{
            fontSize: 23,
            fontWeight: "bold",
            marginBottom: 7,
            padding: 7,
        },
        text2:{
            fontSize: 23,
            fontWeight: "bold",
            marginBottom: 7,
            marginHorizontal: 150,
            padding: 7,
        },
        text3:{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 7,
            marginHorizontal: 10,
            padding: 10,
        },
        Image: {
            width: 300,
            height: 300,
            marginBottom: 20,
          },
        },
  );