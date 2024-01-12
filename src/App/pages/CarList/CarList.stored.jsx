import {useDispatch, useSelector} from 'react-redux';
import UnconnectedCarList from './CarList';
import React from 'react';
import {editCarData} from '../../store/uniqueVehicle';

const CarList = props => {
  const dispatch = useDispatch();
  const cars = useSelector(storeState => storeState.vehicles);
  return (
    <UnconnectedCarList
      {...props}
      cars={cars}
      addCarIsTap={addCar => dispatch(editCarData(addCar))}
    />
  );
};

export default CarList;
