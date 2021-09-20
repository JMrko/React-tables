import {takeLatest} from 'redux-saga/effects'
import { OBTENER_DATOS_TABLA } from '../../Constantes/Tabla/DatosTabla'
import obtenerDatosTabla from './TablaSaga'



export default function* rootSaga(){
    yield takeLatest(OBTENER_DATOS_TABLA, obtenerDatosTabla)
}