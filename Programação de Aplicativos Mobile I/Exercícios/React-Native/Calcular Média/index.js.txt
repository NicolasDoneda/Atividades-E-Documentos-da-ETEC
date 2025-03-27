
import React, { useState } from 'react';
import { TextInput, Button, View } from 'react-native';
import { styles } from './css/styles';

const App = () => {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [nota4, setNota4] = useState('');
  const [resultado, setResultado] = useState('');
  const [resultSe, setResultSe] = useState('');

  const media = () => {
    const note1 = parseFloat(nota1);
    const note2 = parseFloat(nota2);
    const note3 = parseFloat(nota3);
    const note4 = parseFloat(nota4);

    if (!isNaN(note1) && !isNaN(note2) && !isNaN(note3) && !isNaN(note4)) {
      const mediaFinal = (note1 + note2 + note3 + note4) / 4;
      setResultado(mediaFinal); 

      if (mediaFinal >= 6) {
        setResultSe("Aprovado");
      } else if (mediaFinal >= 4 && mediaFinal < 6) {
        setResultSe("Recuperação");
      } else {
        setResultSe("Reprovado");
      }
    }

  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite a primeira nota: "
        placeholderTextColor="gray"
        keyboardType="numeric"
        value={nota1}
        onChangeText={setNota1}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a segunda nota: "
        placeholderTextColor="gray"
        keyboardType="numeric"
        value={nota2}
        onChangeText={setNota2}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a terceira nota: "
        placeholderTextColor="gray"
        keyboardType="numeric"
        value={nota3}
        onChangeText={setNota3}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a quarta nota: "
        placeholderTextColor="gray"
        keyboardType="numeric"
        value={nota4}
        onChangeText={setNota4}
      />
      <TextInput
        style={styles.input}
        placeholder="Resultado"
        placeholderTextColor="gray"
        value={resultado}
        editable={false}
      />
      <TextInput
        style={styles.situacao}
        placeholder="Situação"
        placeholderTextColor="gray"
        value={resultSe}
        editable={false}
      />
      <Button title="Descubra sua média" onPress={media} />
    </View>
  );
};

export default App;
