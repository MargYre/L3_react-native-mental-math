import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState, useEffect } from 'react';

const MAX_NUMBER = 50;
const MAX_TIME = 5;

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    width: 200,
    marginVertical: 10,
  },
  text: {
    fontSize: 24,
    marginVertical: 10,
  },
  timer: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    marginTop: 20,
    color: '#666',
    fontSize: 18,
  }
});

export default function App() {
  const [numberOne, setNumberOne] = useState(rndNumber());
  const [numberTwo, setNumberTwo] = useState(rndNumber());
  const [solution, setSolution] = useState();
  const [userAnswer, setUserAnswer] = useState(0);
  const [msg, setMsg] = useState('');
  const [timeLeft, setTimeLeft] = useState(MAX_TIME);
  const [btnEnabled, setBtnEnabled] = useState(true);

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

  const handleSubmit = () => {
    if (Number(userAnswer) === solution) {
      setMsg('Bonne réponse');
      resetGame();
    } else {
      setMsg('Mauvaise réponse, la réponse était ' + solution);
      setBtnEnabled(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{formatTime(timeLeft)}</Text>
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
          onPress={resetGame}
        />
      )}
    </View>
  );
}