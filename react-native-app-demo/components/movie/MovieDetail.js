/**
 * Created by liulongbin on 2017/4/28.
 */
import React from 'react'
import {View, Text, ActivityIndicator, Image, ScrollView} from 'react-native'
import Test from "../test/Test";

export default class MovieDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            movieInfo: {}
        }
    }

    render() {
        return <View style={{paddingTop: 54}}>
            {this.createMovieDetail()}
        </View>
    }

    // 在组件将要挂载的时候，获取数据
    componentWillMount() {
        fetch('https://api.douban.com/v2/movie/subject/' + this.props.movieId).then(response => {
            return response.json();
        }).then(data => {
            // 将isLoading设置为false，隐藏loading效果，通过将数据挂载到state上
            this.setState({
                isLoading: false,
                movieInfo: data
            });
        });
    }

    // 创建电影详细信息
    createMovieDetail = ()=>{
        if(this.state.isLoading){
            return <ActivityIndicator size="large"></ActivityIndicator>
        }else{
            // 数据加载完成，可以渲染电影详细
            return <ScrollView><View>
                <Text style={{fontSize:28, textAlign:'center'}}>{this.state.movieInfo.title}</Text>

                <View style={{alignItems:'center'}}>
                    <Image source={{uri:this.state.movieInfo.images.large}} style={{width:200, height:260}}></Image>
                </View>

                <Text style={{fontSize:22, marginTop:15}}>主要演员：</Text>
                <View style={{flexDirection:'row'}}>
                    {this.state.movieInfo.casts.map(function (item, i) {
                        return <View key={i} style={{margin:5}}>
                            <Image source={{uri:item.avatars.small}} style={{width:60, height:90}}></Image>
                            <Text>{item.name}</Text>
                        </View>
                    })}
                </View>

                <Text style={{fontSize:22, marginTop:15}}>剧情简介：</Text>
                <Text style={{lineHeight:30}}>{this.state.movieInfo.summary}</Text>
            </View></ScrollView>
        }
    }
}