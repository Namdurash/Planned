import type {StackNavigationProp} from '@react-navigation/stack';
import * as PATHS from '../paths';

export type LoginStackParamsList = {
  [PATHS.LOGIN_SCREEN]: undefined;
};

export type LoginStackNavigationProp =
  StackNavigationProp<LoginStackParamsList>;
