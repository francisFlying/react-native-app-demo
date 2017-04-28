/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// 1. 导入React相关包
import React, {Component} from 'react';

// 2. 导入react-native相关的组件
import {
    AppRegistry
} from 'react-native';

// 导入自定义的根组件
import  App from './components/App'


// AppRegistry刚才导入的RN的组件
// 这个组件唯一的作用，就是来注册App首屏页面的！
// 如果要更改首屏页面，只需要修改箭头函数最后面的那个组件名称即可！注意：其他代码不要动！！！
AppRegistry.registerComponent('rn_0428', () => App);
