import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppDetails({ route }) {
  const { game } = route.params;

  return (
    <View style={styles.gameContainer}>
      <Text>App Details</Text>
      <Text>Name: {game.title}</Text>
      <Text>ID: {game.id}</Text>
      <Text>------------------------</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    gameContainer: {
        flex: 1,
        width: '45%',
        borderWidth: 1,
        borderColor: '#ccc',
        margin: 5,
        padding: 5,
      },
});
