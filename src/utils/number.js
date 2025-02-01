export const EASY_MAX_NUMBER = 50;
export const HARD_MAX_NUMBER = 100;

export const DIFFICULTY = {
    EASY: 'easy',
    HARD: 'hard'
};

export const rndNumber = (difficulty = DIFFICULTY.EASY) => { // easy par défaut
    const maxNumber = difficulty === DIFFICULTY.HARD ? HARD_MAX_NUMBER : EASY_MAX_NUMBER;
    return Math.floor(Math.random() * maxNumber);
};