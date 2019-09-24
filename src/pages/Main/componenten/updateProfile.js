import React from 'react';
import {View, ScrollView} from 'react-native';
import {Avatar, Text, Button} from 'react-native-elements';
import {Input} from 'react-native-elements';

export default class menudemo extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {};

  render() {
    console.log('this.props', this.props);

    return (
      <ScrollView style={{backgroundColor: '#fff', height: '100%'}}>
        <View>
          <Avatar
            size="large"
            rounded
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
          />
          <Text h4>Hò Văn Tẻn</Text>
          <Button title="Up load CV" />
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
