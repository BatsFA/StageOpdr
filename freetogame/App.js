// App.js

import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import { LinearGradient } from "expo-linear-gradient";
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
      onPress={() => navigation.navigate('Details', { game: item })}
    >
      <Image 
         source={{uri: item.thumbnail}}
      />
      <Text style={styles.gameTitle}>{item.title}</Text>
      <Text style={styles.gameId}>ID: {item.id}</Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      // Button Linear Gradient
      colors={['#fff', '#4fe4f5', '#000']}
      style={styles.background}>
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
    </LinearGradient>
  );
}

export default function App() {
  return (
    <NavigationContainer style={styles.navcontainer}>
      <Stack.Navigator style={styles.navigator} initialRouteName="Home">
        <Stack.Screen style={styles.navitem} name="Home" component={HomeScreen} />
        <Stack.Screen style={styles.navitem} name="Details" component={AppDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    width: '45%',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#4fe4f5',
    backgroundColor: '#fff',
    margin: 5,
    padding: 5,
  },
  gameTitle: {
    letterSpacing: 0.8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  gameId: {
    fontSize: 14,
    color: '#555',
  },
  background: {
    height: '100%',
  },
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 20,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gamelist: {
    width: '85%',
  },
  titlelist: {
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  navcontainer: {
    flex: 1,
    backgroundColor: 'red',
    border: 1,
    borderColor: '#000',
  },
  navigator: {
    backgroundColor: 'red',
  },
});
