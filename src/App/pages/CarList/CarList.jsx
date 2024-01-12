import {
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Vibration,
  ToastAndroid,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Vehicle from '../../components/ui/Vehicle/Vehicle';

const CarList = props => {
  const [textFilter, setTextFilter] = useState('');
  return (
    <View>
      <View>
        <TextInput
          placeholder="Filtrer"
          value={textFilter}
          onChangeText={str => setTextFilter(str)}
        />
      </View>
      <View>
        <ScrollView>
          {props.cars
            .filter(
              e =>
                e.immat.toLowerCase().includes(textFilter.toLowerCase()) ||
                e.model.toLowerCase().includes(textFilter.toLowerCase()) ||
                e.marque.toLowerCase().includes(textFilter.toLowerCase()),
            )
            .map((auto, index) => (
              <TouchableHighlight
                key={index}
                onPress={e => {
                  Vibration.vibrate(2000);
                  ToastAndroid.show(
                    `${auto.immat} is added`,
                    ToastAndroid.LONG,
                  );
                  props.addCarIsTap(auto);
                }}>
                <Vehicle
                  immat={auto.immat}
                  marque={auto.marque}
                  model={auto.model}
                  present={auto.present}
                  kms={auto.kms}
                />
              </TouchableHighlight>
            ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default CarList;

CarList.propTypes = {
  cars: PropTypes.array.isRequired,
  addCarIsTap: PropTypes.func,
};

const styles = StyleSheet.create({});
