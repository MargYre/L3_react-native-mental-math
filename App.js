import { Text, View, Button, TextInput } from 'react-native';
import { styles } from './styles';
import { DIFFICULTY } from './src/utils/number';
import { formatTime } from './src/utils/timer';
import { useGameLogic } from './src/hooks/useGameLogic.js';

export default function App() {
  const {
    difficulty,
    numberOne,
    numberTwo,
    numberThree,
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
    changeDifficulty,
  } = useGameLogic();
  
  return (
    <View style={styles.container}>
      <View style={styles.difficultyContainer}>
        <Button
          title="Facile"
          onPress={() => changeDifficulty(DIFFICULTY.EASY)}
          color={difficulty === DIFFICULTY.EASY ? '#4CAF50' : '#888'}
        />
        <Button
          title="Difficile"
          onPress={() => changeDifficulty(DIFFICULTY.HARD)}
          color={difficulty === DIFFICULTY.HARD ? '#f44336' : '#888'}
        />
      </View>

      <Text style={styles.timer}>{formatTime(timeLeft)}</Text>
      <Text style={styles.text}>Score : {score}</Text>

      <Text style={styles.text}>
        {numberOne} + {numberTwo}
        {difficulty === DIFFICULTY.HARD ? ` + ${numberThree}` : ''} = 
      </Text>
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