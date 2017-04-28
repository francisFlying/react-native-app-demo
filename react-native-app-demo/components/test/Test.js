/**
 * Created by liulongbin on 2017/4/28.
 */
import React from 'react'
import {View, Text} from 'react-native'
import {Actions} from 'react-native-router-flux'

export default class Test extends React.Component{
    render(){
        return <View style={{paddingTop:54}}>
            <Text onPress={()=>{Actions.pop()}}>滚回去吧...皮卡丘 --- {this.props.name}</Text>
        </View>
    }
}