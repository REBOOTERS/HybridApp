/**
 * Created by Rookie on 2017/9/20.
 */

import React, {Component} from 'react';
import {View, Dimensions, Text,} from "react-native";

const screenWidth = Dimensions.get('window').width;

import MoreView from './MoreView';

export default class TitleView extends Component {


    render() {
        return (
            <View style={{backgroundColor: 'white', flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{flex: 1, fontSize: 20, color: 'black', margin: 10}}>
                    {this.props.title}
                </Text>
                {this.props.needMore ? (
                    <MoreView type={this.props.type} appNavigation={this.props.appNavigation}/>) : (<View/>)}
            </View>
        )
    }
}