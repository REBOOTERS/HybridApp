/**
 * Created by Rookie on 2017/9/20.
 */

import React, {Component} from 'react'
import {RefreshControl, ScrollView} from "react-native";


export default class RefreshScrollView extends Component {
    render() {
        return (
            <ScrollView
                style={{flex: 1}}
                showsVerticalScrollIndicator={false}

                refreshControl={
                    <RefreshControl
                        refreshing={this.props.refreshing}
                        onRefresh={this.props.onRefresh}
                        tintColor="#ff0000"
                        title="Loading..."
                        titleColor="#00ff00"
                        colors={['#ff0000', '#00ff00', '#0000ff']}
                        progressBackgroundColor="#ffffff"
                    />
                }
            >
                {this.props.children}
            </ScrollView>

        )
    }
}