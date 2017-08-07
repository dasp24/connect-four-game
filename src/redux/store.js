import {
    createStore
} from 'redux';

import {reducer} from './reducer';
import {ADD_DISK, CHANGE_PLAYER, CHECK_WINNER, RESET_GAME} from './actions';

export const addDisk = (column) => {
    return {
        type: ADD_DISK,
        column: column
    };
};

export const changePlayer = () => {
    return {
        type: CHANGE_PLAYER
    };
};

export const checkWinner = () => {
    return {
        type: CHECK_WINNER
    };
};

export const resetGame = () => {
    return {
        type: RESET_GAME
    };
};

export default createStore(reducer);