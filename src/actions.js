// Functions here returns an action

import { Actions } from './constants.js';

export const setSearchField = (text) => ({
    type: Actions.CHANGE_SEARCH_FIELD,
    payload: text
});