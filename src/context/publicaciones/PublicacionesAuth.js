// 1. IMPORTACIONES
import React, {
    useReducer
} from 'react';

import axios from 'axios';
import clienteAxios from './../../config/axios';
import tokenAuth from './../../config/token';

import PublicacionesContext from './PublicacionesContext';
import PublicacionesReducer from './PublicacionesReducer';



// 2. FUNCIONES PRINCIPAL
const PublicacionesState = (props) => {

      // A. ESTADO INICIAL
      const initialState = {
        mensaje: null,
        autenticado: false,
        usuario: {
            nombre:''
        }
    }


}


// 3. EXPORTACIÓN
export default PublicacionesState
