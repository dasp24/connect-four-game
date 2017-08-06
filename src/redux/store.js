import {
    createStore
} from 'redux';

import {reducer} from './reducer';
import {ADD_DISK, CHANGE_PLAYER, CHECK_WINNER} from './actions';

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

export default createStore(reducer);