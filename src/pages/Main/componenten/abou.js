import React from 'react';
import {View, Text} from 'react-native';

export default class menudemo extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {};

  render() {

    return (
      <View style={{backgroundColor: '#fff', height: '100%'}}>
        <Text h3>About us</Text>
        <Text>Welcome to ViniWork</Text>
      </View>
    );
  }
}
