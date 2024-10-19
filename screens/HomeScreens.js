import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

export default function HomeScreen( {navigation}) {
    const buttons = [
        { title: 'Драма', screen: 'Page1' },
        { title: 'Комедія', screen: 'Page2' },
        { title: 'Вампіри', screen: 'Page3' },
        { title: 'Романтика', screen: 'Page4' }
      ];
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Жанри аніме</Text>
        <FlatList
          data={buttons}
          keyExtractor={(item) => item.screen}
          renderItem={({ item }) => (
            <View style={styles.buttonContainer}>
              <Button
                title={item.title}
                onPress={() => navigation.navigate(item.screen)}
              />
            </View>
          )}
        />
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
        buttonContainer: {
            marginVertical: 8,
            width: 200, // ширина для кожної кнопки
          },
    }
  );