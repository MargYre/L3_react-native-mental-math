import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { styles } from './styles';
import { rndNumber, MAX_NUMBER } from './src/utils/number';
import { formatTime, MAX_TIME } from './src/utils/timer';
import { useGameLogic } from './src/hooks/useGameLogic.js';

export default function App() {
  const {
    numberOne,
    numberTwo,
    solution,
    userAnswer,
    msg,
    score,
    btnEnabled,
    timeLeft,
    setUserAnswer,
    handleSubmit,
    resetGame,
    resetScore,
  } = useGameLogic();
  
  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{formatTime(timeLeft)}</Text>
      <Text style={styles.text}>Score : {score}</Text>
      <Text style={styles.text}>{numberOne} + {numberTwo} = </Text>
      <TextInput
        style={styles.input}
        placeholder='Entrez votre réponse'
        keyboardType='numeric'
        onChangeText={(text) => setUserAnswer(Number(text))}
        value={userAnswer ? String(userAnswer) : ''}
      />
      <Button
        title='Valider'
        onPress={handleSubmit}
        disabled={!btnEnabled}
      />
      <Text style={styles.message}>{msg}</Text>
      {!btnEnabled && (
        <Button
          title='Nouvelle partie'
          onPress={() => {
            resetGame();
            resetScore();
          }}
        />
      )}
    </View>
  );
}