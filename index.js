import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './source/components/App.js';
// import AppNavigator from './source/components/screens/AppNavigator';

AppRegistry.registerComponent(appName, () => App);
