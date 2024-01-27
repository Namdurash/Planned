import type {StackNavigationProp} from '@react-navigation/stack';
import * as PATHS from '../paths';

export type HomeStackParamsList = {
  [PATHS.HOME_SCREEN]: undefined;
  [PATHS.PLAN_CREATOR_SCREEN]: undefined;
  [PATHS.WELCOME_SCREEN]: undefined;
  [PATHS.LOGIN_SCREEN]: undefined;
  [PATHS.GREETINGS_SCREEN]: undefined;
};

export type HomeStackNavigationProp = StackNavigationProp<HomeStackParamsList>;
