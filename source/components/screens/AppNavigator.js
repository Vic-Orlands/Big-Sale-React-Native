import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import BottomTabNavigator from './BottomTabNavigator';
// import MyScreen from '../AppNavigator'

export default createAppContainer(
  createSwitchNavigator({
    // Additional routes such as a login route could
    // be added here:
    // Login: LoginNavigator,
    // App: MyScreen,
    Main: BottomTabNavigator
  })
);