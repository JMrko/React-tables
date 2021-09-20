import { combineReducers } from "redux";
import { tablaReducer } from "./Tabla/TablaReducer";

export const rootReducer = combineReducers({
    tabla: tablaReducer
})