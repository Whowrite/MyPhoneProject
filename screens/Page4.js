import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

export default function Page4({navigation}) {
    const animes = [
        { title: 'Хорімія', key: 1},
        { title: 'Мастера меча онлайн', key: 2},
        { title: 'Цей дурний свин не розуміє мрію дівчинки-зайки', key: 3},
        { title: 'Ангел по сусідству', key: 4}
      ];
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Романтика</Text>
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