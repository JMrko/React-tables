import {OBTENER_DATOS_TABLA} from '../../../Constantes/Tabla/DatosTabla'

let controller = new AbortController()
let signal = controller.signal

export const iniciarObtenerDatos = (payload) =>({
    type: OBTENER_DATOS_TABLA,
    ...payload
})

export const peticionFetch = async(url='',data={})=>{
    if (controller.signal.aborted) {
        controller = new AbortController()
        signal = controller.signal
    }
    const response = await fetch(url,{
        method: 'POST',
        signal: signal,
        headers:{
            'Content-Type': 'application/json',
            'api-token':'HJ0t4xbw7zmQdZnpAyhffbMORIn8RpD9cUyRihQmXejkIOgmym6fuDOyWag0',
            'api_token':'HJ0t4xbw7zmQdZnpAyhffbMORIn8RpD9cUyRihQmXejkIOgmym6fuDOyWag0',
        },
        body: JSON.stringify(data)
    })
   return response.json();
}

export function cancelarPeticionFetch() {
    controller.abort();
  }
 