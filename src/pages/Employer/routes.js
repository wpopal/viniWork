import {createStackNavigator} from 'react-navigation-stack';
import {Platform} from 'react-native';

import {
  setHiddenHeaderLayout,
  setDefaultHeaderLayout,
} from '~/routes/headerUtils';

import Intro from './index';

export const ROUTE_NAMES = {
  INTRO: 'INTRO',
};

const RootStack = createStackNavigator(
  {
    [ROUTE_NAMES.INTRO]: {
      screen: Intro,
      navigationOptions: ({navigation}) => setHiddenHeaderLayout(navigation),
    },
  },
  {
    initialRouteName: ROUTE_NAMES.INTRO,
    mode: Platform.OS === 'ios' ? 'card' : 'modal',
    headerMode: 'screen',
  },
);

RootStack.navigationOptions = ({navigation}) => {
  const tabBarVisible = navigation.state.index <= 0;

  return {
    tabBarVisible,
  };
};

export default RootStack;
