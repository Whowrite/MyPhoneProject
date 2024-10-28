import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Image } from 'react-native';

export default function Page2({navigation}) {
    const animes = [
        { title: 'Неосяжний океан', key: 1,
           image: 'https://nyaa.shikimori.one/uploads/poster/animes/37105/main_2x-b4d97a326c4a6b03343dba08f52d7c8d.webp',
           description: 'У Йорі Кітахари починається нове життя після вступу до престижного коледжу в приморському містечку Ідзу-Сіті. Хлопець знімає кімнату у сім\'ї Котегава, що володіє магазином спорядження для дайвінгу \"Grand Blue\". Але вся ця тема Іорі не подобається: він до жаху боїться води і вважає за краще з морською справою не зв\'язуватися. Однак, познайомившись із компанією дайверів, юнак змінює свої погляди, намагається перебороти свій страх і відкрити для себе безкраї простори неосяжного океану!'},
        { title: 'Сходження в тіні!', key: 2,
           image: 'https://m.media-amazon.com/images/M/MV5BMDFmMWJlMWYtMDFkNi00OWViLTkzOGEtNDI0YWNmM2M5MzI5XkEyXkFqcGc@._V1_QL75_UY281_CR4,0,190,281_.jpg',
           description: 'Сід Кагено завжди хотів бути героєм. Але не рятівником, відомим на весь світ, а незримою тінню, що діє з-за лаштунків. Заради досягнення своєї мрії Сід старанно вчився і тренувався, нікому не показуючи своїх здібностей. Але як би він не старався, проти рушниць і танків йому не вистояти. Єдиний спосіб здолати армію поодинці - оволодіти магією! У пошуках магії він випробував усе, що тільки міг, і знайшов єдиний засіб: вантажівку. Переродившись в іншому світі, Сід здійснить свою мрію стати Тіньовим Владикою!'},
        { title: 'Шлях домогосподаря', key: 3,
           image: 'https://m.media-amazon.com/images/M/MV5BMWNmNDc5MDktNzc5Mi00ZTQ3LThhODktMjRjMzc2NzMxYzg5XkEyXkFqcGc@._V1_.jpg',
           description: 'Безсмертний Тацу - жива легенда у сфері криміналу. Колись його ім\'я вселяло жах, як поліцейським, так і злочинцям. Однак з якихось причин він кидає бандитське життя, і тепер Тацу - звичайний домогосподар, який пристосувався до повсякденних домашніх справ. Чи вдасться колишньому якудза залишитися відданим чоловіком і вести спокійне життя, не вплутуючись водночас у різні колотнечі?'},
        { title: 'МЕШЛ: Магія та м\'язи', key: 4,
           image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/f7dfe109de592c6dd9a78dc75ec1965b.jpg',
           description: 'Ви коли-небудь замислювалися, що могутніше - фаєрбол чи потужний хук правою? Уявіть собі світ, у якому магією користуються всі. І в цьому світі в дрімучому лісі живе пацан на ім\'я Меш Вандед, який день за днем гойдається як одержимий. Навіщо - запитаєте ви? А вся справа в тому, що в нього є страшна таємниця: він не може використовувати магію. Але зате запросто гне руками монети, жбурляє гігантські валуни і робить інші штуки, на які нормальна людина не здатна. Меш - хлопець простий, і хоче тихо-мирно жити зі своїм прийомним батьком, але одного разу його намагаються вбити, і в результаті низки подій він - яка іронія! - Здавалося б, ситуація абсолютно абсурдна, але Меш не сумує і ставить собі нову мету: стати Божественним провидінням, елітою з еліт. А допоможуть йому в цьому богатирська сила, недолугі однокласники і вічний покерфейс!'}
      ];
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Комедія</Text>
        <FlatList
          data={animes}
          keyExtractor={(item) => item.key.toString()} // Перетворення ключа на рядок
          renderItem={({ item }) => (
            <View style={styles.text}>
              <Text style={{fontSize: 18, marginBottom: 7}}>{item.title} </Text>
              <TouchableOpacity onPress={() => navigation.navigate('InfoAboutAnime', {title: item.title, img: item.image, page: 'Page2', desc: item.description})} style={styles.button}>
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