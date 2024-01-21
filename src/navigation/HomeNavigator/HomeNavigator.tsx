import * as React from 'react';
import * as PATHS from '../paths';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackParamsList} from './HomeNavigator.types';
import {Home} from '../../screens/Home/Home';
import {PlanCreator} from '../../screens/PlanCreator/PlanCreator';

const HomeStack = createNativeStackNavigator<HomeStackParamsList>();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName={PATHS.HOME}
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name={PATHS.HOME} component={Home} />
      <HomeStack.Screen name={PATHS.PLAN_CREATOR} component={PlanCreator} />
    </HomeStack.Navigator>
  );
};
