import {combineReducers, configureStore} from '@reduxjs/toolkit';

import vehicleReducer, {addCar, fetchInitialVehicle} from './vehicle';
import uniqueVehicleReducer from './uniqueVehicle';
//export const store = configureStore({reducer: vehicleReducer});

const middlewares = [
  /* other middlewares */
];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export const store = configureStore({
  reducer: combineReducers({
    vehicles: vehicleReducer,
    uniqueVehicle: uniqueVehicleReducer,
  }),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
});
store.subscribe(() => console.log('sub', store.getState().uniqueVehicle));
//store.dispatch(addCar({id: 0, marque: 'Renault', model: 'test'}));
store.dispatch(fetchInitialVehicle());
