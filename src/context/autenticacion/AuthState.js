// 1. IMPORTACIONES
import React, { useReducer } from 'react'



import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'

// 2. FUNCIONES PRINCIPAL
const AuthState = (props) => {

    // A. ESTADO INICIAL
    const initialState = {
        mensaje: null,
        autenticado: null,
        usuario: null
    }

    // B. CONFIGURACIÓN DEL REDUCER
    const [state, dispatch] = useReducer(AuthReducer, initialState)

    // C. FUNCIONES DE MANEJO DE ESTADO
    const registrarUsuario = async (datos) => {

        // VAMOS A EJECUTAR UN PROCESO ASÍNCRONO

        console.log(datos);
    /*     try {
            // EJECUTAMOS UN MÉTODO POST DE CREACIÓN DE USUARIO EN EL BACKEND
            const respuesta = await axios.post("http://localhost:4000/api/usuarios", datos)

            console.log(respuesta)

            // UNA VEZ QUE OBTENGO LA RESPUESTA, LO PASO A LOS REDUCERS
            dispatch({
                type: "REGISTRO_EXITOSO",
                payload: respuesta.data
            })

        } catch(e){
            console.log(e)
        } */
    }
    


    // D. RETORNO
    return (
        <AuthContext.Provider
            value={{
                mensaje: state.mensaje,
                autenticado: state.autenticado,
                usuario: state.usuario,
                registrarUsuario,
            }}
        >
            {props.children}
        </AuthContext.Provider> 
    )
}

// 3. EXPORTACIÓN
export default AuthState