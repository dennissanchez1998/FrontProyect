// 1. IMPORTACIONES
import React, {
    useReducer
} from 'react';




import clienteAxios from '../../config/axios';


import PublicacionesContext from './PublicacionesContext';
import PublicacionesReducer from './PublicacionesReducer';



// 2. FUNCIONES PRINCIPAL
const PublicacionesState = (props) => {


    // A. ESTADO INICIAL
    const initialState = {
        publicaciones: [],
        publicacion: '',
        creado: false
    }

    // B. CONFIGURACIÓN DEL REDUCER
    const [state, dispatch] = useReducer(PublicacionesReducer, initialState);


    // C. FUNCIONES PROPIAS

    const obtenerPublicaciones = async () => {
        try {

            const resultado = await clienteAxios.get('/publicaciones')
            console.log("El resultado es:", resultado)
            dispatch({
                type: "OBTENER_PUBLICACIONES",
                payload: resultado.data.publicaciones
            })

        } catch (e) {
            dispatch({
                type: "OBTENER_PUBLICACIONES",
                payload: [e]
            })


        }


    }


    const obtenerPublicacion = async (params) => {


        console.log(params);

        try {

            const resultado = await clienteAxios.get(`/publicaciones/${params}`)
            console.log("El resultado es:", resultado)
            dispatch({
                type: "OBTENER_PUBLICACION",
                payload: resultado.data.publicacion
            })

        } catch (e) {
            dispatch({
                type: "OBTENER_PUBLICACION",
                payload: [e]
            })


        }


    }

    const crearPublicacion = async (value) => {

        console.log(value);

        try {

            const resultado = await clienteAxios.post('/publicaciones/crear', value)
            console.log(resultado);
            console.log("llega aqui");
            dispatch({
                type: "CREAR_PUBLICACION",
                payload: resultado.data
            })


        } catch (error) {

        }


    }




    // D. RETORNO

    return (

        <
        PublicacionesContext.Provider value = {
            {
                publicaciones: state.publicaciones,
                    publicacion: state.publicacion,
                creado:state.creado,
                obtenerPublicaciones,
                obtenerPublicacion,
                crearPublicacion

            }
        } >
        {
            props.children
        } <
        /PublicacionesContext.Provider>

    )

}


// 3. EXPORTACIÓN
export default PublicacionesState