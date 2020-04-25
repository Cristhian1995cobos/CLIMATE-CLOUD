import { applyMiddleware, compose, createStore} from 'redux';

  

import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from 'react-native'


import {} from 'react-redux';
import thunk from 'redux-thunk'
import { logger } from 'redux-logger';
import {userReducer} from './reducers';
import {actions} from './actions';


const initialState = {
    currentUser: {},
    users: {},
    status: false,
    host: 'ioticos.org',
    username: 'rJ6XFUSwA6ypIHM',
    password: 'aTuDefz29HIVrlr',
    roottopic: 'm4xvQf1qekvtaCH',
};


const persistConfig = {
    key: "root",    
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, userReducer)


const store = createStore(
    //userReducer ,
   // initialState,
    
    persistedReducer,
  //  compose(applyMiddleware(thunk, logger)),
)
let persistor = persistStore(store);

export {store, actions,persistor};



