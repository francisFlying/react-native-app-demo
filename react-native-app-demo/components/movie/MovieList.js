/**
 * Created by liulongbin on 2017/4/28.
 */
import React from 'react'
import {View, Text, ActivityIndicator, ListView, Image, TouchableOpacity} from 'react-native'

// 导入路由相关的组件
import {Actions} from 'react-native-router-flux'

export default class MovieList extends React.Component {
    constructor(porps) {
        super(porps);
        this.state = {
            isLoading: true, // 默认显示loading效果
            movieList: [] // 空数组，将来获取到的电影列表会赋值给movieList
        }
    }

    render() {
        // 当刚进入列表页面的时候，需要立即显示一个Loading效果，同时，用fetch发起数据请求，当电影列表数据请求成功之后，将loading效果移除，同时渲染电影列表给用户展示【ListView】
        return <View style={{paddingTop: 54}}>
            {/*调用展示列表数据的方法*/}
            {this.createMovieList()}
        </View>
    }

    // 展示电影列表数据
    createMovieList = () => {
        if (this.state.isLoading) {
            // 需要渲染一个loading效果
            return <ActivityIndicator size="large"/>
        } else {
            // 真实的渲染电影列表
            return <ListView
                dataSource={this.state.movieList}
                renderRow={(rowData) => <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                        this.goMovieDetail(rowData.id)
                    }}>
                    <View style={{flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: '#eee'}}
                          onClick={this.goMovieDetail}>
                        <Image source={{uri: rowData.images.medium}}
                               style={{width: 100, height: 140, marginRight: 10}}/>
                        <View style={{justifyContent: 'space-around'}}>
                            <Text>电影名称：{rowData.title}</Text>
                            <Text>电影类型：{rowData.genres.join('，')}</Text>
                            <Text>上映年份：{rowData.year}年</Text>
                            <Text>豆瓣评分：{rowData.rating.average}分</Text>
                        </View>
                    </View></TouchableOpacity>}
            />
        }
    }

    // 组件将要被挂载的时候，获取电影数据
    componentWillMount() {
        // 跨域问题，只有在浏览器中才存在，我们现在做的是一个手机App，并不存在跨域限制，所以可以直接使用fetch API请求数据！！！
        fetch('https://api.douban.com/v2/movie/in_theaters').then(response => {
            return response.json(); //  把response调用.json()方法处理，返回一个新的Promise对象
        }).then(data => {
            // 拿到数据之后，将数据通过this.setState，直接挂载到我们的state上即可
            // 当获取到数据之后，先创建一个DataSource的数据源，这时候，数据源还是空的
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
                isLoading: false,
                movieList: ds.cloneWithRows(data.subjects) // 使用数据源对象的cloneWithRows方法，将数据包装为ListView的数据
            });
        });
    }

    // 点击跳转到电影详细
    goMovieDetail = (id) => {
        // console.warn('123');
        // 点击跳转到电影详情，注意，在传递参数的时候，需要使用对象的形式传递
        Actions.movieDetail({movieId: id});
    }
}