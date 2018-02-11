/**
 * Created by Rookie on 2017/7/27.
 */

import React, {Component} from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';


let type;

export default class ToolBar extends Component {


    constructor(props) {
        super(props);
        type = this.props.type;
    }

    _back = () => {
        this.props.navigation.goBack();
    };

    _goSearch = () => {
        this.props.navigation.navigate('Search', {
            type: type,
        })
    }

    render() {
        let onTab = this.props.onTab;
        let type = this.props.type;

        return (
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#33BC61',
                height: 56,
                alignItems: 'center',
                justifyContent: 'center'
            }}>


                {onTab ? (<View style={{width: 30, height: 30, marginLeft: 10}}/>) : (
                    <TouchableOpacity onPress={this._back}>
                        <Image style={{width: 30, height: 30, marginLeft: 10}}
                               source={require('../images/ic_bar_back_white.png')}/>
                    </TouchableOpacity>)
                }


                <View style={{flex: 1}}/>
                <Text style={{color: 'white', fontSize: 25}}>
                    {this.props.title}
                </Text>
                <View style={{flex: 1}}/>

                <View style={{width: 30, height: 30, marginRight: 10}}/>


            </View>
        )
    }
}