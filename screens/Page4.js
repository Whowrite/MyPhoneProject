import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Image } from 'react-native';

export default function Page4({navigation}) {
    const animes = [
        { title: 'Хорімія', key: 1,
           image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR26gMfZu0mP9FTA2ZpwxgCv_V1RnFek_22lg&s',
           description: 'У школі Кьоко Хорі знали, як розумну, привабливу і популярну дівчину. Її однокласника, нудного, похмурого Ізумі Міямуру, навпаки, описують як невдаху й отаку. Але коли на порозі Хорі несподівано з\'являється Міямура, увесь у татуюваннях та пірсингу, ці два настільки несхожих один на одного підлітки розуміють, що в кожної історії є кілька трактувань... а в кожної особистості - багато сторін!'},
        { title: 'Детектив уже мертвий', key: 2,
           image: 'https://desu.shikimori.one/uploads/poster/animes/46471/main_alt-a52683223d5d08244e602198f1d09e97.jpeg',
           description: 'Кімізука Кіміхіко - справжній магніт для неприємностей. Хоч би куди він пішов, скрізь знайде собі проблеми: то опиниться на місці злочину, то потрапить на переговори наркоторговців... Тому раптова поява прекрасної дівчини-детектива на ім\'я Сієста, яка зажадала від нього допомоги в розслідуванні, не стала для нього великим сюрпризом. Разом партнери викривали злочинні організації та рятували тисячі життів. До тих пір, поки Сієста не померла. Після цього Кімізука вирішує відійти від справ і повернутися до звичайного шкільного життя. Але так само раптово, як і Сієста, в його життя вривається інша дівчина, неймовірно схожа на його колишню напарницю...'},
        { title: 'Цей дурний свин не розуміє мрію дівчинки-зайки', key: 3,
           image: 'https://myanimelist.net/images/anime/1613/102179.jpg',
           description: 'Кажуть, є один загадковий феномен. Він називається "синдром статевої зрілості". Наприклад, старшокласник Са́кута Азусага́ва одного разу побачив поруч із собою дівчину із заячими вушками і хвостиком. Її звали Май Сакураджима. Знаменита актриса, яка взяла відпустку. А вчиться в тій самій школі, що й Са́кута. З якоїсь причини ніхто її не помічає. Са́кута вирішує розкрити цю таємницю, спілкуючись із Ма́й і дізнаючись про її таємні почуття. Також Са́кута зустрічає ще кількох дівчат із "синдромом статевої зрілості"'},
        { title: 'Ангел по сусідству', key: 4,
           image: 'https://desu.shikimori.one/uploads/poster/animes/50739/main_alt-f7dd916153da26bd096f12cc362fb532.jpeg',
           description: '"Доленосна зустріч" - саме так називають те, що трапилося з ними під проливним дощем. Спортсменка, відмінниця і просто красуня. Вона така гарна в усьому, що однокласники прозвали її ангелом. Хлюпик, нечупара і тихоня. Він такий недосвідчений у всьому, що навіть сам це відкрито визнає. Вони ходять в одну школу, живуть у сусідніх квартирах, але їхні світи такі далекі, що вони ніколи не спілкувалися... до цього похмурого дня.'}
      ];
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Романтика</Text>
        <FlatList
          data={animes}
          keyExtractor={(item) => item.key.toString()} // Перетворення ключа на рядок
          renderItem={({ item }) => (
            <View style={styles.text}>
              <Text style={{fontSize: 18, marginBottom: 7}}>{item.title} </Text>
              <TouchableOpacity onPress={() => navigation.navigate('InfoAboutAnime', {title: item.title, img: item.image, page: 'Page4', desc: item.description})} style={styles.button}>
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