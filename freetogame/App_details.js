import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppDetails({ route }) {
  const { game } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.detaillist}>
        <Text style={styles.titlelist}>App Details</Text>
        <View style={styles.detailcontainer}>
          <Text style={styles.gameTitle}>{game.title}</Text>
          <Text style={styles.gameId}>ID: {game.id}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
    },
    detaillist: {
        alignItems: 'center',
        width: '100%',
    },
    titlelist: {
        paddingBottom: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    detailcontainer: {
        width: '85%',
        borderWidth: 1,
        borderColor: '#ccc',
        margin: 5,
        padding: 5,

    },
    gameTitle: {
        textAlign: 'center',
    },
    gameId: {
      
    },
});
