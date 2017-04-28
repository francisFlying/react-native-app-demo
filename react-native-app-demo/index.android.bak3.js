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
    ScrollView,
    ListView
} from 'react-native';

// 自定义的MyComponent组件
class MyComponent extends React.Component{
    constructor(props){
        super(props);
        // 1. 通过new ListView.DataSource，得到一个ListView的数据源对象，
        // 这时候，数据源对象中，并没有实际的数据，是一个空的数据源对象！
        // 括号中的对象，是用来实现高效数据更新的，是固定写法，没必要记下来
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            list:ds.cloneWithRows(['啊','五环','ni','kenan','毛利小五郎','小黄真黄','我姓黄，红绿灯的黄','啊','五环','ni','kenan','毛利小五郎','小黄真黄','我姓黄，红绿灯的黄','啊','五环','ni','kenan','毛利小五郎','小黄真黄','我姓黄，红绿灯的黄','啊','五环','ni','kenan','毛利小五郎','小黄真黄','我姓黄，红绿灯的黄','啊','五环','ni','kenan','毛利小五郎','小黄真黄','我姓黄，红绿灯的黄','啊','五环','ni','kenan','毛利小五郎','小黄真黄','我姓黄，红绿灯的黄','啊','五环','ni','kenan','毛利小五郎','小黄真黄','我姓黄，红绿灯的黄','啊','五环','ni','kenan','毛利小五郎','小黄真黄','我姓黄，红绿灯的黄']) // 使用数据源身上的cloneWithRows方法，将数据克隆到数据源内部，这样，ListView就得到了自己要渲染的数据
        }
    }
    render(){
        return <View>
            <ListView
                dataSource={this.state.list}
                renderRow={(rowData) => {return <Text>{rowData}</Text>}}
            />
        </View>
    }
}

// AppRegistry刚才导入的RN的组件
// 这个组件唯一的作用，就是来注册App首屏页面的！
// 如果要更改首屏页面，只需要修改箭头函数最后面的那个组件名称即可！注意：其他代码不要动！！！
AppRegistry.registerComponent('rn_0428', () => MyComponent);
