import {TextStyle, ViewStyle} from 'react-native';

export interface ButtonProps {
  text: string;
  onPress: () => void;
  containerStyles?: ViewStyle;
  textStyles?: TextStyle;
}
