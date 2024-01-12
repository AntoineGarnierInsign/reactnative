import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {saveVehicle} from './uniqueVehicle';

const initialState = [];

const vehicle = createSlice({
  name: 'vehicle',
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.push(action.payload);
    },
    addCars: (state, action) => {
      state.push(...action.payload);
    },
    editCarData: (state, action) => {
      Object.assign(
        state.find(v => v.id === action.payload.id),
        action.payload,
      );
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchInitialVehicle.fulfilled, (state, action) => {
      console.log(action);
      state.push(...action.payload);
    });
    builder.addCase(fetchInitialVehicle.rejected, (state, action) => {
      console.log('rejected');
    });
    builder.addCase(saveVehicle.fulfilled, (state, action) => {
      const position = state.find(v => v.id === action.payload.id);

      if (position >= 0) {
        state.push(action.payload);
      } else {
        action[position] = action.payload;
      }
    });
  },
});

export const {addCar, addCars, editCarData} = vehicle.actions;
const vehicleReducer = vehicle.reducer;
export default vehicleReducer;

export const fetchInitialVehicle = createAsyncThunk(
  'vehicle/fetchCars',
  async () => {
    const pr = await fetch(
      'https://formationReactNative-66743d-expose.insign.agency/cars',
    );

    return await pr.json();
  },
);
