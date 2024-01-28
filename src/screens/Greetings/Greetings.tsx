import React, {useCallback} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from '../../components/Text/Text';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {getLocalData} from '../../utils/AsyncStorage';
import {AsyncKeys} from '../../utils/async-keys';
import * as PATHS from '../../navigation/paths';
import {HomeStackNavigationProp} from '../../navigation/HomeNavigator/HomeNavigator.types';
import {COLORS} from '../../ui/colors';
import {styles} from './Greetings.styles';

export const GreetingsScreen = () => {
  const {navigate} = useNavigation<HomeStackNavigationProp>();

  const handleFocusEffect = useCallback(() => {
    const hasUserName = getLocalData(AsyncKeys.userName);
    hasUserName.then(res => {
      console.log('RESPONSE', res);
      res
        ? navigate(PATHS.WELCOME_SCREEN, {userName: res})
        : navigate(PATHS.LOGIN_SCREEN);
    });
  }, [navigate]);

  useFocusEffect(
    useCallback(() => {
      setTimeout(handleFocusEffect, 1000);
    }, [handleFocusEffect]),
  );

  return (
    <LinearGradient
      style={styles.container}
      colors={['#FF8439', '#F93A3A']}
      start={{x: 0, y: 0.4}}
      end={{x: 0, y: 0.9}}>
      <Text
        size={64}
        family="DancingScript"
        weight="Bold"
        color={COLORS.absoluteWhite}>
        Welcome
      </Text>
    </LinearGradient>
  );
};
