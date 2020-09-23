import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SplashComponent from './SplashComponent';
import SignUpComponent from './SignUpComponent';
import SignInComponent from './SignInComponent';

import AppNavigator from './screens/AppNavigator'

const stackNavigator = createStackNavigator({
	SplashScreen: {
		screen: SplashComponent,
		navigationOptions: {
			headerShown: false
		}
	},
	SignUpScreen: {
		screen: SignUpComponent,
		navigationOptions: {
			headerShown: false
		}
	},
	SignInScreen: {
		screen: SignInComponent,
		navigationOptions: {
			headerShown: false
		}
	},
	NavigatorScreen: {
		screen: AppNavigator,
		navigationOptions: {
			headerShown: false
		}
	}
});

export default createAppContainer(stackNavigator);
