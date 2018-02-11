/**
 * Created by Rookie on 2017/8/22.
 */
import React, {Component} from 'react';

import {
    View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity, ToastAndroid, Animated,

} from 'react-native';

import PopupDialog, {DialogButton, DialogTitle, SlideAnimation, FadeAnimation} from 'react-native-popup-dialog';
import ImagePicker from 'react-native-image-crop-picker';

let windowWidth = Dimensions.get('window').width;
let windowHeight = Dimensions.get('window').height;

export default class UserCenterPager extends Component {


    constructor(props) {
        super(props);


        this.state = {
            backgroundPhotoUri: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=264358067,1297679371&fm=26&gp=0.jpg',
            opacity: new Animated.Value(0),

        };
    }

    onPhotoResult = (data) => {
        this.setState({
            backgroundPhotoUri: data.path,
        });
    };


    _openCamera = () => {
        this.popupDialog.dismiss();
        this.props.navigation.navigate('Camera', {getPhotos: this.onPhotoResult});
    };

    _openCameraRoll = () => {
        this.popupDialog.dismiss();


        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(this.onPhotoResult)
            .catch((err) => {
                console.log(err);
            })
    };


    _onContentScroll = (e) => {
        // console.log(e.nativeEvent.contentOffset.y);

        let percent = Math.abs(e.nativeEvent.contentOffset.y) / 200;

        console.log(percent);

        if (percent >= 1.0) {
            percent = 1.0;
        }

        if (percent < 0) {
            percent = 0;
        }


        this.setState(
            {
                opacity: percent,
            }
        )


    };

    render() {

        return (
            <View style={styles.container}>


                <ScrollView
                    style={{height: windowHeight}} showsVerticalScrollIndicator={false}
                    onScroll={this._onContentScroll}
                >
                    <Image style={(styles.userInfobg)} source={{uri: this.state.backgroundPhotoUri}}>
                        <TouchableOpacity onPress={() => {
                            this.popupDialog.show();
                        }}>
                            <Image style={styles.avatar}
                                   source={{uri: 'http://pic.jia360.com/ueditor/jsp/upload/201609/27/17601474946123480.png'}}/>
                        </TouchableOpacity>
                    </Image>


                    <View style={{height: windowHeight * 3, width: windowWidth, backgroundColor: 'palegreen'}}>
                        <Text style={{color: 'white', fontSize: 53, margin: 20}}>
                            A
                        </Text>
                        <Text style={{color: 'white', fontSize: 53, margin: 20}}>
                            A
                        </Text>
                        <Text style={{color: 'white', fontSize: 53, margin: 20}}>
                            A
                        </Text>
                        <Text style={{color: 'white', fontSize: 53, margin: 20}}>
                            A
                        </Text>
                        <Text style={{color: 'white', fontSize: 53, margin: 20}}>
                            A
                        </Text>
                        <Text style={{color: 'white', fontSize: 53, margin: 20}}>
                            A
                        </Text>
                        <Text style={{color: 'white', fontSize: 53, margin: 20}}>
                            A
                        </Text>
                        <Text style={{color: 'white', fontSize: 53, margin: 20}}>
                            A
                        </Text>
                        <Text style={{color: 'white', fontSize: 53, margin: 20}}>
                            A
                        </Text>
                        <Text style={{color: 'white', fontSize: 53, margin: 20}}>
                            A
                        </Text>
                        <Text style={{color: 'white', fontSize: 53, margin: 20}}>
                            A
                        </Text>
                        <Text style={{color: 'white', fontSize: 53, margin: 20}}>
                            A
                        </Text>
                        <Text style={{color: 'white', fontSize: 53, margin: 20}}>
                            A
                        </Text>
                        <Text style={{color: 'white', fontSize: 53, margin: 20}}>
                            A
                        </Text>
                        <Text style={{color: 'white', fontSize: 53, margin: 20}}>
                            A
                        </Text>
                        <Text style={{color: 'white', fontSize: 53, margin: 20}}>
                            A
                        </Text>
                        <Text style={{color: 'white', fontSize: 53, margin: 20}}>
                            A
                        </Text>
                        <Text style={{color: 'white', fontSize: 53, margin: 20}}>
                            A
                        </Text>
                        <Text style={{color: 'white', fontSize: 53, margin: 20}}>
                            A
                        </Text>
                        <Text style={{color: 'white', fontSize: 53, margin: 20}}>
                            A
                        </Text>
                        <Text style={{color: 'white', fontSize: 53, margin: 20}}>
                            A
                        </Text>
                        <Text style={{color: 'white', fontSize: 53, margin: 20}}>
                            A
                        </Text>
                        <Text style={{color: 'white', fontSize: 53, margin: 20}}>
                            A
                        </Text>
                        <Text style={{color: 'white', fontSize: 53, margin: 20}}>
                            A
                        </Text>
                        <Text style={{color: 'white', fontSize: 53, margin: 20}}>
                            A
                        </Text>
                    </View>

                </ScrollView>

                <Animated.View style={{
                    backgroundColor: 'white',
                    height: 56,
                    opacity: this.state.opacity,
                    width: windowWidth,
                    alignItems: 'center',
                    position: 'absolute',
                    justifyContent: 'center'
                }}>
                    <Text style={{color: 'black', fontSize: 23, margin: 20}}>
                        A
                    </Text>

                </Animated.View>


                <PopupDialog
                    width={windowWidth * 0.8}
                    height={200}
                    dialogTitle={<DialogTitle title="Please Select "/>}
                    actions={[<DialogButton
                        textStyle={{color: 'red'}}
                        text="Cancel" align="center" onPress={() => {
                        this.popupDialog.dismiss()
                    }} key="button-1"/>]}
                    ref={(popupDialog) => {
                        this.popupDialog = popupDialog;
                    }}
                    dialogAnimation={new FadeAnimation({toValue: 1})}>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={this._openCamera}>
                            <Text style={{fontSize: 20, color: 'black', margin: 10}}>Camera</Text>
                        </TouchableOpacity>
                        <View style={{backgroundColor: 'black', height: 0.5, width: windowWidth * 0.8}}/>
                        <TouchableOpacity onPress={this._openCameraRoll}>
                            <Text style={{fontSize: 20, color: 'black', margin: 10}}>CameraRoll</Text>
                        </TouchableOpacity>
                    </View>

                </PopupDialog>
            </View>
        );
    }
}

const
    styles = StyleSheet.create({
        container: {
            flex: 1
        },
        userInfobg: {
            height: 250,
            alignItems: 'center',
            width: windowWidth,
            justifyContent: 'center'
        },
        avatar: {
            margin: 10,
            width: 80,
            height: 80,
            borderRadius: 40,
            borderWidth: 4,
            borderColor: 'white'
        }
    });