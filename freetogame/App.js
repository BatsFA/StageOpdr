// App.js

import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import AppDetails from './App_details'; // Import AppDetails

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.freetogame.com/api/games');
        const sortedGames = response.data.sort((a, b) => a.id - b.id);
        setGames(sortedGames);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.gameContainer}
      key={item.id}
      onPress={() => navigation.navigate('AppDetails', { game: item })}
    >
      <Text style={styles.gameTitle}>{item.title}</Text>
      <Text style={styles.gameId}>ID: {item.id}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.gamelist}>
        <Text style={styles.titlelist}>All Games (Sorted by ID):</Text>
        <FlatList
          data={games}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AppDetails" component={AppDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    margin: 10,
    marginTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titlelist: {
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  gameContainer: {
    flex: 1,
    width: '45%',
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 5,
    padding: 5,
  },
  gamelist: {
    width: '85%',
  },
  gameTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  gameId: {
    fontSize: 14,
    color: '#555',
  },
});
