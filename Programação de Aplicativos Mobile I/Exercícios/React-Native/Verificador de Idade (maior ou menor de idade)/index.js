import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { styles } from './css/styles';

const App = () => {
  const [ageUser, setAgeUser] = useState('');
  const [result, setResult] = useState('');

  const seIdade = () => {
    const idade = parseInt(ageUser);

    if (!isNaN(idade)) {
      if (idade <= 17 && idade >= 1) {
        setResult('Você é menor de idade');
      } 
      else if (idade >= 18 && idade <= 100) {
        setResult('Você é maior de idade');
      }
    
      else {
        setResult('Número inválido, permitido de 1 a 100.');
      }}
      else {
        setResult('Por favor, insira um número válido');

    
    }
  };

  return (
    <View style={styles.container}>
  
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        placeholderTextColor="gray"
        keyboardType="numeric"
        value={ageUser}
        onChangeText={setAgeUser}
      />
      <TextInput
        style={styles.inputResult}
        placeholder="Sua idade aparecerá aqui!"
        placeholderTextColor="gray"
        keyboardType="numeric"
        value={result}
        onChangeText={setResult}
      />
      <Button 
      title="Clique Aqui" 
      onPress={seIdade} 
      color="#076B5B"
      />
    </View>
  );
};

export default App;
