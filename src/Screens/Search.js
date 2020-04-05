// screens/Search.js

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class Search extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Search screen</Text>
                <Button
                    title="Go to Detail Screen"
                    onPress={() => this.props.navigation.navigate('SearchDetail')}
                />
            </View>

        );
    }
}

export default Search;
