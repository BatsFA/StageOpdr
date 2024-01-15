import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function App() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.freetogame.com/api/games');
        const sortGames = response.data.sort((a, b) => a.id - b.id);
        setGames(sortGames);
      } catch (error) {
        console.error('error', error);
      }
    };
    fetchData();
  }, []);
  const renderItem = ({ item }) => (
    <View style={styles.gameContainer} key={item.id}>
      <Text>Name: {item.title}</Text>
      <Text>ID: {item.id}</Text>
      <Text>------------------------</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <View style={styles.games}>
        <Text>All Games (Sorted by ID):</Text>
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

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  games: {
    width: '2em',
  }
});
