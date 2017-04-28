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
    ActivityIndicator
} from 'react-native';

// 3. 创建一个React基本的组件【有状态的组件】
export default class rn_0428 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
            </View>);

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

// 自定义的MyComponent组件
class MyComponent extends React.Component{
    render(){
        return <View style={styles.container}>
            <Text>这是我自定义的页面！！！</Text>
            <TextInput style={{width:250}} autoCapitalize="characters" autoFocus={true} multiline={true} secureTextEntry={true}></TextInput>
            {/*<Image source={require('./images/1.jpg')} style={{width:200, height:200, borderRadius:100, backgroundColor:'red'}} resizeMode="stretch"/>*/}

            {/*引用网络上的图片必须提前指定宽高*/}
            <Image source={{uri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656881601,2258550211&fm=23&gp=0.jpg'}} style={{width:150 ,height:150}}/>

            <Button title="点击啊啊啊啊" onPress={this.sayHello}></Button>
            <ActivityIndicator color="darkred" size="large"/>
        </View>
    }

    sayHello = ()=>{
        console.warn('我是警告，你害怕吗！');
    }
}

// AppRegistry刚才导入的RN的组件
// 这个组件唯一的作用，就是来注册App首屏页面的！
// 如果要更改首屏页面，只需要修改箭头函数最后面的那个组件名称即可！注意：其他代码不要动！！！
AppRegistry.registerComponent('rn_0428', () => MyComponent);