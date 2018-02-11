/**
 * Created by Rookie on 2017/7/20.
 */

import React, {Component} from 'react';

import {
    View,
    StyleSheet,
    Button,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';


export default class IndexPage extends Component {

    constructor(props) {
        super(props);
    }

    goHome = () => {
        const {navigate} = this.props.navigation;
        navigate('Home')
    };


    render() {
        return (
            <View style={styles.index}>
                <Image source={require('../images/index_bg.jpg')}/>

                <TouchableOpacity style={styles.mybutton} onPress={this.goHome}>
                    <Text style={styles.text} numberOfLines={1}>Go</Text>
                </TouchableOpacity>

            </View>
        );
    }


}


const styles = StyleSheet.create({
    index: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    mybutton: {
        width: 80,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 200,
    },
    text: {
        textAlign: 'center',
        padding: 10,
    }
});
