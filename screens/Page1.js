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

export default function Page1({navigation}) {
    const animes = [
        { title: 'Проводжає в останню путь Фрірен', key: 1, 
           image: 'https://m.media-amazon.com/images/S/pv-target-images/b054f79f938837f13e1be59cb3d0cf4afcc4f4923ceae6fc192837b03fa726eb.jpg',
          description: 'Після десяти років мандрів група шукачів пригод разом із чарівницею Фрірен здолали короля демонів, звільнивши світ від гніту монстрів. Імена героїв увічнені в легендах і баладах, і тепер на них чекає спокійне розмірене життя до самої старості. Але у Фрірен інша доля. Вона ельф, і здатна прожити понад тисячу років. Людське життя для неї - лише мить, тож, не встигнувши схаменутися, вона залишається зовсім сама. Це історія про незмінну героїню, яка мандрує світом, що постійно змінюється, і намагається втекти від тіней минулого, які її переслідують.'},
        { title: 'Мастера меча онлайн', key: 2,
           image: 'https://www.animenewsnetwork.com/images/encyc/A13858-1216942069.1328925727.jpg',
           description: 'У 2022 році людство здійснило технологічний прорив.\nМрії про повне занурення в гру нарешті стали реальними. \nБагатокористувацька гра Sword Art Online занурює гравця в барвистий світ, сповнений істот і красот. \nОднак у цього світу є й інший бік. Тисячі гравців відразу опиняються замкненими в грі. \nВихід тільки один - пройти гру. \nІ ще один маленький нюанс: можливості відродитися більше немає. \nВмираєш у грі - вмираєш у реалі.'},
        { title: 'Сага о Вінланді', key: 3,
           image: 'https://nyaa.shikimori.one/uploads/poster/animes/37521/main_2x-bd478df5fb69b9f8b21dd1d19d2014e6.webp',
           description: 'Час панування вікінгів. Людей, які відомі своїми варварськими звичаями та жорстокими вбивствами. Торфінн - син одного з найвидатніших вікінгів. Ось тільки виріс хлопчик без батька, адже той загинув на полі бою. Бажаючи помститися, Торфінн поклявся вбити винного. Однак юнакові ще тільки належить оволодіти мистецтвом битви.'},
        { title: 'Я хочу з\'їсти твою підшлункову залозу', key: 4,
           image: 'https://m.media-amazon.com/images/M/MV5BMTQ1ODIzOGQtOGFkZC00MWViLTgyYmUtNWJkNmIxZjYxMTdmXkEyXkFqcGc@._V1_.jpg',
           description: 'Одного прекрасного дня учень старшої школи знаходить чийсь особистий щоденник, підписаний як "Щоденник хвороби". Незабаром з\'ясовується, що щоденник цей належить Сакурі Ямаучі, однокласниці головного героя. Прочитавши його, Харукі дізнається, що дівчина страждає на смертельну хворобу - відмову підшлункової залози. Щоб підтримати її в цій нелегкій ситуації, юнак вирішує потоваришувати з Сакурою, попри їхні абсолютно різні характери.'}
      ];

      const { data: drama, isLoading, error } = useQuery({
        queryKey: ['drama'],
        queryFn: fetchDrama,
    });

    return (
        <View style={styles.container}>
        <Text style={styles.text}>Драма</Text>
        <FlatList
          data={animes}
          keyExtractor={(item) => item.key.toString()} // Перетворення ключа на рядок
          renderItem={({ item }) => (
            <View style={styles.text}>
              <Text style={{fontSize: 18, marginBottom: 7}}>{item.title} </Text>
              <TouchableOpacity onPress={() => navigation.navigate('InfoAboutAnime', {title: item.title, img: item.image, page: 'Page1', desc: item.description})} style={styles.button}>
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
            marginBottom: 20,
        },
        buttonImage: {
          width: 300,
          height: 300,
          marginBottom: 20,
        },
    }
  );