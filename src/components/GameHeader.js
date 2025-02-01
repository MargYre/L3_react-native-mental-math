import { Text } from 'react-native';
import { formatTime } from '../utils/timer';
import React from 'react';
import { styles } from '../../styles'


const GameHeader = ({ timeLeft, score }) => (
  <>
    <Text style={styles.timer}>{formatTime(timeLeft)}</Text>
    <Text style={styles.text}>Score : {score}</Text>
  </>
);

export default GameHeader;