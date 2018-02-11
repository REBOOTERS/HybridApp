/**
 * Created by Rookie on 2017/7/20.
 */

import React, {Component} from 'react';

import {
    StyleSheet,
} from 'react-native';

import HomeNav from '../nav/HomeNav';


export default class HomePage extends Component {
    render() {
        return (
            <HomeNav style={styles.index}
                     screenProps={{appNavigation: this.props.navigation,}}/>
        );
    }
}


const styles = StyleSheet.create({
    index: {
        flex: 1,
    }
});
