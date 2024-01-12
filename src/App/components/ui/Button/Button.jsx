import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import PropTypes from 'prop-types';
import style from './Button.style';

const Button = props => {
  console.log(props);
  const assembleStyle = () => {
    const styleret = {...style.Button};
    if (props.bgColor) {
      styleret.backgroundColor = props.bgColor;
    }

    return styleret;
  };
  return (
    <TouchableHighlight>
      <View style={assembleStyle()}>{props.children}</View>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  bgColor: PropTypes.oneOf(['red', 'yellow', 'blue', 'green']),
  color: PropTypes.string,
};
Button.defaultProps = {
  children: <Text>Button</Text>,
};
export default Button;
