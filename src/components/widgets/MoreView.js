/**
 * Created by Rookie on 2017/8/3.
 */

import React, {Component} from 'react';
import {Text, TouchableOpacity,} from "react-native";


export default class MoreView extends Component {


    render() {
        return (
            <TouchableOpacity onPress={() => {
                this.props.appNavigation.navigate('MovieList', {
                    type: this.props.type,
                });
            }}>

                <Text style={{flex: 1, textAlign: 'right', fontSize: 15, color: 'green', margin: 10}}>
                    更多>
                </Text>

            </TouchableOpacity>

        )
    }
}