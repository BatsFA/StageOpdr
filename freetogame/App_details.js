import React from 'react';
import { View, Text } from 'react-native';

export default function AppDetails({ route }) {
  const { game } = route.params;

  return (
    <View>
      <Text>App Details</Text>
      <Text>Name: {game.title}</Text>
      <Text>ID: {game.id}</Text>
      <Text>------------------------</Text>
    </View>
  );
}
