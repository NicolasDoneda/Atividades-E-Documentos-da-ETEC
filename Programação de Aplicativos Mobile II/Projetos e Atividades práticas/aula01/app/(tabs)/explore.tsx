import React from 'react';
import { StyleSheet, View, Text, ScrollView, StatusBar } from 'react-native';
import { Image } from 'expo-image';

export default function TabTwoScreen() {
  const comics = [
    require('../../assets/images/gallery/hq1.jpg'),
    require('../../assets/images/gallery/hq2.jpg'),
    require('../../assets/images/gallery/hq3.jpg'),
    require('../../assets/images/gallery/hq4.jpg'),
    require('../../assets/images/gallery/hq5.jpg'),
    require('../../assets/images/gallery/hq6.jpg'),
    require('../../assets/images/gallery/hq7.jpg'),
    require('../../assets/images/gallery/hq8.jpg'),
    require('../../assets/images/gallery/hq9.jpg'),
    require('../../assets/images/gallery/hq10.jpg'),
    require('../../assets/images/gallery/hq11.jpg'),
    require('../../assets/images/gallery/hq12.jpg'),
    require('../../assets/images/gallery/hq13.jpg'),
    require('../../assets/images/gallery/hq14.jpg'),
    require('../../assets/images/gallery/hq15.jpg')
  ];

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <ScrollView style={styles.container} contentContainerStyle={{ padding: 10 }}>
        
        {/* Teia ocupando toda a largura, ignorando o padding */}
        <Image
          source={require('../../assets/images/gallery/teia2.png')}
          style={[styles.teia, { marginHorizontal: -10 }]}
        />

        <Text style={styles.title}>Galeria de Quadrinhos</Text>

        <View style={styles.gallery}>
          {comics.map((item, index) => (
            <Image
              key={index}
              source={item}
              style={styles.image}
              contentFit="cover"
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161a21',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#91acdb',
    textAlign: 'center',
  },
  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: '32%',   // 3 imagens por linha
    height: 180,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#222', // fundo para debug
  },
  teia: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    marginTop: -40,
    marginBottom: 20,
  },
});
