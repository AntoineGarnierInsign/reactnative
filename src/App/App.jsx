import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import CarList from './pages/CarList/CarList.stored';
import {store} from './store/store';
import {Provider} from 'react-redux';
import EditCar from './pages/EditCar/EditCar.stored';
import Home from './components/ui/Home/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = props => {
  console.log(store);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={{headerShown: false}}
            component={Home}
          />
          <Stack.Screen name="List" component={CarList} />
          <Stack.Screen name="Edit" component={EditCar} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
