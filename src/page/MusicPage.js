/**
 * Created by Rookie on 2017/7/20.
 */


import React, {Component} from 'react';

import {View, Text, Image, StyleSheet, ToastAndroid, ScrollView, ActivityIndicator} from 'react-native';

import Api from '../util/Api';

import RatingCard from '../components/RatingCard';
import MainToolBar from "../components/MainToolBar";
import Loading from "../components/widgets/Loading";

let data = require('../localdata/music.json');

export default class MusicPage extends Component {

    constructor(props) {
        super(props);


        this.state = {
            url: 'https://api.douban.com/v2/music/10000037',
            data: '',
            done: false,
        };

    }

    componentDidMount() {
        // Api.Get(this.state.url, null, this._success, this._error)

        this._error();
    }


    _success = (resData) => {
        console.log('成功');
        console.log(resData.count);


        let temps = [];


        this.setState({
            data: resData,
            done: true,
            subjects: temps,


        })
    };


    _error = (resData) => {
        console.log('失败');
        console.log(resData);

        ToastAndroid.show("请求数据失败", ToastAndroid.SHORT);


        let temps = [];


        this.setState({
            data: data,
            done: true,
            subjects: temps,


        })


    }


    render() {

        let appNavigation = this.props.screenProps.appNavigation;

        if (!this.state.done) {
            return (
                <Loading/>
            )
        } else {

            return (
                <View style={{flex:1}}>
                    <MainToolBar
                        onTab={true}
                        title="Music"
                        type="Music"
                        navigation={appNavigation}
                    />
                    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                        <View
                            style={{
                                height: 300,
                                backgroundColor: '#33BC61',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <Image style={{height: 260, width: 200}} source={{uri: this.state.data.image}}/>
                        </View>
                        <View style={{backgroundColor: 'white'}}>
                            {/*信息*/}
                            <View style={{margin: 10, flexDirection: 'row'}}>
                                <View style={{flex: 3}}>
                                    <Text style={{
                                        textAlign: 'left',
                                        color: 'black',
                                        fontWeight: 'normal',
                                        fontSize: 18,
                                        marginTop: 2
                                    }}>{this.state.data.title}</Text>

                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={{marginTop: 5}}>表演者：</Text>
                                        {this.state.data.author.map(function (author) {
                                            return <Text style={{marginTop: 5}} key={author.name}>{author.name} </Text>
                                        })}
                                    </View>

                                </View>
                                <View style={{flex: 1}}>
                                    <RatingCard
                                        average={this.state.data.rating.average}
                                        numRaters={this.state.data.rating.numRaters}
                                    />
                                </View>
                            </View>
                            {/*summary*/}
                            <Text style={{
                                textAlign: 'left',
                                fontWeight: 'normal',
                                fontSize: 12,
                                marginLeft: 10
                            }}>简介</Text>
                            <Text
                                numberOfLines={10}
                                style={{
                                    textAlign: 'left',
                                    color: 'black',
                                    fontWeight: 'normal',
                                    fontSize: 15,
                                    margin: 10
                                }}>{this.state.data.summary}</Text>


                        </View>

                    </ScrollView>
                </View>



            );

        }

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});