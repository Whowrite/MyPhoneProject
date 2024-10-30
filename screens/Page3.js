import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import { useQuery } from '@tanstack/react-query';

const fetchVampire = async () => {
  const response = await fetch('https://my-json-server.typicode.com/Whowrite/MyPhoneProject/vampire');
  if (!response.ok) {
      throw new Error('Failed to fetch profile data');
  }
  return response.json();
};

export default function Page3({navigation}) {
  const { data: vampire, isLoading, error } = useQuery({
    queryKey: ['vampire'],
    queryFn: fetchVampire,
});
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Вампіри</Text>
        <FlatList
          data={vampire}
          keyExtractor={(item) => item.key.toString()} // Перетворення ключа на рядок
          renderItem={({ item }) => (
            <View style={styles.text}>
              <Text style={{fontSize: 18, marginBottom: 7}}>{item.title} </Text>
              <TouchableOpacity onPress={() => navigation.navigate('InfoAboutAnime', {title: item.title, img: item.image, page: 'Page3', desc: item.description})} style={styles.button}>
        <Image 
          source={{ uri: item.image }} // URL зображення для кнопки
          style={styles.buttonImage} // Стилі для зображення кнопки
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
    buttonImage: {
      width: 300,
      height: 300,
      marginBottom: 20,
    },
}
);