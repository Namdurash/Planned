import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const storeLocalData = async (key: string, value: any) => {
  try {
    if (typeof value === 'string') {
      await AsyncStorage.setItem(key, value);
      return;
    }
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    Alert.alert('Error happened when set to local storage');
  }
};

export const getLocalData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (typeof value === 'string' && value !== null) {
      return value;
    }
    return value != null ? JSON.parse(value) : null;
  } catch (e) {
    Alert.alert('Error happened when read local storage');
  }
};
