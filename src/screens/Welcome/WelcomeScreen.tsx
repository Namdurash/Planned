import React, {useCallback} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../ui/colors';
import {styles} from './WelcomeScreen.styles';
import * as PATHS from '../../navigation/paths';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {HomeStackNavigationProp} from '../../navigation/HomeNavigator/HomeNavigator.types';
import {Text} from '../../components/Text/Text';

export const WelcomeScreen = () => {
  const {navigate} = useNavigation<HomeStackNavigationProp>();

  useFocusEffect(
    useCallback(() => {
      setTimeout(() => navigate(PATHS.HOME_SCREEN), 3000);
    }, [navigate]),
  );

  return (
    <LinearGradient
      colors={[COLORS.orange, COLORS.absoluteWhite]}
      style={styles.container}
      start={{x: 0, y: 0.4}}
      end={{x: 0, y: 0.9}}>
      <Text
        weight="Bold"
        size={40}
        color={COLORS.absoluteWhite}
        customStyles={styles.title}>
        Hello, Kyrylo Korotych
      </Text>
      <Text weight="Bold" size={40} color={COLORS.absoluteWhite}>
        Start with your plan today
      </Text>
    </LinearGradient>
  );
};
