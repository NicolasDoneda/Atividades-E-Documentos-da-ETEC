import React from 'react';
import { StatusBar, ScrollView, Text, StyleSheet, Image,} from 'react-native';

export default function HomeScreen() {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      
      <ScrollView
        contentContainerStyle={styles.container}
        style={styles.scroll}
      >
        <Image
          source={require('../../assets/images/home/teia.png')}
          style={styles.teia}
        />
        <Image
          source={require('../../assets/images/home/spiderman-icon.jpg')}
          style={styles.image}
        />
        <Text style={styles.title}>Spider-Man</Text>
        <Text style={styles.text}>
  {'Criado em 1962 pelo visionário Stan Lee e pelo artista Steve Ditko, o Homem-Aranha surgiu como uma inovação no mundo dos quadrinhos — um herói que não era um deus, um milionário ou um guerreiro místico, mas sim um jovem comum, cheio de dúvidas, erros e imperfeições. Peter Parker era um adolescente solitário, tímido e, por vezes, egoísta, que se via diante de uma responsabilidade muito maior do que ele imaginava.\n\nNo início, sua história não era apenas sobre o confronto entre o bem e o mal, mas sobre o conflito interno de um jovem que precisa aprender a abandonar o egoísmo para se tornar algo maior do que ele mesmo. A famosa frase “Com grandes poderes vêm grandes responsabilidades” não é apenas um bordão heroico, mas um chamado filosófico à maturidade e ao sacrifício. Peter precisa transcender seus desejos imediatos e sua imaturidade para aceitar o peso de ser o Homem-Aranha.\n\nEssa dualidade entre Peter Parker e o Homem-Aranha é o cerne que torna esse personagem tão profundamente humano e fascinante. Peter, o indivíduo com suas fraquezas, inseguranças e anseios, e o Homem-Aranha, o símbolo da coragem, da justiça e da esperança — ambos coexistem em uma complexa dança existencial. É um lembrete de que dentro de cada um de nós reside uma multiplicidade de personas, e que a verdadeira heroína está na constante luta interna para escolher agir com integridade, mesmo quando o ego clama por caminhos mais fáceis.\n\nAssim, o Homem-Aranha não é apenas um super-herói que enfrenta vilões; é uma alegoria da jornada humana, onde o crescimento pessoal nasce da dor, da perda e da responsabilidade escolhida. A teia que ele lança não prende apenas criminosos, mas também conecta as diversas facetas de sua identidade, entrelaçando vulnerabilidade e força, falhas e redenção.\n\nNo universo vasto dos quadrinhos, Peter Parker e seu alter ego nos ensinam que a verdadeira força não está nos poderes que temos, mas na coragem de nos reinventar e agir para o bem, mesmo quando o mundo parece conspirar contra nós — uma lição tão atemporal quanto a própria vida.'}
</Text>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#161a21',
  },
  container: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
  },
  teia: {
    width: 450,
    height: 170,
    resizeMode: 'cover',
    marginTop: -40,
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
    marginBottom: -40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#91acdb',
    marginBottom: 10,
  },
  text: {
  fontSize: 20,
  textAlign: 'justify',
  fontFamily: 'ComicNeue-Regular',
  color: '#c7d7f2',
  paddingHorizontal: 20,  // espaçamento interno nas laterais
}
});
