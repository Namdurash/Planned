import * as React from 'react';
import * as PATHS from '../paths';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginStackParamsList} from './LoginNavigator.types';
import {LoginScreen} from '../../screens/LoginScreen/LoginScreen';

const LoginStack = createNativeStackNavigator<LoginStackParamsList>();

export const LoginNavigator = () => {
  return (
    <LoginStack.Navigator
      initialRouteName={PATHS.LOGIN_SCREEN}
      screenOptions={{headerShown: false}}>
      <LoginStack.Screen name={PATHS.LOGIN_SCREEN} component={LoginScreen} />
    </LoginStack.Navigator>
  );
};
