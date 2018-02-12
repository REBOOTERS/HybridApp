/**
 * Created by Rookie on 2017/7/20.
 */

import React, { Component } from 'react';

import { View, Text, Image, FlatList, TouchableOpacity, ImageBackground } from 'react-native';

class MovieBoard extends Component {
  render() {
    let { item } = this.props.item;

    return (
      <View style={{ backgroundColor: 'white' }}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            this.props.navigation.navigate('MovieDetail', {
              id: item.id
            });
          }}
        >
          <View style={{ backgroundColor: 'white', alignItems: 'center', margin: 10 }}>
            <Image
              resizeMode={'stretch'}
              style={{ width: 120, height: 180 }}
              source={{ uri: item.images.large }}
            />
            <Text
              numberOfLines={1}
              style={{
                width: 120,
                textAlign: 'left',
                color: 'black',
                fontWeight: 'bold',
                fontSize: 15,
                marginTop: 2
              }}
            >
              {item.title}
            </Text>
            <BottomTextComponent show={this.props.showRating} item={item} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

class MovieVideoBoard extends Component {
  render() {
    let { item } = this.props.item;

    return (
      <View style={{ backgroundColor: 'white' }}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            this.props.navigation.navigate('MovieVideoPlay', {
              item: item
            });
          }}
        >
          <View style={{ backgroundColor: 'white', alignItems: 'flex-start', margin: 10 }}>
            <ImageBackground
              resizeMode={'stretch'}
              style={{ width: 220, height: 180, alignItems: 'center', justifyContent: 'center' }}
              source={{ uri: item.cover_url }}
            >
              <Image
                style={{ height: 40, width: 40 }}
                source={require('../images/ic_ad_video_play.png')}
              />
            </ImageBackground>
            <Text
              numberOfLines={1}
              style={{
                width: 120,
                textAlign: 'left',
                color: 'gray',
                fontWeight: 'normal',
                fontSize: 12,
                marginTop: 2
              }}
            >
              {item.subject_title}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                width: 220,
                color: 'black',
                fontWeight: 'normal',
                fontSize: 14
              }}
            >
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

class SubjectsBoard extends Component {
  render() {
    let { item } = this.props.item;

    return (
      <View style={{ backgroundColor: 'white' }}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            this.props.navigation.navigate('SubjectDetail', {
              item: item
            });
          }}
        >
          <View style={{ backgroundColor: 'white', alignItems: 'center', margin: 10 }}>
            <ImageBackground
              resizeMode={'stretch'}
              style={{ width: 220, height: 120 }}
              source={{ uri: item.target.cover_url }}
            >
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 5,
                  position: 'absolute',
                  bottom: 5,
                  left: 5
                }}
              >
                <Text style={{ padding: 2, fontSize: 10, color: 'black' }}>{item.theme.name}</Text>
              </View>
            </ImageBackground>
            <View style={{ backgroundColor: item.background_color, height: 60, width: 220 }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  margin: 5,
                  fontWeight: 'bold'
                }}
              >
                {item.title}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

class BottomTextComponent extends Component {
  render() {
    if (this.props.show) {
      return (
        <View>
          <Text
            numberOfLines={1}
            style={{
              width: 120,
              textAlign: 'left',
              color: 'black',
              fontWeight: 'normal',
              fontSize: 15,
              marginTop: 2
            }}
          >
            {this.props.item.rating.average === 0 ? '暂无评分' : this.props.item.rating.average}
          </Text>
        </View>
      );
    } else {
      return (
        <View style={{ flexDirection: 'row', width: 120 }}>
          {this.props.item.genres.map(function(gener) {
            return <Text key={gener}>{gener} </Text>;
          })}
        </View>
      );
    }
  }
}

export default class HorizontalListView extends Component {
  constructor(props) {
    super(props);
    const type = this.props.type;

    this.state = {
      show: type === 'in_theaters'
    };
  }

  _renderItem = item => {
    switch (this.props.type) {
      case 'in_theaters':
        return <MovieBoard item={item} showRating={true} navigation={this.props.appNavigation} />;
      case 'coming_soon':
        return <MovieBoard item={item} showRating={false} navigation={this.props.appNavigation} />;
      case 'subjects':
        return <SubjectsBoard item={item} navigation={this.props.appNavigation} />;
      case 'recommend_trailers':
        return (
          <MovieVideoBoard item={item} showRating={false} navigation={this.props.appNavigation} />
        );
    }
  };

  _keyExtractor = item => item.id;

  render() {
    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={this._keyExtractor}
        data={this.props.subjects}
        renderItem={this._renderItem}
      />
    );
  }
}
