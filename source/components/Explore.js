import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Platform, StatusBar, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Category from './Category/Category';

const Explore = () => {
	return (
		<View style={styles.container}>
			<View style={{ flexDirection: 'row' }}>
				<Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
				<TextInput
					underlineColorAndroid="transparent"
					placeholder="Search"
					placeholderTextColor="grey"
					// style={{ flex:1, fontWeight: '700', backgroundColor="white"}}
				/>
			</View>

			<ScrollView scrollEventThrottle={16}>
				<View styles={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
					<Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
						{' '}
						What can we help you find{' '}
					</Text>

					<View style={{ height: 130, marginTop: 20 }}>
						<ScrollView
                        horizontal={true} showsHorizontalScrollIndicator={false}
                        >
							<Category ImageUri={require('../assets/logo.jpg')} name="Home" />
							{/* <Category ImageUri={require('../assets/hey.png')} name="Experience" />
							<Category ImageUri={require('../assets/logo.jpg')} name="Home" />
							<Category ImageUri={require('../assets/rex.jpeg')} name="Restaurant" />
							<Category ImageUri={require('../assets/logo.jpg')} name="Home" />
							<Category ImageUri={require('../assets/work.jpeg')} name="Beach" />
							<Category ImageUri={require('../assets/hey.png')} name="Experience" /> */}
						</ScrollView>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};
export default Explore;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffff'
	}
});
