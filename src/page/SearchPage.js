/**
 * Created by Rookie on 2017/7/21.
 */


import React, {Component} from 'react';

import {View, Text, Image, StyleSheet, ToastAndroid, ScrollView} from 'react-native';


export default class MovieDetailPage extends Component {


    constructor(props) {
        super(props);
    }


    render() {


        return (

            <View style={{flex: 1}}>
                <Text>
                    {this.props.navigation.state.params.type}
                </Text>
            </View>


        );


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});