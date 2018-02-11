/**
 * Created by Rookie on 2017/7/20.
 */

import React from 'react';

import {TabNavigator} from 'react-navigation';


import Movie from '../page/MoviePage';
import Music from '../page/MusicPage';
import Book from '../page/BookPage';
import User from '../page/MinePage';

const HomeNav = TabNavigator({
    Movie: {
        screen: Movie,
        navigationOptions: {
            tabBarLabel: '电影',
        },
    },
    Music: {
        screen: Music,
        navigationOptions: {
            tabBarLabel: '音乐',
        },
    },
    Book: {
        screen: Book,
        navigationOptions: {
            tabBarLabel: '读书'
        }
    },
    User: {
        screen: User,
        navigationOptions: {
            tabBarLabel: '我的'
        }
    }
}, {
    lazy: true,
    initialRouteName: 'Movie',
    tabBarPosition: 'bottom',//tabbar放在底部
    swipeEnabled: false,//不能滑动切换
    animationEnabled: false,//不要切换动画
    tabBarOptions: {
        indicatorStyle: {
            height: 0,
        },

        activeTintColor: '#33BC61',
        inactiveTintColor: 'black',
        style: {backgroundColor: 'white', borderTopColor: 'black', borderTopWidth: 0.15},
    },


});


export default HomeNav;

