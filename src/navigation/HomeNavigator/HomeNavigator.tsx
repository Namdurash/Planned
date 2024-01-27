import * as React from 'react';
import * as PATHS from '../paths';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackParamsList} from './HomeNavigator.types';
import {HomeScreen} from '../../screens/Home/HomeScreen';
import {PlanCreatorScreen} from '../../screens/PlanCreator/PlanCreatorScreen';
import {WelcomeScreen} from '../../screens/Welcome/WelcomeScreen';
import {LoginScreen} from '../../screens/LoginScreen/LoginScreen';
import {GreetingsScreen} from '../../screens/Greetings/Greetings';

const HomeStack = createNativeStackNavigator<HomeStackParamsList>();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName={PATHS.GREETINGS_SCREEN}
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name={PATHS.HOME_SCREEN} component={HomeScreen} />
      <HomeStack.Screen
        name={PATHS.PLAN_CREATOR_SCREEN}
        component={PlanCreatorScreen}
      />
      <HomeStack.Screen
        name={PATHS.LOGIN_SCREEN}
        component={LoginScreen}
        options={{animation: 'fade'}}
      />
      <HomeStack.Screen
        name={PATHS.WELCOME_SCREEN}
        component={WelcomeScreen}
        options={{animation: 'fade'}}
      />
      <HomeStack.Screen
        name={PATHS.GREETINGS_SCREEN}
        component={GreetingsScreen}
      />
    </HomeStack.Navigator>
  );
};
