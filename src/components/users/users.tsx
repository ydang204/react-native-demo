import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useUsers} from './users.hook';
import {UserResModel} from '@models/res-models/user-res-model';
import {Screens} from '@navigation/@types/screens';

type ItemProps = {
  user: UserResModel;
};

const Item = ({user}: ItemProps) => {
  const {navigate} = useNavigation();
  const handlePress = () => {
    navigate(Screens.UserDetails, {id: user.id});
  };
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.name}>
          {user.first_name + ' ' + user.last_name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export const Users = () => {
  const {users} = useUsers();

  const renderItem = (user: UserResModel) => <Item user={user} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={(row) => renderItem(row.item)}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#31A7F5',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 32,
  },
});
