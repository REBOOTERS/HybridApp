/**
 * Created by Rookie on 2017/7/26.
 */

import React, {Component} from 'react';

import {
    View,
    Text
} from 'react-native'

export default class RatingCard extends Component{
    render(){
        return(
            <View style={{marginTop:10,marginRight:20,borderRadius:2,borderWidth:0.1,alignItems:'center'}}>
                <Text style={{marginTop:8,fontSize:10}}>豆瓣评分</Text>
                <Text style={{fontSize:30,fontWeight:'bold'}}>{this.props.average}</Text>
                <Text>{this.props.numRaters}人</Text>
            </View>
        )
    }
}