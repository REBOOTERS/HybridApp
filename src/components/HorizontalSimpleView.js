/**
 * Created by Rookie on 2017/7/20.
 */

import React, {Component} from 'react';

import {
    View,
    Text,
    Image,
    FlatList,
    ToastAndroid,
    TouchableNativeFeedback,
} from 'react-native';



const default_avatar='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502705612736&di=8c0dcd505900aa1aa3b3' +
    'f2b955436f80&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201403%2F20%2F20140320222513_dZf23.jpeg';

class SeparateComponent extends Component {
    render() {
        return (
            <View style={{backgroundColor: 'white', width: 10}}>

            </View>
        )
    }
}



export default class HorizontalSimpleView extends Component {

    constructor(props) {
        super(props);
        const subjects = this.props.subjects;


        this.state = {
            subjects: subjects,
        }
    }


    _renderItem = ({item}) => (
        <View style={{backgroundColor: 'white'}}>

            <TouchableNativeFeedback onPress={() => {
                this.props.navigation.navigate('MovieCelebrity', {
                    id: item.id,
                    name: item.name,
                });
            }}>
                <View style={{backgroundColor: 'white', alignItems: 'center', margin: 10}}>
                    <Image resizeMode={'stretch'} style={{width: 120, height: 180}}
                           source={{uri: item.avatars!==null ? item.avatars.large:default_avatar}}/>
                    <Text
                        numberOfLines={1}
                        style={{
                            width: 120,
                            textAlign: 'center',
                            color: 'black',
                            fontWeight: 'normal',
                            fontSize: 15,
                            marginTop: 2
                        }}>{item.name}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View>

    )

    _keyExtractor = (item,index) => index;


    render() {


        return (
            <View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    keyExtractor={this._keyExtractor}
                    data={this.state.subjects}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={SeparateComponent}
                >

                </FlatList>
            </View>

        )
    }
}