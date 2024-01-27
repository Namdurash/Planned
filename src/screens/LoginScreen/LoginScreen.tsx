import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from '../../components/Text/Text';
import {TextInput} from '../../components/TextInput/TextInput';
import {storeLocalData} from '../../utils/AsyncStorage';
import {AsyncKeys} from '../../utils/async-keys';

export const LoginScreen = () => {
  const [text, setText] = useState('');

  const handleOnSubmit = () => {
    storeLocalData(AsyncKeys.userName, text);
  };

  return (
    <LinearGradient
      colors={['#FF8439', '#F93A3A']}
      start={{x: 0, y: 0.4}}
      end={{x: 0, y: 0.9}}>
      <Text>Write your name 😉</Text>
      <TextInput setText={setText} onSubmitEditing={handleOnSubmit} />
    </LinearGradient>
  );
};
