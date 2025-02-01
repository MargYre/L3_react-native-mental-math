import { View, Button, TextInput, Text,TouchableOpacity } from 'react-native';
import { DIFFICULTY } from '../utils/number';
import React from 'react';
import { styles } from '../../styles'

const DifficultySelector = ({ difficulty, changeDifficulty }) => (
    <View style={styles.difficultyContainer}>
      <TouchableOpacity
        style={[
          styles.difficultyButton,
          { backgroundColor: difficulty === DIFFICULTY.EASY ? 'lemonchiffon' : '#e3e3e3' }
        ]}
        onPress={() => changeDifficulty(DIFFICULTY.EASY)}
      >
        <Text style={styles.buttonText}>Facile</Text>
      </TouchableOpacity>
  
      <TouchableOpacity
        style={[
          styles.difficultyButton,
          { backgroundColor: difficulty === DIFFICULTY.HARD ? 'lemonchiffon' : '#e3e3e3' }
        ]}
        onPress={() => changeDifficulty(DIFFICULTY.HARD)}
      >
        <Text style={styles.buttonText}>Difficile</Text>
      </TouchableOpacity>
    </View>
  );

export default DifficultySelector;