import React from "react";
import { TouchableHighlight, View } from "react-native";

const Button = props => {
    console.log(props);
    
    return (
        <TouchableHighlight>
            <View>
                <Text>Benjamin</Text>
            </View>
        </TouchableHighlight>
    );
};

export default Button;