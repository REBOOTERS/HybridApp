/**
 * Created by Rookie on 2017/7/20.
 */


import React from 'react';
import {StackNavigator} from 'react-navigation';


import IndexPage from '../page/IndexPage';
import HomePage from '../page/HomePage';
import MovieDetailPage from '../page/MovieDetailPage';
import MovieCelebrityPage from '../page/MovieCelebrityPage';
import MovieListPage from '../page/MovieListPage';
import RankListPage from '../page/RankListPage';
import SearchPage from '../page/SearchPage';
import CameraPage from '../page/CameraPage';
import UserCenterPage from '../page/UserCenterPager';
import SubjectDetailPage from '../page/SubjectDetailPage';
import MovieVideoPlayPage from '../page/MovieVideoPlayPage'

const AppNav = StackNavigator({
        Index: {
            screen: IndexPage,
        },
        Home: {
            screen: HomePage,
        },
        MovieDetail: {
            screen: MovieDetailPage,
        },
        MovieCelebrity: {
            screen: MovieCelebrityPage,
        },
        MovieList: {
            screen: MovieListPage,
        },
        RankList: {
            screen: RankListPage,
        },
        Search: {
            screen: SearchPage,
        },
        Camera: {
            screen: CameraPage,
        },
        UserCenter: {
            screen: UserCenterPage,
        },
        SubjectDetail: {
            screen: SubjectDetailPage,
        },
        MovieVideoPlay: {
            screen: MovieVideoPlayPage,
        }
    },
    {
        initialRouteName: 'Home', // 默认显示界面
        navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
            header: null,
            cardStack: {
                gesturesEnabled: true
            }
        }
        ,
        mode: 'push',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
        headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
        // onTransitionStart: () => {
        //     console.log('导航栏切换开始');
        // },  // 回调
        // onTransitionEnd: () => {
        //     console.log('导航栏切换结束');
        // }  // 回调

    });

export default AppNav;