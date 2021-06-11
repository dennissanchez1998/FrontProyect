




 const reducer = (state, action) => {
    switch(action.type){

        case "OBTENER_PUBLICACIONES":
            return {
                ...state,
                publicaciones: [...action.payload]
            }
        
            case "OBTENER_PUBLICACION":
                return {
                    ...state,
                    publicacion:action.payload
            }
            case "CREAR_PUBLICACION":
                return {
                    ...state,
                    creado :true
                }
    

        default:
            return state
    }
}


export default reducer;