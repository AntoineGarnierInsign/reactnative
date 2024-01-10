import React from 'react';
import {Image, Text, SafeAreaView, View} from 'react-native';
import Button from './components/ui/Button/Button';
import style from './App.style';

const App = props => {
  return (
    <SafeAreaView>
      <View>
        <Button bgColor="red" color="green">
          <View style={style.appButtonView}>
            <Image
              style={style.appButtonImage}
              source={require('./assets/ramyeon.png')}
            />
            <Text style={{...style.appButtonText, ...style.bold}}>Patate</Text>
          </View>
        </Button>
        <Button bgColor="blue" color="yellow" children={<Text>Hello</Text>} />
        <Button>
          <Image
            style={style.appButtonImage}
            source={require('./assets/ramyeon.png')}
          />
          <Text style={style.appButtonText}>Patate2</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default App;
