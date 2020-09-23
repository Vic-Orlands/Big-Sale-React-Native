import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Linking, FlatList, Image, TouchableOpacity } from 'react-native';

export default (ScreenOne = () => {
	const [ loading, setLoading ] = useState(true);
	const [ movies, setMovies ] = useState([]);
	const [ errorMessage, setErrorMessage ] = useState(null);

	useEffect(() => {
		fetch(`https://newsapi.org/v2/top-headlines?country=ng&apiKey=bbc94cd35d6f4e839db332ac2819ff53`)
			.then((response) => response.json())
			.then((jsonResponse) => {
				setMovies(jsonResponse.articles);
				setLoading(false);
			});
	}, []);

	const renderItem = (data) => {
		return (
			<View>
				<View style={styles.listItemContainer}>
					<Image source={{ uri: data.item.urlToImage }} style={styles.pokeImage} />
					<Text style={styles.Title}>{data.item.title}</Text>
					<Text style={styles.Title2}>{data.item.content}</Text>
					<Text style={styles.Year}>{data.item.source.name}</Text>
					<Text style={styles.Year}>{data.item.publishedAt}</Text>
					<TouchableOpacity onPress={() => Linking.openURL(`${data.item.url}`)}>
					<Text style={{ color: 'lightgreen' }} >
						Read full article...
					</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<Text style={{ color: 'white', textAlign: 'center', fontSize: 20, margin: 10 }}>Naijanews.com</Text>

			<View style={styles.movies}>
				{loading && !errorMessage ? (
					<Text style={styles.loadText}>Loading, please wait....</Text>
				) : (
					movies.map((movie) => (
						<FlatList data={movies} renderItem={renderItem} keyExtractor={(item) => item.title} />
					))
				)}
			</View>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#05325a',
		color: 'white'
	},
	search: {
		backgroundColor: 'white',
		borderColor: 'white',
		color: 'black',
		borderRadius: 50
	},
	loadText: {
		color: 'white',
		fontSize: 24,
		marginVertical: 400,
		textAlign: 'center'
	},
	listItemContainer: {
		borderStyle: 'solid',
		borderColor: '#fff',
		borderBottomWidth: 2,
		justifyContent: 'space-between',
		padding: 20,
		alignItems: 'center'
	},
	Title: {
		color: '#fff',
		fontSize: 24
	},
	Title2: {
		color: '#fff',
		fontSize: 20,
		marginTop: 5
	},
	Year: {
		color: '#fff',
		fontSize: 20
	},
	pokeImage: {
		// backgroundColor: 'transparent',
		height: 150,
		width: 200
	},
	button: {
		alignItems: 'center',
		backgroundColor: '#DDDDDD',
		padding: 10,
		margin: 10,
		borderRadius: 50,
		width: 150,
		marginLeft: 'auto',
		marginRight: 'auto'
	}
});
