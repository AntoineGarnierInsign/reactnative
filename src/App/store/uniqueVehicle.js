import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ToastAndroid} from 'react-native';

const initialState = {
  marque: 'hghtgrf',
  kms: 1234,
  model: 'jghffxghnfg',
  immat: 'gjhf',
  present: true,
};

const uniqueVehicle = createSlice({
  name: 'uniqueVehicle',
  initialState,
  reducers: {
    editCarData: (state, action) => {
      delete state.id;
      Object.assign(state, action.payload);
    },
    clearData: state => {
      delete state.id;
      Object.assign(state, initialState);
    },
  },
  extraReducers: builder => {
    builder.addCase(saveVehicle.fulfilled, (state, action) => {
      Object.assign(state.action.payload);
      ToastAndroid.show('saved: ' + JSON.stringify(action), ToastAndroid.SHORT);
    });
  },
});

export const {editCarData, clearData} = uniqueVehicle.actions;
const uniqueVehicleReducer = uniqueVehicle.reducer;
export default uniqueVehicleReducer;

export const saveVehicle = createAsyncThunk(
  'uniqueVehicle/onCarSave',
  async data => {
    const pr = await fetch(
      `https://formationReactNative-66743d-expose.insign.agency/cars${
        undefined !== data.id ? '/' + data.id : '/'
      })`,
      {
        method: undefined !== data.id ? 'PUT' : 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data),
      },
    );

    return await pr.json();
  },
);
