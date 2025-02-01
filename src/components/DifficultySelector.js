import { View, Button } from 'react-native';
import { DIFFICULTY } from '../utils/number';
import React from 'react';
import { styles } from '../../styles'
const DifficultySelector = ({ difficulty, changeDifficulty }) => (
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
);

export default DifficultySelector;