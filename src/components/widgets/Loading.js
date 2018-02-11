/**
 * Created by Rookie on 2017/9/21.
 */

import React, {Component} from 'react';
import {View, ActivityIndicator,Dimensions} from 'react-native';

export default class Loading extends Component {
    render() {
        return (

            <View style={{
                flex: 1, alignItems: 'center',
                width:Dimensions.get('window').width,
                height:Dimensions.get('window').height,
                justifyContent: 'center'
            }}>
                <View style={{
                    flex: 1, backgroundColor: 'black', opacity: 0.4,width:Dimensions.get('window').width
                }}/>

                <View style={{
                    width: 100, height: 100, borderRadius: 10, backgroundColor: 'white',
                    alignItems: 'center', justifyContent: 'center',position:'absolute'
                }}>
                    <ActivityIndicator size={'large'} color={'#33BC61'}/>
                </View>
            </View>
        )
    }
}