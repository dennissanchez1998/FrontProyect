export default (state, action) => {
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
    

        default:
            return state
    }
}