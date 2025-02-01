import { useState, useEffect, useCallback } from 'react';
import { rndNumber } from '../utils/number';
import { MAX_TIME } from '../utils/timer';

export const useGameLogic = () => {
  const [numberOne, setNumberOne] = useState(rndNumber());
  const [numberTwo, setNumberTwo] = useState(rndNumber());
  const [solution, setSolution] = useState();
  const [userAnswer, setUserAnswer] = useState(0);
  const [msg, setMsg] = useState('');
  const [timeLeft, setTimeLeft] = useState(MAX_TIME);
  const [btnEnabled, setBtnEnabled] = useState(true);
  const [score, setScore] = useState(0);

  const decreaseTime = () => {
    setTimeLeft((prevTime) => Math.max(prevTime - 1, 0));
  }
  useEffect(() => {
    setSolution(numberOne + numberTwo);
  }, [numberOne, numberTwo]);

  useEffect(() => {
    const timer = setInterval(decreaseTime, 1000); 
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      setBtnEnabled(false);
      setMsg('Temps écoulé, la bonne réponse était ' + solution);
    }
  }, [timeLeft]);

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

  return {
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
  };
};