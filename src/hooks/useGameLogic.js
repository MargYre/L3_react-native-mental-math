import { useState, useEffect, useCallback } from 'react';
import { rndNumber, DIFFICULTY } from '../utils/number';
import { getMaxTime } from '../utils/timer';

export const useGameLogic = () => {
  const [difficulty, setDifficulty] = useState(DIFFICULTY.EASY);
  const [numberOne, setNumberOne] = useState(rndNumber(difficulty));
  const [numberTwo, setNumberTwo] = useState(rndNumber(difficulty));
  //
  const [numberThree, setNumberThree] = useState(rndNumber(difficulty));
  const [solution, setSolution] = useState();
  const [userAnswer, setUserAnswer] = useState(0);
  const [msg, setMsg] = useState('');
  //const [timeLeft, setTimeLeft] = useState(MAX_TIME);
  const [timeLeft, setTimeLeft] = useState(getMaxTime(difficulty));
  const [btnEnabled, setBtnEnabled] = useState(true);
  const [score, setScore] = useState(0);

  const decreaseTime = () => {
    setTimeLeft((prevTime) => Math.max(prevTime - 1, 0));
  }
  //
  useEffect(() => {
    if (difficulty === DIFFICULTY.HARD) {
      setSolution(numberOne + numberTwo + numberThree);
    } else {
      setSolution(numberOne + numberTwo);
    }
  }, [numberOne, numberTwo, numberThree, difficulty]);

  useEffect(() => {
    const timer = setInterval(decreaseTime, 1000); 
    return () => clearInterval(timer);
  }, [difficulty]);

  useEffect(() => {
    if (timeLeft === 0) {
      setBtnEnabled(false);
      setMsg('Temps écoulé, la bonne réponse était ' + solution);
    }
  }, [timeLeft, solution]);

  const resetGame = () => {
    setNumberOne(rndNumber(difficulty));
    setNumberTwo(rndNumber(difficulty));
    if (difficulty === DIFFICULTY.HARD) {
      setNumberThree(rndNumber());
    }
    setTimeLeft(getMaxTime(difficulty));
    setUserAnswer(0);
    setMsg('');
    setBtnEnabled(true);
  }

  const resetScore = () => {
    setScore(0);
  }

  const changeDifficulty = (newDifficulty) => {
    setDifficulty(newDifficulty);
    resetGame();
    resetScore();
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

  return {
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
  };
};