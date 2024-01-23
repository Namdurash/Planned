import * as React from 'react';
import * as PATHS from '../paths';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackParamsList} from './HomeNavigator.types';
import {HomeScreen} from '../../screens/Home/HomeScreen';
import {PlanCreatorScreen} from '../../screens/PlanCreator/PlanCreatorScreen';
import {WelcomeScreen} from '../../screens/Welcome/WelcomeScreen';

const HomeStack = createNativeStackNavigator<HomeStackParamsList>();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName={PATHS.WELCOME_SCREEN}
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name={PATHS.HOME_SCREEN} component={HomeScreen} />
      <HomeStack.Screen
        name={PATHS.PLAN_CREATOR_SCREEN}
        component={PlanCreatorScreen}
      />
      <HomeStack.Screen name={PATHS.WELCOME_SCREEN} component={WelcomeScreen} />
    </HomeStack.Navigator>
  );
};
