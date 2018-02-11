/**
 * Created by Rookie on 2017/8/7.
 */
'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Camera from 'react-native-camera';

export default class CameraPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                    <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
                </Camera>
            </View>
        );
    }

    takePicture() {
        const options = {};
        //options.location = ...
        this.camera.capture({metadata: options})
            .then((data) => {
                if (this.props.navigation.state.params.getPhotos) {
                    this.props.navigation.state.params.getPhotos(data);
                }
                this.props.navigation.goBack();
            })
            .catch((err) => {
                console.error(err);
                this.props.navigation.goBack();
            });


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});