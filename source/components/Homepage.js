import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Animated } from 'react-native';

class Homepage extends Component {
	state = {
		logoAnime: new Animated.Value(0),
		logoText: new Animated.Value(0),
		loadingSpinner: false
	};

	componentDidMount = () => {
		const { logoAnime, logoText } = this.state;
		Animated.parallel([
			Animated.spring(logoAnime, {
				toValue: 1,
				tension: 5,
				friction: 1.5,
				duration: 7000,
				useNativeDriver: false
			}).start(),

			Animated.timing(logoText, {
				toValue: 1,
				duration: 3000
			}).start()
		]).start(() => {
			this.setState({
				loadingSpinner: true
			});
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<Animated.View
					style={{
						opacity: this.state.logoAnime,
						top: this.state.logoAnime.interpolate({
							inputRange: [ 0, 1 ],
							outputRange: [ 100, 0 ]
						})
					}}
				>
					<Image source={require('../assets/logo.png')} style={styles.img} />
				</Animated.View>

				<Animated.View
					style={{
						opacity: this.state.logoText
					}}
				>
					<Text style={styles.text}> Big Sale </Text>
				</Animated.View>
			</View>
		);
	}
}
export default Homepage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#05325a'
	},

	img: {
		width: 150,
		height: 150,
		marginBottom: 30,
		// borderRadius: 500
	},

	text: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#fefeff',
		letterSpacing: 4,
		textTransform: 'uppercase'
	}
});
