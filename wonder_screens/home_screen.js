/**
 * Created by Burn's hand on 5/4/2018.
 */

import React, {Component} from 'react';
import {View, ImageBackground, StyleSheet, Text, Button} from 'react-native';

export default class home_screen extends Component {
    static navigationOptions = {
        title: 'Wonders Home',
        header: null
    };

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground source={require('../src/assets/background.jpg')} style={style.container}>
                <View style={style.viewcontainer}>
                    <Text style={style.titleText}>{'seven wonders of world'.toUpperCase()}</Text>
                    <Button
                        title="Go"
                        onPress={
                            () => navigate("Menu", {})
                        }
                        Buttonstyle={style.goButton}
                    />
                </View>
            </ImageBackground>
        );
    }
}

const style = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        titleText: {
            fontSize: 30,
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#FFFFFF'
        },
        viewcontainer: {
            flex: 1,
            padding: 30,
            justifyContent: 'center',
            alignItems: 'center'
        },
        goButton: {
            color: '#000000'
        }
    }
);