import React from 'react';
import {View, ScrollView, Image, Alert} from 'react-native';
import {Avatar, Text, Button} from 'react-native-elements';
import {Input} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';

import DocumentPicker from 'react-native-document-picker';

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default class menudemo extends React.Component {
  constructor(props) {
    super(props);
  }

  uploadImg = () => {
    console.log('ádasdasdasasdas');
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        this.setState({
          avatarSource: source,
        });
      }
    });
  };

  async uploadFile() {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      Alert.alert('upload done', res.uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  }

  state = {avatarSource: ''};

  render() {
    return (
      <ScrollView style={{backgroundColor: '#fff', height: '100%'}}>
        <View>
          <Avatar
            size="large"
            rounded
            source={this.state.avatarSource}
            onPress={() => {
              this.uploadImg();
            }}
          />
          <Text h4>Hò Văn Tẻn</Text>
          <Button
            onPress={() => {
              this.uploadFile();
            }}
            title="Up load CV"
          />
        </View>
        <View style={{width: '100%'}}>
          <Text>Họ và tên :</Text>
          <Input />
          <Text>Số điện thoại :</Text>
          <Input />
          <Text>địa chỉ mail:</Text>
          <Input />
          <Text>Chức vụ :</Text>
          <Input />

          <Text>Cấp bậc</Text>
          <Input />

          <Text>Số năm kinh nghiệm</Text>
          <Input />
          <Text>Bằng cấp</Text>
          <Input />

          <Text>Ngành nghề mong muốn :</Text>
          <Input />
          <Button title="Save" />
        </View>
      </ScrollView>
    );
  }
}
