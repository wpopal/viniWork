import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements';
import {Avatar} from 'react-native-elements';
import {withNavigation} from 'react-navigation';

class menudemo extends React.Component {
  constructor(props) {
    super(props);
  }

  redirects = item => {
    switch (item) {
      case 'Cập nhật hồi sơ':
        this.props.navigation.navigate('UPDATEP');
        break;
      case 'Tin nhắn':
        this.props.navigation.navigate('INBOX');
        break;
      case 'Thông báo':
        this.props.navigation.navigate('NOTI');
        break;
      case 'Liên hệ':
        this.props.navigation.navigate('ABOU');
        break;
      case 'Login':
        this.props.navigation.navigate('LOGIN');
        break;
      default:
        console.log('item', item);
    }
  };

  state = {};

  render() {
    console.log('this.props', this.props);
    const list = [
      {
        title: 'Cập nhật hồi sơ',
        icon: 'av-timer',
      },
      {
        title: 'Tin nhắn',
        icon: 'flight-takeoff',
      },
      {
        title: 'Thông báo',
        icon: 'flight-takeoff',
      },
      {
        title: 'Liên hệ',
        icon: 'flight-takeoff',
      },
      {
        title: 'Login',
        icon: 'flight-takeoff',
      },
    ];
    return (
      <View style={{backgroundColor: '#fff', height: '100%'}}>
        <Avatar rounded title="MD" size="xlarge"/>
        {list.map((item, i) => (
          <ListItem
            onPress={() => this.redirects(item.title)}
            key={i}
            title={item.title}
            leftIcon={{name: item.icon}}
            bottomDivider
            chevron
          />
        ))}
      </View>
    );
  }
}

export default withNavigation(menudemo);
