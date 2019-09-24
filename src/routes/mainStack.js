// @flow

import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import MainRoutes from '../pages/Main/routes';
import MapRoutes from '../pages/Maps/routes';

import isEqualsOrLargestThanIphoneX from '~/utils/isEqualsOrLargestThanIphoneX';
import appStyles from '~/styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faMap} from '@fortawesome/free-solid-svg-icons';

export const ROUTE_NAMES = {
  HOME: 'HOME',
  MAP: 'MAP',
};

type Props = {
  tintColor: string,
};

const getTabIcon = (icon: string): Object => ({tintColor}: Props) => {
  return <FontAwesomeIcon icon={faHome} color={tintColor} />;
};
const getMapIcon = (icon: string): Object => ({tintColor}: Props) => {
  return <FontAwesomeIcon icon={faMap} color={tintColor} />;
};

const ApplicationTabs = createMaterialTopTabNavigator(
  {
    [ROUTE_NAMES.HOME]: {
      screen: MainRoutes,
      navigationOptions: {
        tabBarIcon: getTabIcon('home'),
      },
    },
    [ROUTE_NAMES.MAP]: {
      screen: MapRoutes,
      navigationOptions: {
        tabBarIcon: getMapIcon('map'),
      },
    },
  },
  {
    initialRouteName: ROUTE_NAMES.HOME,
    tabBarPosition: 'bottom',
    optimizationsEnabled: true,
    animationEnabled: true,
    swipeEnabled: false,
    lazy: true,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      style: {
        paddingBottom: isEqualsOrLargestThanIphoneX() ? 30 : 0,
        backgroundColor: appStyles.colors.white,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 10,
      },
      indicatorStyle: {
        backgroundColor: 'transparent',
      },
      inactiveTintColor: appStyles.colors.gray,
      activeTintColor: appStyles.colors.violet,
    },
  },
);

const AppContainer = createAppContainer(ApplicationTabs);

export default AppContainer;
