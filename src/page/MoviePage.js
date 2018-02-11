/**
 * Created by Rookie on 2017/7/20.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    ToastAndroid,
    Dimensions,
    ActivityIndicator
} from 'react-native';

import Api from '../util/Api';

const screenWidth = Dimensions.get('window').width;

import HorizontalListView from '../components/HorizontalListView';
import HorizontalCardView from '../components/HorizontalCardView';
import MainToolBar from "../components/MainToolBar";
import RefreshScrollView from '../components/RefreshScrollView';
import VerticalSpace from '../components/widgets/VerticalSapce';
import TitleView from '../components/widgets/TitleView';
import Loading from '../components/widgets/Loading';

let movie_modules = require('../localdata/movie_index.json');


let in_threaters_data = require('../localdata/in_theaters.json');
let coming_soon_data = require('../localdata/coming_soon.json');
let selected_collections_data = require('../localdata/selected_collections.json');


export default class MoviePage extends Component {


    constructor(props) {
        super(props);


        this.state = {
            url_in_theaters: 'https://api.douban.com/v2/movie/in_theaters',
            url_coming_soon: 'https://api.douban.com/v2/movie/coming_soon',
            subject_themes: [],
            recommend_trailers: [],
            in_theaters_subjects: [],
            coming_soon_subjects: [],
            selected_collections: [],
            done: false,
            isRefreshing: false,
        };

    }


    componentDidMount() {

        // Api.Get(this.state.url_in_theaters, null, this._success, this._error);
        // Api.Get(this.state.url_coming_soon, null, this.coming_soon_success, this._error);

        this._error();

    }


    _success = (resData) => {
        console.log('成功');
        console.log(resData.count);


        ToastAndroid.show("success==" + resData.subjects.length, ToastAndroid.SHORT);

        this.setState({
            in_theaters_subjects: resData.subjects,
            done: true,
        });


    };

    coming_soon_success = (resData) => {
        console.log('成功');
        console.log(resData.count);

        ToastAndroid.show("success-1==" + resData.subjects.length, ToastAndroid.SHORT);
        this.setState({
            coming_soon_subjects: resData.subjects,
            selected_collections: selected_collections_data.data.selected_collections,
        })
    };


    _error = (resData) => {

        console.log('失败');
        console.log(resData);

        ToastAndroid.show("load-cache", ToastAndroid.SHORT);


        this.setState({
            subject_themes: movie_modules.modules[0].data.items,
            recommend_trailers: movie_modules.modules[6].data.items,
            in_theaters_subjects: in_threaters_data.subjects,
            coming_soon_subjects: coming_soon_data.subjects,
            selected_collections: selected_collections_data.data.selected_collections,
            done: true,
            isRefreshing: false,
        })
    };


    _onRefreshData = () => {

        this.setState({isRefreshing: true, done: false});

        // Api.Get(this.state.url_in_theaters, null, this._success, this._error);
        // Api.Get(this.state.url_coming_soon, null, this.coming_soon_success, this._error);

        setTimeout(this._error, 1000);
    };

    render() {


        let appNavigation = this.props.screenProps.appNavigation;


        if (!this.state.done) {
            return (
                <Loading/>
            )
        } else {
            return (


                <View style={{flex: 1}}>


                    <MainToolBar
                        onTab={true}
                        title="Movie"
                        type="Movie"
                        navigation={appNavigation}
                    />

                    <RefreshScrollView
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefreshData}
                    >

                        <TitleView title="今日推荐" type="Now" appNavigation={appNavigation} needMore={false}/>
                        <HorizontalListView
                            subjects={this.state.subject_themes}
                            appNavigation={appNavigation}
                            type='subjects'/>
                        <VerticalSpace/>

                        <TitleView title="影院热映" type="Now" appNavigation={appNavigation} needMore={true}/>
                        <HorizontalListView
                            subjects={this.state.in_theaters_subjects}
                            appNavigation={appNavigation}
                            type='in_theaters'/>
                        <VerticalSpace/>

                        <TitleView title="即将上映" type="Future" appNavigation={appNavigation} needMore={true}/>
                        <HorizontalListView
                            subjects={this.state.coming_soon_subjects}
                            appNavigation={appNavigation}
                            type='coming_soon'
                        />
                        <VerticalSpace/>


                        <TitleView title="精选榜单" needMore={false}/>
                        <HorizontalCardView
                            subjects={this.state.selected_collections}
                            appNavigation={appNavigation}/>
                        <VerticalSpace/>

                        <TitleView title="热门预告片" type="Future" appNavigation={appNavigation} needMore={true}/>
                        <HorizontalListView
                            subjects={this.state.recommend_trailers}
                            appNavigation={appNavigation}
                            type='recommend_trailers'
                        />
                        <VerticalSpace/>

                    </RefreshScrollView>
                </View>
            );
        }


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    recommendHeader: {
        height: 35,
        justifyContent: 'center',
        // borderWidth: screen.onePixel,
        // borderColor: color.border,
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white'
    },
    searchBar: {
        width: screenWidth * 0.7,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    }

});
