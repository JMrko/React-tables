import { call, put } from 'redux-saga/effects'
import { CARGANDO_DATOS_TABLA, CARGA_FALLIDA_DATOS_TABLA } from '../../Constantes/Tabla/DatosTabla'
import { peticionFetch } from '../Actions/Tabla/AccionesTabla'



export default function* obtenerDatosTabla() {
    try {
        const {datos} = yield call(peticionFetch, 'https://pre-back.leadsmartview.com/mostrar/controlArchivos')
        yield put({ type: CARGANDO_DATOS_TABLA, datos })
    } catch (e) {
        yield put({ type:  CARGA_FALLIDA_DATOS_TABLA})
    }
}