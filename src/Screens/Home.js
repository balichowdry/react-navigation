import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home screen</Text>
                <Button
                    title="Go to Search"
                    onPress={() => this.props.navigation.navigate('Search')}
                />
            </View>
        );
    }
}

export default Home;
