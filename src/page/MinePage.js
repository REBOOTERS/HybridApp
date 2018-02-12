/**
 * Created by Rookie on 2017/8/22.
 */
import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from 'react-native';

let windowWidth = Dimensions.get('window').width;

export default class MinePage extends Component {
  _goUserCenter = () => {
    this.props.screenProps.appNavigation.navigate('UserCenter');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <Text style={styles.title}>我的</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground
            style={styles.userInfobg}
            source={require('../images/live_player_bg.jpg')}
          >
            <Image
              style={styles.avatar}
              source={{
                uri: 'http://pic.jia360.com/ueditor/jsp/upload/201609/27/17601474946123480.png'
              }}
            />
            <View style={{ flex: 1, marginRight: 10 }}>
              <Text style={{ color: 'white', fontSize: 22 }}>十万个冷笑话</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <Text style={{ color: 'white', fontSize: 14 }}>ID:Bad Jokers</Text>
                <TouchableOpacity onPress={this._goUserCenter}>
                  <Text style={{ color: 'white', fontSize: 18 }}>个人主页 ></Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  backgroundColor: 'white',
                  height: 1,
                  marginTop: 10,
                  marginBottom: 10
                }}
              />

              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontSize: 18 }}>关注 2</Text>
                <Text style={{ color: 'white', fontSize: 18, marginLeft: 10 }}>被关注 0 </Text>
              </View>
            </View>
          </ImageBackground>
          <Image
            style={{
              width: windowWidth,
              height: windowWidth * 1.02,
              marginTop: 10
            }}
            resizeMode={'contain'}
            source={require('../images/fake.jpg')}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
  toolbar: {
    height: 56,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  title: {
    fontSize: 16,
    color: 'black'
  },
  userInfobg: {
    flexDirection: 'row',
    height: 160,
    width: windowWidth,
    alignItems: 'center'
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
