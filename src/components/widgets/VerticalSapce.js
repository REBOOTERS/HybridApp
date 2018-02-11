/**
 * Created by Rookie on 2017/9/20.
 */

import React, {Component} from 'react';
import {View,Dimensions,} from "react-native";

const screenWidth = Dimensions.get('window').width;

export default class VerticalSpace extends Component {
    render() {
        return (<View style={{backgroundColor: 'snow', height: 10, width: screenWidth}}/>)
    }
}