import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Screens} from '@navigation/@types/screens';

export const Home = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Go to Users" onPress={() => navigate(Screens.Users)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
