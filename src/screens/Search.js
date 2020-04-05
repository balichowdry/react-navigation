// screens/Search.js

import React from 'react';
import {Button, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';

export default function SearchDetail() {
  const navigation = useNavigation();
  const navigateToSearhDetail = () => {
    navigation.navigate('SearchDetail');
    navigation.push('SearchDetail');
  };
  const {searchId} = this.props.route.params || 'Default';

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Search screen + {searchId} </Text>
      <Button
        title="Go to Detail Screen"
        onPress={() => navigateToSearhDetail()}
      />
    </View>
  );
}
