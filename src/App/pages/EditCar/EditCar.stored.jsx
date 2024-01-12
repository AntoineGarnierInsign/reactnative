import {useDispatch, useSelector} from 'react-redux';
import UnconnectedEditCar from './EditCar';
import React from 'react';
import {editCarData, saveVehicle} from '../../store/uniqueVehicle';

const EditCar = props => {
  const dispatch = useDispatch();
  const car = useSelector(storeState => storeState.uniqueVehicle);
  return (
    <UnconnectedEditCar
      {...props}
      car={car}
      onCarChange={eCarData => dispatch(editCarData(eCarData))}
      onSaveCar={eCarData => dispatch(saveVehicle(eCarData))}
    />
  );
};

export default EditCar;
