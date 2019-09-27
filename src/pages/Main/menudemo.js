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
      case 'Updated profile':
        this.props.navigation.navigate('UPDATEP');
        break;
      case 'Tin nhắn':
        this.props.navigation.navigate('INBOX');
        break;
      case 'Message':
        this.props.navigation.navigate('NOTI');
        break;
      case 'Contact':
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
    const list = [
      {
        title: 'Updated profile',
        icon: 'av-timer',
      },
      {
        title: 'Message',
        icon: 'flight-takeoff',
      },
      {
        title: 'Notification',
        icon: 'flight-takeoff',
      },
      {
        title: 'Contact',
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
