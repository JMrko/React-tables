import configureStore from './Store';

const initialState = {};
let store = null;

export default function obtenerStore() {
    if(store === null) {
        const result = configureStore({initialState});
        store = result.store;
    }
    return {store}
}