import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from '../../components/Text/Text';
import {TextInput} from '../../components/TextInput/TextInput';
import {storeLocalData} from '../../utils/AsyncStorage';
import {AsyncKeys} from '../../utils/async-keys';
import {Header} from '../../components/Header/Header';
import {styles} from './LoginScreen.styles';
import {COLORS} from '../../ui/colors';
import {useNavigation} from '@react-navigation/native';
import * as PATHS from '../../navigation/paths';
import {HomeStackNavigationProp} from '../../navigation/HomeNavigator/HomeNavigator.types';

export const LoginScreen = () => {
  const [text, setText] = useState('');
  const {navigate} = useNavigation<HomeStackNavigationProp>();

  const handleOnSubmit = () => {
    storeLocalData(AsyncKeys.userName, text);
    navigate(PATHS.WELCOME_SCREEN, {userName: text});
  };

  return (
    <LinearGradient
      colors={['#FF8439', '#F93A3A']}
      start={{x: 0, y: 0.4}}
      end={{x: 0, y: 0.9}}
      style={styles.container}>
      <Header />
      <Text
        color={COLORS.absoluteWhite}
        size={20}
        weight="SemiBold"
        customStyles={styles.title}>
        Write your name 😉
      </Text>
      <TextInput
        setText={setText}
        onSubmitEditing={handleOnSubmit}
        placeholder="name"
      />
    </LinearGradient>
  );
};
