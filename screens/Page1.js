import { View, Text, StyleSheet, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchDrama = async () => {
  const response = await fetch('https://my-json-server.typicode.com/Whowrite/MyPhoneProject/drama');
  if (!response.ok) {
      throw new Error('Failed to fetch profile data');
  }
  return response.json();
};

export default function Page1({ navigation }) {
    useEffect(() => {
        alert("Вітаю на сторінці Драма");
    }, []);

    const { data: drama, isLoading, error } = useQuery({
        queryKey: ['drama'],
        queryFn: fetchDrama,
    });

    const [Clicks, setClicks] = useState(0);

    // Використовуємо useMemo для підрахунку кількості елементів у драмі
    const dramaCount = useMemo(() => drama ? drama.length : 0, [drama]);

    // Використовуємо useCallback для обробника кліків
    const handlePress = useCallback((item) => {
        setClicks((prev) => prev + 1);
        navigation.navigate('InfoAboutAnime', { title: item.title, img: item.image, page: 'Page1', desc: item.description, click: Clicks + 1 });
    }, [navigation, Clicks]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Драма (Кількість: {dramaCount})</Text>
            <FlatList
                data={drama}
                keyExtractor={(item) => item.key.toString()}
                renderItem={({ item }) => (
                    <View style={styles.text}>
                        <Text style={{ fontSize: 18, marginBottom: 7 }}>{item.title}</Text>
                        <TouchableOpacity onPress={() => handlePress(item)} style={styles.button}>
                            <Image
                                source={{ uri: item.image }}
                                style={styles.buttonImage}
                            />
                        </TouchableOpacity>
                    </View>
                )}
            />

            <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'beige',
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    buttonImage: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },
});