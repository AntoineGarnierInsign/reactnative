import React from 'react';
import {Image, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './Vehicle.style';

const Vehicle = props => {
  return (
    <View style={style.vehicleView}>
      <View>
        <Image
          style={style.vehicleImage}
          source={require('../../../assets/ramyeon.png')}
        />
      </View>
      <View>
        <Text style={style.bold}>{props.immat}</Text>
        <Text>{props.marque}</Text>
        <Text>{props.model}</Text>
        <Text>{props.kms}</Text>
        <Text>{props.present === true ? 'Disponible' : 'Indisponible'}</Text>
      </View>
    </View>
  );
};

Vehicle.propTypes = {
  immat: PropTypes.string.isRequired,
  marque: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  present: PropTypes.bool.isRequired,
  kms: PropTypes.number.isRequired,
};

export default Vehicle;
