import {
    CHANGE_THEME
} from '../types';

export default (state, action) => {
    if (action.type === CHANGE_THEME) {
        localStorage.setItem('theme',(!state.darkMode).toString());
        return {
            ...state,
            darkMode: !state.darkMode
        };
    } else {
        return state;
    }
};