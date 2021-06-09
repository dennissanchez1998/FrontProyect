// 1. IMPORTACIONES
import React, {
    useReducer
} from 'react';

import axios from 'axios';
import clienteAxios from './../../config/axios';
import tokenAuth from './../../config/token';

import PublicacionesContext from './PublicacionesContext';
import PublicacionesReducer from './PublicacionesReducer';