import {createStackNavigator} from 'react-navigation-stack';
import {Platform} from 'react-native';

import {
  setHiddenHeaderLayout,
  setDefaultHeaderLayout,
} from '~/routes/headerUtils';

import Home from './index';
import Detail from './componenten/detail';
import Search from './componenten/Search';
import Noti from './componenten/notification';
import Login from './componenten/Login/routes';
import Inbox from './componenten/inbox';
import Abou from './componenten/abou';
import Updatep from './componenten/updateProfile';

export const ROUTE_NAMES = {
  HOME: 'HOME',
  DETAIL: 'DETAIL',
  SEARCH: 'SEARCH',
  UPDATEP: 'UPDATEP',
  INBOX: 'INBOX',
  NOTI: 'NOTI',
  LOGIN: 'LOGIN',
  ABOU: 'ABOU',
};

const RootStack = createStackNavigator(
  {
    [ROUTE_NAMES.HOME]: {
      screen: Home,
      navigationOptions: ({navigation}) => setHiddenHeaderLayout(navigation),
    },
    [ROUTE_NAMES.DETAIL]: {
      screen: Detail,
      navigationOptions: ({navigation}) => setHiddenHeaderLayout(navigation),
    },
    [ROUTE_NAMES.SEARCH]: {
      screen: Search,
      navigationOptions: ({navigation}) => setHiddenHeaderLayout(navigation),
    },
    [ROUTE_NAMES.INBOX]: {
      screen: Inbox,
      navigationOptions: ({navigation}) => setHiddenHeaderLayout(navigation),
    },
    [ROUTE_NAMES.NOTI]: {
      screen: Noti,
      navigationOptions: ({navigation}) => setHiddenHeaderLayout(navigation),
    },
    [ROUTE_NAMES.LOGIN]: {
      screen: Login,
      navigationOptions: ({navigation}) => setHiddenHeaderLayout(navigation),
    },
    [ROUTE_NAMES.ABOU]: {
      screen: Abou,
      navigationOptions: ({navigation}) => setHiddenHeaderLayout(navigation),
    },
    [ROUTE_NAMES.UPDATEP]: {
      screen: Updatep,
      navigationOptions: ({navigation}) => setHiddenHeaderLayout(navigation),
    },
  },
  {
    initialRouteName: ROUTE_NAMES.HOME,
    mode: Platform.OS === 'ios' ? 'card' : 'modal',
    headerMode: 'screen',
  },
);

RootStack.navigationOptions = ({navigation}) => {
  console.log('navigationnavigation', navigation);
  const tabBarVisible = navigation.state.index <= 0;

  return {
    tabBarVisible,
  };
};

export default RootStack;
