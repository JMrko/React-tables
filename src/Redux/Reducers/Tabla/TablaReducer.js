import {CARGANDO_DATOS_TABLA,OBTENER_DATOS_TABLA,CARGA_FALLIDA_DATOS_TABLA} from '../../../Constantes/Tabla/DatosTabla'

const initialState = {
    dataList:[],
    isLoading: false
}

export const tablaReducer = (state = initialState, action) =>{
    switch(action.type){
        case OBTENER_DATOS_TABLA:
            return {
                ...state, isLoading: true
            }
        case CARGA_FALLIDA_DATOS_TABLA:
            return {
                ...state, isLoading: false
            }
        case CARGANDO_DATOS_TABLA:
            return {
                ...state, isLoading: false, dataList: action.datos
            }
        default:
            return state;
    }
}