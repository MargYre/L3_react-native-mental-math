import { Text, View, Button, TextInput } from 'react-native';
import { styles } from './styles';
import { DIFFICULTY } from './src/utils/number';
import { formatTime } from './src/utils/timer';
import { useGameLogic } from './src/hooks/useGameLogic.js';
import DifficultySelector from './src/components/DifficultySelector';
import GameHeader from './src/components/GameHeader';

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
      <DifficultySelector
        difficulty={difficulty}
        changeDifficulty={changeDifficulty}
        containerStyle={styles.difficultyContainer}
      />
      <GameHeader timeLeft={timeLeft} score={score} />

      <Text style={styles.numberContainer}>
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
      <View style={{ backgroundColor: 'pink', borderRadius: 10, overflow: 'hidden' }}>
        <Button
          title='Valider'
          onPress={handleSubmit}
          color="lightblue"
          disabled={!btnEnabled}
        />
      </View>
      <Text style={styles.message}>{msg}</Text>
      <View style={{ backgroundColor: 'lemonchiffon', borderRadius: 10, overflow: 'hidden' }}>
      {!btnEnabled && (
        <Button
          title='Nouvelle partie'
          color={'lightblue'}
          onPress={() => {
            resetGame();
            resetScore();
          }}
        />
      )}
      </View>
    </View>
  );
}