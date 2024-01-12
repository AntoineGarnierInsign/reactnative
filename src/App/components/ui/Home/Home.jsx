import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Home = props => {
  console.log(props);
  const nav = useNavigation();

  return (
    <View>
      <Button
        title="List"
        onPress={e => {
          nav.navigate('List');
        }}
      />
      <Button title="Add" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
