import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {MainStackNavigationParam} from '@navigation/@types/main-stack-navigation-params';
import {useUsers} from './user-details.hook';

type ProfileScreenRouteProp = RouteProp<
  MainStackNavigationParam,
  'UserDetails'
>;

export const UserDetails = () => {
  const route = useRoute<ProfileScreenRouteProp>();
  const {userDetails, handleGetUserDetails} = useUsers();

  useEffect(() => {
    handleGetUserDetails(route.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Text>{userDetails.first_name + ' ' + userDetails.last_name}</Text>
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
