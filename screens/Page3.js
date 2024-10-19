import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

export default function Page3({navigation}) {
    const animes = [
        { title: 'Джо Джо', key: 1},
        { title: 'Останній Серафім', key: 2},
        { title: 'Пісня нічних сов', key: 3},
        { title: 'Мемуари Ванітаса', key: 4}
      ];
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Вампіри</Text>
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