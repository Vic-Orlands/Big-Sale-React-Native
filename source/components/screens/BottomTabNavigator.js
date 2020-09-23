import React from 'react';
import {View,Text} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import Todo from './Todo';

const BottomTabNavigator = createBottomTabNavigator({
  One: ScreenOne,
  Two: ScreenTwo,
  Three: Todo
});

export default BottomTabNavigator;