import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Image } from 'react-native';

export default function Page3({navigation}) {
    const animes = [
        { title: 'Джо Джо', key: 1,
           image: 'https://nyaa.shikimori.one/uploads/poster/animes/14719/main_2x-52c1e429228c4b424c80d88985561c06.webp',
           description: 'Дев\'ятнадцяте століття, Велика Британія. Батько Джонатана Джостара, також відомого як ДжоДжо, раптово приводить до родинного маєтку хлопця на ім\'я Діо Брандо, який, замість того щоб стати новим другом ДжоДжо, стає його серйозною проблемою. Як не намагається Джонатан зрозуміти Діо, його жахливій поведінці немає виправдання. Це початок довгої історії про протистояння роду Джостарів таємничій кам\'яній масці...'},
        { title: 'Останній Серафім', key: 2,
           image: 'https://nyaa.shikimori.one/uploads/poster/animes/26243/main_2x-bb2434118514bcd0fe4dffbe080f2618.webp',
           description: 'Одного разу на Землі з\'явився таємничий вірус, і виник він ніби з нізвідки. Кожна людина, що заразилася ним, помирала, якщо була старшою за тринадцять років. Водночас у світ прийшли вампіри, які досі ховалися в темряві, і все людство впало перед ними. У центрі оповіді Юічіро Хякуя - хлопчик, який залишився сиротою. З ним та іншими дітьми з притулку вампіри поводяться не краще, ніж із домашньою худобою. Але навіть у полоні, навіть будучи абсолютно безпорадним, Юічіро не втрачає надії. У нього є заповітна мрія, яка є метою всього його життя. А полягає вона в тому, щоб вбивати вампірів і врешті-решт винищити їх усіх!'},
        { title: 'Пісня нічних сов', key: 3,
           image: 'https://i.namu.wiki/i/6P78YUKXqA1xmThkBeJ3wP70QkvjXXdTl7i9_GO5Ifn8Hqz3VJgwzHnA_qvnMWF04XqIZa9g0N33uO-DjUu_bA.webp',
           description: 'Ко Яморі вже довгий час відчував апатію до всього, що оточувало його вдень. Його дратували і люди, і школа, і весь цей міський шум. Через постійне перебування в такому стані він навіть не міг спокійно спати. Його думки постійно плуталися і не давали відпочити. Одного разу, замість того, щоб безцільно крутитися в ліжку і нервувати, хлопець вирішує вийти на нічну прогулянку. Побачене вражає його. Вночі на вулицях тихо і спокійно. Усе зовсім не так, як удень.'},
        { title: 'Мемуари Ванітаса', key: 4,
           image: 'https://m.media-amazon.com/images/M/MV5BMzYwMmI1YWMtOTc0My00OGI3LWI3ZDctZmMwYjczYzcxMjI4XkEyXkFqcGc@._V1_.jpg',
           description: 'Згідно з легендою, у ніч блакитного місяця народився вампір Ванітас. Але його вигнали, бо істоти, подібні до нього, народжуються лише тоді, коли нічне світило забарвлене кров\'ю. У гніві він створив гримуар "Книга Ва́нітаса", щоб помститися кривдникам. Молодий вампір Ное́, мандруючи в на борту дирижабля, почув легенду про книгу і вирушив на її пошуки. Після раптового нападу на дирижабль Ное потрапляє до самого Ва́нітаса. Мандрівник заговорює зуби вампіру і запевняє, що використовуватиме гримуар для лікування дітей ночі. Однак він не такий простий, як здається на перший погляд...'}
      ];
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Вампіри</Text>
        <FlatList
          data={animes}
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