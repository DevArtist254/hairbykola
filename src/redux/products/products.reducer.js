import productCollectionTypes from "./products.types"

const initialState = {}

const productReducer = (state = initialState, {type, payload}) => {
 switch (type) {
  case productCollectionTypes.START:
   return {...state, ...payload}

  default:
   return state
 }
}

export default productReducer
