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
      <Text style={styles.gameTitle}>{item.title}</Text>
      <Text style={styles.gameId}>ID: {item.id}</Text>
    </View>
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
    width: "85%",
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