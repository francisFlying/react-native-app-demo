/**
 * Created by liulongbin on 2017/4/28.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// 1. 导入React相关包
import React, {Component} from 'react';

// 2. 导入react-native相关的组件
import {
    AppRegistry,
    StyleSheet, // 这个组件是用来创建样式的，通过StyleSheet.create({})
    Text,
    View,
    TextInput,
    Image,
    Button,
    ActivityIndicator,
    ScrollView
} from 'react-native';

// 自定义的MyComponent组件
class MyComponent extends React.Component{
    render(){
        return <View>
            <ScrollView>
                <Image source={{uri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656881601,2258550211&fm=23&gp=0.jpg'}} style={{width:150 ,height:150}}/>
                <Text>如果要更改首屏页面，只需要修改箭头函数最后面的那个组件名称即可！注意：其他代码不要动！！！</Text>
                <Image source={{uri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656881601,2258550211&fm=23&gp=0.jpg'}} style={{width:150 ,height:150}}/>
                <Text>如果要更改首屏页面，只需要修改箭头函数最后面的那个组件名称即可！注意：其他代码不要动！！！</Text>
                <Image source={{uri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656881601,2258550211&fm=23&gp=0.jpg'}} style={{width:150 ,height:150}}/>
                <Text>如果要更改首屏页面，只需要修改箭头函数最后面的那个组件名称即可！注意：其他代码不要动！！！</Text>
                <Image source={{uri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656881601,2258550211&fm=23&gp=0.jpg'}} style={{width:150 ,height:150}}/>
                <Text>如果要更改首屏页面，只需要修改箭头函数最后面的那个组件名称即可！注意：其他代码不要动！！！</Text>
                <Image source={{uri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656881601,2258550211&fm=23&gp=0.jpg'}} style={{width:150 ,height:150}}/>
                <Text>如果要更改首屏页面，只需要修改箭头函数最后面的那个组件名称即可！注意：其他代码不要动！！！</Text>
                <Image source={{uri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656881601,2258550211&fm=23&gp=0.jpg'}} style={{width:150 ,height:150}}/>
                <Text>如果要更改首屏页面，只需要修改箭头函数最后面的那个组件名称即可！注意：其他代码不要动！！！</Text>
                <Image source={{uri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656881601,2258550211&fm=23&gp=0.jpg'}} style={{width:150 ,height:150}}/>
                <Text>如果要更改首屏页面，只需要修改箭头函数最后面的那个组件名称即可！注意：其他代码不要动！！！</Text>
                <Image source={{uri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656881601,2258550211&fm=23&gp=0.jpg'}} style={{width:150 ,height:150}}/>
                <Text>如果要更改首屏页面，只需要修改箭头函数最后面的那个组件名称即可！注意：其他代码不要动！！！</Text></ScrollView>
        </View>
    }
}

// AppRegistry刚才导入的RN的组件
// 这个组件唯一的作用，就是来注册App首屏页面的！
// 如果要更改首屏页面，只需要修改箭头函数最后面的那个组件名称即可！注意：其他代码不要动！！！
AppRegistry.registerComponent('rn_0428', () => MyComponent);
