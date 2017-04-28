/**
 * Created by liulongbin on 2017/4/28.
 */
import React from 'react'

// 导入RN组件
import {
    View, Text
} from 'react-native';

// 导入路由相关的组件，其中Router是一个根元素，包裹了所有的路由页面，而且在它内部必须有唯一的一个子元素
import { Router, Scene } from 'react-native-router-flux';

// 导入自定义的组件
import HomeContainer from './home/HomeContainer'
import MainPage from './home/MainPage'
import MovieList from './movie/MovieList'
import AboutContainer from './about/AboutContainer'
import MovieDetail from './movie/MovieDetail'

// 项目的根组件
export default class App extends  React.Component{
    render(){
        return <Router>
            <Scene key="root">
                {/*key表示路由的名称，component指定了路由要显示的页面，initial表示默认就显示这个组件页面， title指定了场景名称*/}
                <Scene key="home" component={HomeContainer} initial={true} title="首页" hideNavBar={true}></Scene>
                <Scene key="mainPage" component={MainPage} title="主页" hideNavBar={false}></Scene>
                <Scene key="movieList" component={MovieList} title="电影列表" hideNavBar={false}></Scene>
                <Scene key="about" component={AboutContainer} title="关于" hideNavBar={false}></Scene>
                <Scene key="movieDetail" component={MovieDetail} title="电影详情" hideNavBar={false}></Scene>
            </Scene>
        </Router>
    }
}