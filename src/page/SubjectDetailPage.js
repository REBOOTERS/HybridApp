/**
 * Created by Rookie on 2017/7/24.
 */


import React, {Component} from 'react';

import {View, WebView, StyleSheet, Text, ToastAndroid, TouchableOpacity, Image} from 'react-native';


class ToolBar extends Component {

    render() {
        return (<View style={{
            height: 56, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center',
            borderBottomWidth: 0.5, borderBottomColor: 'black'
        }}>
            <TouchableOpacity onPress={this.props.goBack}>
                <Image style={{width: 30, height: 30, marginLeft: 10, marginRight: 10}}
                       source={require('../images/back.png')}/>
            </TouchableOpacity>

            <Text style={{fontSize: 16}}>日记</Text>
        </View>)
    }
}


export default class SubjectDetailPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            canGoBack: false,
        }
    }

    _onNavigationStateChange = (event) => {
        this.setState({
            canGoBack: event.canGoBack,
        })
    };

    _back = () => {
        if (this.state.canGoBack) {
            this.refs.WebViews.goBack();
        } else {
            this.props.navigation.goBack();
        }
    };

    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <ToolBar goBack={this._back}/>
                <WebView
                    ref={'WebViews'}
                    onNavigationStateChange={(event) => this._onNavigationStateChange(event)}
                    startInLoadingState={true}
                    showsVerticalScrollIndicator={false}
                    source={{uri: this.props.navigation.state.params.item.target.url}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});