/**
 * Created by Rookie on 2017/7/20.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StatusBar,
    View,
} from 'react-native';


import AppNav from './nav/AppNav';


export default class App extends Component {

    constructor(props){
        super(props);
    }


    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar
                    backgroundColor={'#33BC61'}
                    translucent={false}
                />
                <AppNav screenProps={{navigation: this.props.navigation}}/>
            </View>
        );
    }
}
AppRegistry.registerComponent('Hybridapplication', () => App);