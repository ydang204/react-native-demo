import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Screens} from '@navigation/@types/screens';
import {Home} from '@components/home/home';
import {Users} from '@components/users/users';
import {UserDetails} from '@components/user-details/user-details';

const MainStack = createStackNavigator();

export const MainStackNavigation: FC = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={Screens.Home}>
        <MainStack.Screen name={Screens.Home} component={Home} />
        <MainStack.Screen name={Screens.Users} component={Users} />
        <MainStack.Screen name={Screens.UserDetails} component={UserDetails} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
