import React from 'react';
import {Button, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';

export default function Home() {
  const navigation = useNavigation();
  const navigateToSearh = () => {
    navigation.navigate('Search');
    navigation.push('Search', {searchId: '123'});
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home screen</Text>
      <Button title="Go to Search" onPress={() => navigateToSearh()} />
    </View>
  );
}
