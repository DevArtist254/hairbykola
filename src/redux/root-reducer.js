import {combineReducers} from "redux"
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"

import productReducer from "./products/products.reducer"

const config = {
 key: "root",
 storage,
 whitelist: ["auth", "products"],
}

const rootReducer = combineReducers({
 product: productReducer,
})

const persistedReducer = persistReducer(config, rootReducer)

export default persistedReducer
