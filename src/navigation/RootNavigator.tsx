import * as React from 'react';
import * as PATHS from './paths';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamsList} from './types';
import {HomeNavigator} from './HomeNavigator/HomeNavigator';

const RootStack = createNativeStackNavigator<RootStackParamsList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={PATHS.HOME_STACK}
        screenOptions={{headerShown: false}}>
        <RootStack.Screen name={PATHS.HOME_STACK} component={HomeNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
