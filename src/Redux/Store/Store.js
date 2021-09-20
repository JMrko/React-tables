import { createStore, compose, applyMiddleware } from 'redux'
import { rootReducer } from '../Reducers/RootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../Sagas/Sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()

export default function configureStore(){
  const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    ))
    sagaMiddleware.run(rootSaga)
    return {store}
} 


