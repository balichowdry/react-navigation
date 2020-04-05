// screens/Search.js

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class Search extends Component {
    render() {
        const { searchId } = this.props.route.params;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Search screen + {searchId} </Text>
                <Button
                    title="Go to Detail Screen"
                    onPress={() => this.props.navigation.navigate('SearchDetail')}
                />
            </View>

        );
    }
}

export default Search;
