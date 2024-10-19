import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

export default function Page1({navigation}) {
    const animes = [
        { title: 'Проводжає в останню путь Фрірен', key: 1},
        { title: 'Мастера меча онлайн', key: 2},
        { title: 'Сага о Вінланді', key: 3},
        { title: 'Я хочу з\'їсти твою підшлункову залозу', key: 4}
      ];
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Драма</Text>
        <FlatList
          data={animes}
          keyExtractor={(item) => item.key.toString()} // Перетворення ключа на рядок
          renderItem={({ item }) => (
            <View style={styles.text}>
              <Text>{item.title}</Text>
            </View>
          )}
        />
        <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
      </View>
    );
  }

  const styles = StyleSheet.create({
        container:{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        },
        text:{
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 16,
        },
    }
  );