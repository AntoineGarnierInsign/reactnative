import {TextInput, View, Switch, Button} from 'react-native';
import React, {useState} from 'react';
import style from './EditCar.style';

const EditCar = props => {
  const [current, setCurrent] = useState({});
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    props.onCarChange({present: isEnabled});
  };

  return (
    <View style={style.editCarView}>
      <View>
        <TextInput
          placeholder="Immatriculation"
          value={props.car.immat}
          onChangeText={str => props.onCarChange({immat: str})}
        />
        <TextInput
          placeholder="Marque"
          value={props.car.marque}
          onChangeText={str => props.onCarChange({marque: str})}
        />
        <TextInput
          placeholder="Modèle"
          value={props.car.model}
          onChangeText={str => props.onCarChange({model: str})}
        />
        <TextInput
          placeholder="Kms"
          value={props.car.kms.toString()}
          onChangeText={str => props.onCarChange({kms: parseInt(str, 10)})}
        />
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={props.car.present}
        />
      </View>
      <View>
        <Button title="Save" onPress={evt => props.onCarSave(props.car)} />
      </View>
    </View>
  );
};

export default EditCar;
