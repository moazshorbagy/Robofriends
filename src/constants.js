export class Action {

    constructor(type, payload) {
        this._type = type;
        this._payload = payload;
    }

    get type() {
        return this._type;
    }

    get payload() {
        return this._payload;
    }
}

export const Actions = {
    CHANGE_SEARCH_FIELD: 'CHANGE_SEARCH_FIELD'
};
