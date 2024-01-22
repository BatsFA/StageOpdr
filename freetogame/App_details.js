import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Details({ route }) {
  const { game } = route.params;

  return (
    <LinearGradient
      colors={['#fff', '#4fe4f5', '#000']}
      style={styles.background}>
      <View style={styles.container}>
        <View style={styles.detaillist}>
          <Text style={styles.gameTitle}>{game.title}</Text>
          {/* <Text style={styles.titlelist}>Game Details</Text> */}
          <View style={styles.detailcontainer}>
            <Text style={styles.gameId}>Game ID: {game.id}</Text>
            <Text style={styles.gamedetails}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Text>
            <Text style={styles.gamedetails}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    background: {
      height: '100%',
    },
    detaillist: {
        alignItems: 'center',
        width: '100%',
    },
    detailcontainer: {
        width: '85%',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#4fe4f5',
        margin: 5,
        padding: 20,
    },
    gameTitle: {
      letterSpacing: 0.8,
      fontWeight: 'bold',
      fontSize: 26,
      textAlign: 'center',
    },
    gameId: {
      textAlign: 'center',
      fontSize: 20,
      padding: 10,
    },
    gamedetails: {
      padding: 5,
      letterSpacing: 0.6,
      fontSize: 18,
      color: '#000'
    },
});
