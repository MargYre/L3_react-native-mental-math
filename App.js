import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState, useEffect } from 'react';
import { styles } from './styles';

const MAX_NUMBER = 50;
const MAX_TIME = 15;

const rndNumber = () => {
  return Math.floor(Math.random() * MAX_NUMBER);
}

const formatTime = (time) => {
  if (time < 10) {
    return '00 : 0' + time;
  } else {
    return '00 : ' + time;
  }
}
export default function App() {
  const [numberOne, setNumberOne] = useState(rndNumber());
  const [numberTwo, setNumberTwo] = useState(rndNumber());
  const [solution, setSolution] = useState();
  const [userAnswer, setUserAnswer] = useState(0);
  const [msg, setMsg] = useState('');
  const [timeLeft, setTimeLeft] = useState(MAX_TIME);
  const [btnEnabled, setBtnEnabled] = useState(true);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setSolution(numberOne + numberTwo);
  }, [numberOne, numberTwo]);

  useEffect(() => {
    const timer = setInterval(decreaseTime, 1000); 
    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) {
      setBtnEnabled(false);
      setMsg('Temps écoulé, la bonne réponse était ' + solution);
    }
  }, [timeLeft, solution]);

  const decreaseTime = () => {
    setTimeLeft((prevTime) => Math.max(prevTime - 1, 0));
  }

  const resetGame = () => {
    setNumberOne(rndNumber());
    setNumberTwo(rndNumber());
    setTimeLeft(MAX_TIME);
    setUserAnswer(0);
    setMsg('');
    setBtnEnabled(true);
  }

  const resetScore = () => {
    setScore(0);
  }

  const handleSubmit = () => {
    if (Number(userAnswer) === solution) {
      setScore(score + 1);
      setMsg(`Bonne réponse ! Score : ${score + 1}`);
      resetGame();
    } else {
      setMsg(`Mauvaise réponse, la réponse était ${solution}. Score final : ${score}`);
      setBtnEnabled(false);
    }
  }

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