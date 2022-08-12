import { createStore } from "redux"
import RootReducer from "./reducers/index"

const store = createStore(RootReducer)

export default store

