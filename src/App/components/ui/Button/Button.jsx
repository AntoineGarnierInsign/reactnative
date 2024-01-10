import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import PropTypes from 'prop-types';
import style from './Button.style';

const Button = props => {
  console.log(props);

  return (
    <TouchableHighlight>
      <View style={{...style.Button, backgroundColor: props.bgColor}}>
        {props.children}
      </View>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  bgColor: PropTypes.oneOf(['red', 'yellow']),
  color: PropTypes.string,
};
Button.defaultProps = {
  bgColor: 'red',
  children: <Text>Button</Text>,
};
export default Button;
