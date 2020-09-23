import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';

const ScreenTwo = () => {
	const [ loading, setLoading ] = useState(true);
	const [ movies, setMovies ] = useState([]);
	const [ errorMessage, setErrorMessage ] = useState(null);
	const [ searchValue, setSearchValue ] = useState('');

	useEffect(() => {
		fetch('https://www.omdbapi.com/?s=man&apikey=4a3b711b')
			.then((response) => response.json())
			.then((jsonResponse) => {
				setMovies(jsonResponse.Search);
				setLoading(false);
			});
	}, []);

	const search = (searchValue) => {
		setLoading(true);
		setErrorMessage(null);

		fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
			.then((response) => response.json())
			.then((jsonResponse) => {
				if (jsonResponse.Response === 'True') {
					setMovies(jsonResponse.Search);
					setLoading(false);
				} else {
					setErrorMessage(jsonResponse.Error);
					setLoading(false);
				}
			});
	};

	const handleSearchChanges = (e) => {
		setSearchValue(e);
	};

	const resetSearchField = () => {
		setSearchValue('');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		search(searchValue);
		resetSearchField();
	};

	const renderItem = (data) => {
		return (
			<View>
				<View style={styles.listItemContainer}>
					<Image source={{ uri: data.item.Poster }} style={styles.pokeImage} />
					<Text style={styles.Title}>{data.item.Title}</Text>
					<Text style={styles.Year}>{data.item.Year}</Text>
				</View>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<Text style={{ color: 'white', textAlign: 'center', fontSize: 20, margin: 10 }}>MoviesPoster.org</Text>

			<TextInput
				placeholder="Search Movies"
				style={styles.search}
				value={searchValue}
				onChangeText={handleSearchChanges}
			/>
			<TouchableOpacity style={styles.button} onPress={handleSubmit}>
				<Text>Search</Text>
			</TouchableOpacity>

			<View style={styles.movies}>
				{loading && !errorMessage ? (
					<Text style={styles.loadText}>Loading, please wait....</Text>
				) : (
					movies.map((movie) => (
						<FlatList data={movies} renderItem={renderItem} keyExtractor={(item) => item.Title} />
					))
				)}
			</View>
		</View>
	);
};

export default ScreenTwo;

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
