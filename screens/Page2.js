import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

export default function Page2({navigation}) {
    const animes = [
        { title: 'Неосяжний океан', key: 1},
        { title: 'Сходження в тіні!', key: 2},
        { title: 'Шлях домогосподаря', key: 3},
        { title: 'МЕШЛ: Магія та м\'язи', key: 4}
      ];
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Комедія</Text>
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