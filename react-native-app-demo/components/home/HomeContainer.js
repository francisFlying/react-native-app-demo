/**
 * Created by liulongbin on 2017/4/28.
 */
import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import {Actions} from 'react-native-router-flux'

// 1. 导入轮播图组件
import Swiper from 'react-native-swiper';

// 2. 为轮播图设置样式
var styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    image:{
        width:'100%',
        height:'100%'
    },
    nav:{
        flexDirection:'row',
        justifyContent:'space-around',
        height:50,
        backgroundColor:'orange',
        alignItems:'center'
    },
    navItem:{}
})

export default class HomeContainer extends React.Component {
    render() {
        return <View>
            {/*3. 使用轮播图组件*/}
            <Swiper style={styles.wrapper} showsButtons={true} height={160} autoplay={true}>
                <View style={styles.slide1}>
                    <Image source={{uri:'http://www.itcast.cn/images/slidead/BEIJING/2017410109413000.jpg'}} style={styles.image}></Image>
                </View>
                <View style={styles.slide2}>
                    <Image source={{uri:'http://www.itcast.cn/images/slidead/BEIJING/2017440109442800.jpg'}} style={styles.image}></Image>
                </View>
                <View style={styles.slide3}>
                    <Image source={{uri:'http://www.itcast.cn/images/slidead/BEIJING/2017441409442800.jpg'}} style={styles.image}></Image>
                </View>
            </Swiper>

            <View style={styles.nav}>
                <Text style={styles.navItem} onPress={Actions.mainPage}>主页</Text>
                <Text style={styles.navItem} onPress={Actions.movieList}>电影</Text>
                <Text style={styles.navItem} onPress={Actions.about}>关于</Text>
            </View>
        </View>
    }
}