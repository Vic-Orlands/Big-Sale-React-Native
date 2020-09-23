import React from 'react';
import { View, Text, StatusBar, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Homepage from './Homepage';

export default class SplashComponent extends React.Component {
	state = {
		isLoading: true
	};

	componentDidMount = () => {
		setTimeout(() => {
			this.setState({
				isLoading: false
			});
		}, 5000);
	};

	render() {
		const { isLoading } = this.state;
		return (
			<View style={styles.container}>
				{isLoading ? (
					<Homepage />
				) : (
					<View style={styles.container}>
						<StatusBar barStyle="light-content" />
						<View style={styles.header}>
							<Animatable.Image
								animation="bounceIn"
								duration={2000}
								source={require('../assets/logo.png')}
								style={styles.logo}
								resizeMode="stretch"
							/>
						</View>

						<Animatable.View style={styles.footer} animation="fadeInUpBig" duration={1500}>
							<Text style={styles.title}>Stay connected with your market</Text>
							<Text style={styles.text}>Sign In with account</Text>
							<View style={styles.button}>
								<TouchableOpacity onPress={() => this.props.navigation.navigate('SignInScreen')}>
									<LinearGradient colors={[ '#5db4fe', '#39cff2' ]} style={styles.signIn}>
										<Text style={styles.textSign}> Get started </Text>
										<MaterialIcons name="keyboard-arrow-right" color="white" size={20} />
									</LinearGradient>
								</TouchableOpacity>
							</View>
						</Animatable.View>
					</View>
				)}
			</View>
		);
	}
}

const { height } = Dimensions.get('screen');
const height_logo = height * 0.7 * 0.4;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#05325a'
	},
	header: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center'
	},
	footer: {
		flex: 1,
		backgroundColor: 'white',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingVertical: 50,
		paddingHorizontal: 30
	},
	logo: {
		width: height_logo,
		height: height_logo,
		// borderRadius: 500
	},
	title: {
		color: '#05375a',
		fontWeight: 'bold',
		fontSize: 30
	},
	text: {
		color: 'gray',
		marginTop: 5,
		fontSize: 16
	},
	button: {
		alignItems: 'flex-end',
		marginTop: 30
	},
	signIn: {
		width: 150,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 34,
		flexDirection: 'row'
	},
	textSign: {
		color: 'white',
		fontWeight: 'bold'
	}
});
