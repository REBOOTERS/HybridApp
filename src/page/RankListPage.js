/**
 * Created by Rookie on 2017/7/25.
 */


import React, {Component} from 'react';

import {View, StyleSheet, Text, ToastAndroid} from 'react-native';

import VerticalListView from '../components/VerticalListView';

import Api from '../util/Api';
import ToolBar from "../components/ToolBar";
import Loading from "../components/widgets/Loading";


let data;

let subUrl = '';
export default class RankListPage extends Component {

    constructor(props) {
        super(props);

        let id = this.props.navigation.state.params.id;

        if (id === 'movie_top250') {
            subUrl = 'top250';
            data = require('../localdata/top250.json')
        } else if (id === 'movie_high_box_office') {
            data = require('../localdata/usbox.json');
            subUrl = 'us_box';
        } else {
            subUrl = 'top250';
        }

        this.state = {
            url: 'https://api.douban.com/v2/movie/' + subUrl,
            data: '',
            done: false,
            subjects: [],
        };

    }

    componentDidMount() {
        Api.Get(this.state.url, null, this._success, this._error)
    }


    _success = (resData) => {
        console.log('成功');
        console.log(resData);


        this.setState({
            data: resData,
            done: true,
            subjects: resData.subjects,

        })
    };


    _error = (resData) => {
        console.log('失败');
        console.log(resData);


        this.setState({
            subjects: data.subjects,
            done: true,
        })


    };


    render() {
        let navigation = this.props.navigation;
        if (!this.state.done) {
            return (<Loading/>)
        } else {
            return (
                <View style={{flex: 1, backgroundColor: 'white'}}>
                    <ToolBar
                        onTab={false}
                        title={this.props.navigation.state.params.name}
                        type="Movie"
                        navigation={navigation}
                    />

                    <VerticalListView
                        type={subUrl}
                        showIndex={true}
                        subjects={this.state.subjects}
                        navigation={navigation}/>
                </View>

            )
        }

    }
}
