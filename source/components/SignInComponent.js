import React from 'react';
import { View, Text, StatusBar, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default class SignInComponent extends React.Component {
	state = {
		check_textInput: false,
		password: '',
		secureTextEntry: true
	};

	textInputChange = (value) => {
		if (value.length !== 0) {
			this.setState({
				check_textInput: true
			});
		} else {
			this.setState({
				check_textInput: false
			});
		}
	};

	secureTextEntry = () => {
		this.setState({
			secureTextEntry: !this.state.secureTextEntry
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.text_header}> Welcome Back!</Text>
				</View>

				<Animatable.View animation="fadeInUpBig" style={styles.footer}>
					<Text style={styles.text_footer}>E-MAIL</Text>
					<View style={styles.action}>
						<FontAwesome name="user" color="#05325a" size={20} />
						<TextInput
							placeholder="enter your e-mail..."
							style={styles.textInput}
							onChangeText={(text) => this.textInputChange(text)}
						/>
						{this.state.check_textInput ? (
							<Animatable.View animation="bounceIn">
								<Feather name="check-circle" color="green" size={20} />
							</Animatable.View>
						) : null}
					</View>

					<Text style={styles.text_footerPass}>Password</Text>
					<View style={styles.action}>
						<FontAwesome name="lock" color="#05325a" size={20} />
						{this.state.secureTextEntry ? (
							<TextInput
								placeholder="enter your password..."
								secureTextEntry={true}
								style={styles.textInput}
								value={this.state.password}
								onChangeText={(text) => this.setState({ password: text })}
							/>
						) : (
							<TextInput
								placeholder="your password..."
								style={styles.textInput}
								value={this.state.password}
								onChangeText={(text) => this.setState({ password: text })}
							/>
						)}
						<TouchableOpacity onPress={() => this.secureTextEntry()}>
							{this.state.secureTextEntry ? (
								<Feather name="eye-off" color="gray" size={20} />
							) : (
								<Feather name="eye" color="gray" size={20} />
							)}
						</TouchableOpacity>
					</View>

					<Text style={{ color: '#009bf1', marginTop: 15 }}>Forgot password?</Text>

					<View style={styles.button}>
						<TouchableOpacity
							onPress={() => this.props.navigation.navigate('NavigatorScreen')}
							style={styles.signIn}
						>
							<LinearGradient colors={[ '#5db4fe', '#39cff2' ]} style={styles.signIn}>
								<Text
									style={
										(styles.textSign,
										{
											color: 'white'
										})
									}
								>
									Sign In
								</Text>
							</LinearGradient>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => this.props.navigation.navigate('SignUpScreen')}
							style={styles.signUp}
						>
							<Text
								style={
									(styles.textSign,
									{
										color: '#4dc3f8'
									})
								}
							>
								Sign Up
							</Text>
						</TouchableOpacity>
					</View>
				</Animatable.View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#05325a'
	},
	header: {
		flex: 1,
		justifyContent: 'flex-end',
		paddingHorizontal: 20,
		paddingBottom: 30,
		fontSize: 30
	},
	footer: {
		flex: 3,
		backgroundColor: 'white',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingHorizontal: 20,
		paddingVertical: 20
	},
	text_header: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 30
	},
	text_footer: {
		color: '#05375a',
		fontSize: 14
	},
	text_footerPass: {
		color: '#05375a',
		fontSize: 18,
		marginTop: 30
	},
	action: {
		flexDirection: 'row',
		alignItems: 'center',
		// marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#f2f2f2',
		paddingBottom: 5
	},
	textInput: {
		flex: 1,
		paddingLeft: 10,
		color: '#45375a'
	},
	button: {
		alignItems: 'center',
		marginTop: 30
	},
	signIn: {
		width: '100%',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50
	},
	signUp: {
		width: '100%',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		borderColor: '#4dc3f8',
		borderWidth: 1,
		marginTop: 15
	},
	textSign: {
		fontSize: 18,
		fontWeight: 'bold'
	}
});
