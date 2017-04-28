/**
 * Created by liulongbin on 2017/4/28.
 */
import React from 'react'
import {View, Text, Image, Button} from 'react-native'
// 1. 导入摄像头拍照相关的组件
import ImagePicker from 'react-native-image-picker'

// 2. 调用拍照功能时候，的配置对象
var photoOptions = {
    //底部弹出框选项
    title: '选择一张帅气的头像吧',
    cancelButtonTitle: '去意已决',
    takePhotoButtonTitle: '我要拍一张新鲜的帅照',
    chooseFromLibraryButtonTitle: '我有现成的帅照',
    quality: 0.75, // 照片的质量
    allowsEditing: true, // 是否允许编辑
    noData: false,
    storageOptions: {
        skipBackup: true, // 不备份到Icloud
        path: 'images' // 存放的路径
    }
}

export default class MainPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // 3. 修改state，保存照片的路径，默认有一张显示的图片
            imgURL: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=272906209,811047325&fm=80&w=179&h=119&img.JPEG' // 存放拍完的照片的路径
        }
    }

    render(){
        return <View style={{paddingTop:54, alignItems:'center'}}>
            {/*4. 在页面上添加元素*/}
            <Image source={{ uri: this.state.imgURL }} style={{ width: 200, height: 200, marginBottom:15, borderRadius:100}}></Image>

            <Button title="拍照" onPress={this.cameraAction}></Button>
        </View>
    }

    // 第5步：
    cameraAction = () => {
        ImagePicker.showImagePicker(photoOptions, (response) => {
            console.log('response' + response);

            if (response.didCancel) { // 如果用户点击了取消按钮，证明没有选取照片，直接退出函数
                return
            }

            // 如果用户选择了照片，则将URL地址，赋值给state上进行保存
            this.setState({
                imgURL: response.uri
            });
        })
    }
}